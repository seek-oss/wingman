import { ApolloClient, useLazyQuery } from '@apollo/client';
import { FieldMessage, Stack, TextField } from 'braid-design-system';
import React, {
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';

import type {
  GeoLocationInput,
  Location,
  LocationQuery,
  LocationQueryVariables,
  LocationSuggestion,
  NearestLocationsQuery,
  NearestLocationsQueryVariables,
  SuggestLocationsQuery,
  SuggestLocationsQueryVariables,
} from '../../types/seekApi.graphql';

import LocationSuggestInput from './LocationSuggestInput';
import { LOCATION, LOCATION_SUGGEST, NEAREST_LOCATIONS } from './queries';

type FieldProps = ComponentPropsWithRef<typeof TextField>;

interface Props extends Omit<FieldProps, 'value' | 'onChange'> {
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

export const LocationSuggest = forwardRef<HTMLInputElement, Props>(
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
    const [getLocationSuggest, { data: suggestData, error: suggestError }] =
      useLazyQuery<SuggestLocationsQuery, SuggestLocationsQueryVariables>(
        LOCATION_SUGGEST,
        {
          ...(client && { client }),
          fetchPolicy: 'no-cache',
          onCompleted: (data) => {
            if (
              data.locationSuggestions &&
              data.locationSuggestions.length > 0 &&
              Boolean(detectLocationError)
            ) {
              // Reset any errors on a successful location search
              setDetectLocationError('');
            }
          },
        },
      );

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
        ...(client && { client }),
        fetchPolicy: 'no-cache',
      },
    );

    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [locationSuggestInput, setLocationSuggestInput] = useState('');
    const [locationSuggestResults, setLocationSuggestResults] =
      useState<LocationSuggestion[]>();
    const [detectLocationError, setDetectLocationError] = useState<string>();

    const [placeholder, setPlaceholder] = useState('');
    const [initialLocation, setInitialLocation] = useState<Location>();
    const [debounceLocationSuggestInput] = useDebounce(
      locationSuggestInput,
      debounceDelay,
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
      if (debounceLocationSuggestInput) {
        getLocationSuggest({
          variables: {
            usageTypeCode,
            schemeId,
            hirerId,
            first,
            text: debounceLocationSuggestInput,
          },
        });
      }
    }, [
      usageTypeCode,
      schemeId,
      hirerId,
      first,
      debounceLocationSuggestInput,
      getLocationSuggest,
    ]);

    const loadInitialLocation = useCallback(async () => {
      if (
        !initialValue ||
        initialLocation?.id.value === initialValue ||
        selectedLocationId
      ) {
        return;
      }

      const { data } = await client.query<
        LocationQuery,
        LocationQueryVariables
      >({
        ...(client && { client }),
        fetchPolicy: 'no-cache',
        query: LOCATION,
        variables: { id: initialValue },
      });

      if (!data.location) {
        return;
      }

      setInitialLocation(data.location);

      if (!selectedLocationId) {
        setSelectedLocationId(data.location.id.value);
      }
    }, [initialValue, client, selectedLocationId, initialLocation]);

    useEffect(() => {
      loadInitialLocation();
    }, [loadInitialLocation]);

    useEffect(() => {
      if (suggestData?.locationSuggestions) {
        setLocationSuggestResults(suggestData.locationSuggestions);
      }
    }, [suggestData]);

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
            locationSuggestions={locationSuggestResults}
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
            initialLocation={initialLocation}
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
            message={suggestError}
            tone="critical"
          />
        )}

        {nearestLocationsError && (
          <FieldMessage
            id="locationSuggestNearestLocationsError"
            message={nearestLocationsError}
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
