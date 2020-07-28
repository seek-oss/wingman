import matchHighlights from 'autosuggest-highlight/match';
import {
  Autosuggest,
  Button,
  Column,
  Columns,
  IconLocation,
  IconSearch,
} from 'braid-design-system';
import React, { useState } from 'react';

import {
  GeoLocationInput,
  Location,
  LocationSuggestion,
} from '../../types/seek.graphql';

interface Suggestion {
  text: string;
  value?: string;
}

const mapLocationsToSuggestions = (
  locationSuggestions?: LocationSuggestion[],
): Suggestion[] =>
  locationSuggestions
    ? locationSuggestions.map(({ location }) => ({
        text: location.contextualName,
        value: location.id.value,
      }))
    : [];

const createHighlights = (string: string, input: string) => {
  const matched = matchHighlights(string, input);
  return (matched as number[][]).map(([start, end]) => ({
    start,
    end,
  }));
};

interface Props {
  onSelect: (location?: Location) => void;
  onChange: (textInput: string) => void;
  onClear: () => void;
  onDetectLocation: (input: GeoLocationInput | Error) => void;
  locationSuggestions?: LocationSuggestion[];
  placeholder: string;
  isLoading: boolean;
}

const LocationSuggestInput = ({
  onSelect,
  onChange,
  onClear,
  onDetectLocation,
  locationSuggestions,
  placeholder,
  isLoading,
  ...restProps
}: Props) => {
  const initialLocationSuggest = {
    text: '',
    value: '',
  };

  const [locationSuggest, setLocationSuggest] = useState(
    initialLocationSuggest,
  );

  const mappedSuggestions = mapLocationsToSuggestions(locationSuggestions);

  const highlightedSuggestions = mappedSuggestions.map(suggestion => ({
    ...suggestion,
    highlights: createHighlights(suggestion.text, locationSuggest.text),
  }));

  const handleClear = () => {
    setLocationSuggest(initialLocationSuggest);
    onClear();
  };

  const handleSelect = (selectedValue: string) => {
    const selectedLocation = locationSuggestions?.find(
      locationSuggestion =>
        locationSuggestion.location.id.value === selectedValue,
    )?.location;
    onSelect(selectedLocation);
  };

  const handleChange = ({ text, value = '' }: Suggestion) => {
    setLocationSuggest({ text, value });

    if (text !== '') {
      onChange(text);
    }

    if (value) {
      handleSelect(value);
    }
  };

  const handleDetectLocationClicked = () => {
    if (navigator.geolocation) {
      setLocationSuggest(initialLocationSuggest);
      navigator.geolocation.getCurrentPosition(position =>
        onDetectLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      );
    } else {
      onDetectLocation(
        new Error('Geolocation is not supported by this browser.'),
      );
    }
  };

  return (
    <Columns space="small">
      <Column>
        <Autosuggest
          placeholder={placeholder}
          icon={<IconSearch />}
          id="locationSuggestInput"
          automaticSelection={false}
          onClear={handleClear}
          onChange={handleChange}
          suggestions={highlightedSuggestions}
          value={locationSuggest}
          {...restProps}
        />
      </Column>
      <Column width="content">
        <Button
          loading={isLoading}
          weight="weak"
          onClick={handleDetectLocationClicked}
        >
          Detect location
          <IconLocation />
        </Button>
      </Column>
    </Columns>
  );
};

export default LocationSuggestInput;
