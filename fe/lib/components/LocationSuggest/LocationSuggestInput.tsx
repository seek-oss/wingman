import matchHighlights from 'autosuggest-highlight/match';
import {
  Autosuggest,
  Button,
  Column,
  Columns,
  IconLocation,
  IconSearch,
  TextField,
} from 'braid-design-system';
import React, { ComponentProps, useEffect, useState } from 'react';

import type {
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
  label: string;
  isLoading: boolean;
  locationSuggestions?: LocationSuggestion[];
  onChange: (textInput: string) => void;
  onClear: () => void;
  onDetectLocation: (input: GeoLocationInput) => void;
  onSelect: (location?: Location) => void;
  placeholder: string;
  setDetectLocationError: (err?: string) => void;
  tone: ComponentProps<typeof TextField>['tone'];
  initialLocation?: Location;
}

const LocationSuggestInput = ({
  isLoading,
  locationSuggestions,
  onChange,
  onClear,
  onDetectLocation,
  onSelect,
  placeholder,
  setDetectLocationError,
  tone,
  initialLocation,
  ...restProps
}: Props) => {
  const initialLocationSuggest = {
    text: initialLocation?.contextualName ?? '',
    value: initialLocation?.id.value ?? '',
  };

  const [locationSuggest, setLocationSuggest] = useState(
    initialLocationSuggest,
  );

  useEffect(() => {
    setLocationSuggest(initialLocationSuggest);
  }, [initialLocation])

  const mappedSuggestions = mapLocationsToSuggestions(locationSuggestions);

  const highlightedSuggestions = mappedSuggestions.map((suggestion) => ({
    ...suggestion,
    highlights: createHighlights(suggestion.text, locationSuggest.text),
  }));

  const handleClear = () => {
    setLocationSuggest(initialLocationSuggest);
    onClear();
  };

  const handleSelect = (selectedValue: string) => {
    const selectedLocation = locationSuggestions?.find(
      (locationSuggestion) =>
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onDetectLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setDetectLocationError();
        },
        () =>
          setDetectLocationError(
            'Sorry, we couldn’t detect your current location. Please try again.',
          ),
      );
    } else {
      setDetectLocationError('Sorry, we can’t detect your current location.');
    }
  };

  return (
    <Columns space="small" alignY="bottom">
      <Column>
        <Autosuggest
          {...restProps}
          placeholder={placeholder}
          icon={<IconSearch />}
          id="locationSuggestInput"
          automaticSelection={false}
          onClear={handleClear}
          onChange={handleChange}
          suggestions={highlightedSuggestions}
          tone={tone}
          value={locationSuggest}
        />
      </Column>
      <Column width="content">
        <Button
          loading={isLoading}
          onClick={handleDetectLocationClicked}
          tone={tone === 'critical' ? tone : undefined}
          variant="soft"
        >
          Detect <IconLocation />
        </Button>
      </Column>
    </Columns>
  );
};

export default LocationSuggestInput;
