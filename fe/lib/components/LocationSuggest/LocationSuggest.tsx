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
    ] = useLazyQuery(LOCATION_SUGGEST, {
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
    ] = useLazyQuery(NEAREST_LOCATIONS, {
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

    const handleSuggestSelect = (selectedLocation?: Location) => {
      if (onSelect) {
        onSelect(selectedLocation);
      }
      if (selectedLocation?.id?.value) {
        setSelectedLocationId(selectedLocation.id.value);
      }
    };

    const handleDetectLocationClicked = (input: GeoLocationInput | Error) => {
      if (input instanceof Error) {
        return (
          <FieldMessage
            id="nearestLocationsError"
            message={input.message}
            tone="critical"
          />
        );
      }
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
      if (nearestLocationsData) {
        // The closest SEEK location returned for the geolocation input
        const closestLocation = nearestLocationsData.nearestLocations[0];

        const {
          contextualName,
          id: { value },
        } = closestLocation;

        setPlaceholder(contextualName);
        setSelectedLocationId(value);
      }
    }, [nearestLocationsData]);

    return (
      <Stack space="xsmall">
        <LocationSuggestInput
          isLoading={nearestLocationsLoading}
          onSelect={handleSuggestSelect}
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
