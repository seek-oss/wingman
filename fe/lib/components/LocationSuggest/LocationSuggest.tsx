import type { ApolloClient } from '@apollo/client';
import { useLazyQuery, useQuery } from '@apollo/client/react';
import { FieldMessage, Stack, type TextField } from 'braid-design-system';
import React, {
  type ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';

import type {
  GeoLocationInput,
  Location,
  LocationQuery,
  LocationQueryVariables,
  NearestLocationsQuery,
  NearestLocationsQueryVariables,
  SuggestLocationsQuery,
  SuggestLocationsQueryVariables,
} from '../../types/seekApi.graphql';
import { flattenResourceByKey } from '../../utils';
import { BreadCrumbsString } from '../BreadCrumbsString/BreadCrumbsString';

import LocationSuggestInput from './LocationSuggestInput';
import { LOCATION, LOCATION_SUGGEST, NEAREST_LOCATIONS } from './queries';

type FieldProps = ComponentPropsWithRef<typeof TextField>;

export interface LocationSuggestProps
  extends Omit<FieldProps, 'value' | 'onChange'> {
  client?: ApolloClient;
  context?: Record<string, unknown>;
  debounceDelay?: number;
  first?: number;
  hirerId?: string;
  label: string;
  onSelect?: (location?: Location) => void;
  schemeId: string;
  usageTypeCode?: string;
  initialValue?: string;
  showBreadcrumbs?: boolean;
}

export const LocationSuggest = forwardRef<
  HTMLInputElement,
  LocationSuggestProps
>(
  (
    {
      client,
      context,
      debounceDelay = 250,
      first = 5,
      hirerId,
      onSelect,
      onClear,
      schemeId,
      usageTypeCode = 'PositionPosting',
      initialValue,

      message,
      name,
      reserveMessageSpace,
      tone,
      showBreadcrumbs,

      ...restProps
    },
    forwardedRef,
  ) => {
    const [selectedLocation, setSelectedLocation] = useState<Location>();
    const [locationSuggestInput, setLocationSuggestInput] = useState('');
    const [detectLocationError, setDetectLocationError] = useState<string>();

    const [placeholder, setPlaceholder] = useState('');
    const [debounceLocationSuggestInput] = useDebounce(
      locationSuggestInput,
      debounceDelay,
    );

    const {
      data: suggestData,
      previousData: previousSuggestData,
      error: suggestError,
    } = useQuery<SuggestLocationsQuery, SuggestLocationsQueryVariables>(
      LOCATION_SUGGEST,
      {
        variables: {
          usageTypeCode,
          schemeId,
          hirerId,
          first,
          text: debounceLocationSuggestInput,
        },
        skip: !Boolean(debounceLocationSuggestInput),

        client,
        context,
        // Avoid polluting the Apollo cache with partial searches
        fetchPolicy: 'no-cache',
      },
    );

    const { data: initialLocation } = useQuery<
      LocationQuery,
      LocationQueryVariables
    >(LOCATION, {
      variables: { id: initialValue ?? '' },
      skip: initialValue === undefined,
      client,
      context,
    });

    const [
      nearestLocations,
      {
        data: nearestLocationsData,
        error: nearestLocationsError,
        loading: nearestLocationsLoading,
      },
    ] = useLazyQuery<NearestLocationsQuery, NearestLocationsQueryVariables>(
      NEAREST_LOCATIONS,
      { client },
    );

    const handleLocationSelect = (value?: Location) => {
      if (onSelect) {
        onSelect(value);
      }
      if (value) {
        setSelectedLocation(value);
      }
    };

    const handleDetectLocationClicked = (input: GeoLocationInput) => {
      nearestLocations({
        variables: {
          schemeId,
          geoLocation: input,
        },
        context,
      });
    };

    useEffect(() => {
      if (
        suggestData?.locationSuggestions?.length &&
        Boolean(detectLocationError)
      ) {
        // Reset any errors on a successful location search
        setDetectLocationError('');
      }
    }, [suggestData?.locationSuggestions, detectLocationError]);

    useEffect(() => {
      if (nearestLocationsData?.nearestLocations) {
        // The closest SEEK location returned for the geolocation input
        const closestLocation = nearestLocationsData.nearestLocations[0];

        const { contextualName } = closestLocation;

        setPlaceholder(contextualName);
        handleLocationSelect(closestLocation);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nearestLocationsData]);

    return (
      <Stack space="small">
        <Stack space="none">
          <LocationSuggestInput
            {...restProps}
            isLoading={nearestLocationsLoading}
            locationSuggestions={
              // Keep showing previous suggestions while we're loading
              suggestData?.locationSuggestions ??
              previousSuggestData?.locationSuggestions ??
              undefined
            }
            onChange={setLocationSuggestInput}
            onClear={() => {
              setSelectedLocation(undefined);
              setPlaceholder('');
              onClear?.();
            }}
            onDetectLocation={handleDetectLocationClicked}
            onSelect={handleLocationSelect}
            placeholder={placeholder}
            setDetectLocationError={setDetectLocationError}
            tone={tone}
            initialLocation={initialLocation?.location ?? undefined}
            schemeId={schemeId}
            client={client}
            context={context}
            hirerId={hirerId}
          />

          <input
            type="hidden"
            name={name}
            value={selectedLocation?.id.value ?? ''}
            ref={forwardedRef}
            readOnly
          />
        </Stack>

        {(Boolean(message) || reserveMessageSpace) && (
          <FieldMessage
            id="locationSuggestMessage"
            message={message}
            reserveMessageSpace={
              suggestError || nearestLocationsError
                ? undefined
                : reserveMessageSpace
            }
            tone={tone}
          />
        )}

        {suggestError && (
          <FieldMessage
            id="locationSuggestError"
            message={suggestError.message}
            tone="critical"
          />
        )}

        {nearestLocationsError && (
          <FieldMessage
            id="locationSuggestNearestLocationsError"
            message={nearestLocationsError.message}
            tone="critical"
          />
        )}

        {detectLocationError ? (
          <FieldMessage
            id="locationSuggestDetectLocationError"
            message={detectLocationError}
            tone="critical"
          />
        ) : null}

        {showBreadcrumbs && selectedLocation ? (
          <BreadCrumbsString
            segments={flattenResourceByKey(selectedLocation, 'parent').map(
              (x) => ({ name: x.name, key: x.id.value }),
            )}
          />
        ) : null}
      </Stack>
    );
  },
);
