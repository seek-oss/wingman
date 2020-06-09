import { useLazyQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { FieldMessage, TextField } from 'braid-design-system';
import React, {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';

import { Location, LocationSuggestion } from 'lib/types/seek.graphql';

import LocationSuggestInput from './LocationSuggestInput';
import { LOCATION_SUGGEST } from './queries';

interface FieldProps extends ComponentPropsWithRef<typeof TextField> {}

interface Props extends Omit<FieldProps, 'value' | 'onChange'> {
  client?: ApolloClient<Record<string, unknown>>;
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

    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [locationSuggestInput, setLocationSuggestInput] = useState('');
    const [locationSuggestResults, setLocationSuggestResults] = useState<
      LocationSuggestion[]
    >();

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

    return (
      <>
        <LocationSuggestInput
          onSelect={handleSuggestSelect}
          onClear={() => setSelectedLocationId('')}
          onChange={setLocationSuggestInput}
          locationSuggestions={locationSuggestResults}
          {...restProps}
        />
        <input
          type="hidden"
          name={name}
          value={selectedLocationId}
          ref={forwardedRef}
          readOnly
        />
        {suggestError && (
          <FieldMessage
            id="suggestError"
            message="Error fetching location, please try again"
            tone="critical"
          />
        )}
      </>
    );
  },
);
