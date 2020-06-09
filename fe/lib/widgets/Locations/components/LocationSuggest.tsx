import { useLazyQuery } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { FieldMessage } from 'braid-design-system';
import { FieldProps } from 'braid-design-system/lib/components/private/Field/Field';
import { useDebounce } from 'lib/hooks/useDebounce';
import { Location, LocationSuggestion } from 'lib/types/seek.graphql';
import React, { forwardRef, useEffect, useState } from 'react';

import { LOCATION_SUGGEST } from '../';

import LocationSuggestInput from './LocationSuggestInput';

interface Props extends Omit<FieldProps, 'value'> {
  client: ApolloClient<Record<string, unknown>>;
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
      client,
      fetchPolicy: 'no-cache',
    });

    const [selectedLocationId, setselectedLocationId] = useState('');
    const [locationSuggestInput, setLocationSuggestInput] = useState('');
    const [locationSuggestResults, setLocationSuggestResults] = useState<
      LocationSuggestion[]
    >();

    const debounceLocationSuggestInput = useDebounce(
      locationSuggestInput,
      debounceDelay,
    );

    const handleSuggestSelect = (selectedLocation?: Location) => {
      if (onSelect) {
        onSelect(selectedLocation);
      }
      if (selectedLocation?.id?.value) {
        setselectedLocationId(selectedLocation.id.value);
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
          onClear={() => setselectedLocationId('')}
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
