import matchHighlights from 'autosuggest-highlight/match';
import { Autosuggest, IconSearch } from 'braid-design-system';
import { Location, LocationSuggestion } from 'lib/types/seek.graphql';
import React, { useState } from 'react';

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
  locationSuggestions?: LocationSuggestion[];
}

const LocationSuggestInput = ({
  onSelect,
  onChange,
  onClear,
  locationSuggestions,
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

  return (
    <Autosuggest
      icon={<IconSearch />}
      id="locationSuggestInput"
      automaticSelection={false}
      onClear={handleClear}
      onChange={handleChange}
      suggestions={highlightedSuggestions}
      value={locationSuggest}
      {...restProps}
    />
  );
};

export default LocationSuggestInput;
