import { ApolloClient, useLazyQuery, useQuery } from '@apollo/client';
import { FieldMessage, Stack, TextField } from 'braid-design-system';
import React, {
  ComponentPropsWithRef,
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

import LocationSuggestInput from './LocationSuggestInput';
import { LOCATION, LOCATION_SUGGEST, NEAREST_LOCATIONS } from './queries';

type FieldProps = ComponentPropsWithRef<typeof TextField>;

export interface LocationSuggestProps
  extends Omit<FieldProps, 'value' | 'onChange'> {
  client: ApolloClient<unknown>;
  debounceDelay?: number;
  first?: number;
  hirerId?: string;
  label: string;
  onSelect?: (location?: Location) => void;
  schemeId: string;
  usageTypeCode?: string;
  initialValue?: string;
}

export const LocationSuggest = forwardRef<
  HTMLInputElement,
  LocationSuggestProps
>(
  (
    {
      client,
      debounceDelay = 250,
      first = 5,
      hirerId,
      onSelect,
      schemeId,
      usageTypeCode = 'PositionPosting',
      initialValue,

      message,
      name,
      reserveMessageSpace,
      tone,

      ...restProps
    },
    forwardedRef,
  ) => {
    const [selectedLocationId, setSelectedLocationId] = useState('');
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
        // Avoid polluting the Apollo cache with partial searches
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
          if (
            data.locationSuggestions?.length &&
            Boolean(detectLocationError)
          ) {
            // Reset any errors on a successful location search
            setDetectLocationError('');
          }
        },
      },
    );

    const { data: initialLocation } = useQuery<
      LocationQuery,
      LocationQueryVariables
    >(LOCATION, {
      variables: { id: initialValue ?? '' },
      skip: initialValue === undefined,
      client,
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
      {
        client,
      },
    );

    const handleLocationSelect = (selectedLocation?: Location) => {
      if (onSelect) {
        onSelect(selectedLocation);
      }
      if (selectedLocation?.id?.value) {
        setSelectedLocationId(selectedLocation.id.value);
      }
    };

    const handleDetectLocationClicked = (input: GeoLocationInput) => {
      nearestLocations({
        variables: {
          schemeId,
          geoLocation: input,
        },
      });
    };

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
              setSelectedLocationId('');
              setPlaceholder('');
            }}
            onDetectLocation={handleDetectLocationClicked}
            onSelect={handleLocationSelect}
            placeholder={placeholder}
            setDetectLocationError={setDetectLocationError}
            tone={tone}
            initialLocation={initialLocation?.location ?? undefined}
          />

          <input
            type="hidden"
            name={name}
            value={selectedLocationId}
            ref={forwardedRef}
            readOnly
          />
        </Stack>

        {(message || reserveMessageSpace) && (
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
      </Stack>
    );
  },
);
