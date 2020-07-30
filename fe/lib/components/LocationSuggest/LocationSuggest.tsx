import { useLazyQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { FieldMessage, Stack, TextField } from 'braid-design-system';
import React, {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';

import {
  GeoLocationInput,
  Location,
  LocationSuggestion,
  Maybe,
  QueryLocationSuggestionsArgs,
  QueryNearestLocationsArgs,
} from '../../types/seek.graphql';

import LocationSuggestInput from './LocationSuggestInput';
import { LOCATION_SUGGEST, NEAREST_LOCATIONS } from './queries';

interface FieldProps extends ComponentPropsWithRef<typeof TextField> {}

interface Props extends Omit<FieldProps, 'value' | 'onChange'> {
  client?: ApolloClient<unknown>;
  debounceDelay?: number;
  first?: number;
  usageTypeCode?: string;
  schemeId: string;
  hirerId?: string;
  onSelect?: (location?: Location) => void;
}

export const LocationSuggest = forwardRef<HTMLInputElement, Props>(
  (
    {
      client,
      debounceDelay = 250,
      first = 5,
      usageTypeCode = 'PositionPosting',
      schemeId,
      hirerId,
      onSelect,
      name,
      ...restProps
    },
    forwardedRef,
  ) => {
    const [
      getLocationSuggest,
      { data: suggestData, error: suggestError },
    ] = useLazyQuery<
      { locationSuggestions: Maybe<Array<LocationSuggestion>> },
      QueryLocationSuggestionsArgs
    >(LOCATION_SUGGEST, {
      ...(client && { client }),
      fetchPolicy: 'no-cache',
    });

    const [
      nearestLocations,
      {
        data: nearestLocationsData,
        error: nearestLocationsError,
        loading: nearestLocationsLoading,
      },
    ] = useLazyQuery<
      { nearestLocations: Maybe<Array<Location>> },
      QueryNearestLocationsArgs
    >(NEAREST_LOCATIONS, {
      ...(client && { client }),
      fetchPolicy: 'no-cache',
    });

    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [locationSuggestInput, setLocationSuggestInput] = useState('');
    const [locationSuggestResults, setLocationSuggestResults] = useState<
      LocationSuggestion[]
    >();

    const [placeholder, setPlaceholder] = useState('');
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

    useEffect(() => {
      if (suggestData?.locationSuggestions) {
        setLocationSuggestResults(suggestData.locationSuggestions);
      }
    }, [suggestData]);

    useEffect(() => {
      if (nearestLocationsData && nearestLocationsData.nearestLocations) {
        // The closest SEEK location returned for the geolocation input
        const closestLocation = nearestLocationsData.nearestLocations[0];

        const { contextualName } = closestLocation;

        setPlaceholder(contextualName);
        handleLocationSelect(closestLocation);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nearestLocationsData]);

    return (
      <Stack space="xsmall">
        <LocationSuggestInput
          isLoading={nearestLocationsLoading}
          onSelect={handleLocationSelect}
          onDetectLocation={handleDetectLocationClicked}
          onClear={() => {
            setSelectedLocationId('');
            setPlaceholder('');
          }}
          onChange={setLocationSuggestInput}
          locationSuggestions={locationSuggestResults}
          placeholder={placeholder}
          {...restProps}
        />
        <input
          type="hidden"
          name={name}
          value={selectedLocationId}
          ref={forwardedRef}
          readOnly
        />
        {(suggestError || nearestLocationsError) && (
          <FieldMessage
            id="suggestError"
            message="Error fetching location, please try again"
            tone="critical"
          />
        )}
      </Stack>
    );
  },
);
