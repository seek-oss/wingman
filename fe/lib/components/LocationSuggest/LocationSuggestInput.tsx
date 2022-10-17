import matchHighlights from 'autosuggest-highlight/match';
import {
  Autosuggest,
  Button,
  Column,
  Columns,
  Dialog,
  IconLanguage,
  IconLocation,
  IconSearch,
  Text,
  TextField,
} from 'braid-design-system';
import React, { ComponentProps, useEffect, useState } from 'react';
import { SmartTextLink } from 'scoobie';

import type {
  GeoLocationInput,
  Location,
  LocationSuggestion,
} from '../../types/seekApi.graphql';
import { LocationSelectMap } from '../LocationSelectMap';

const SEEK_MEL_CENTER: [number, number] = [-37.8275, 144.9902];

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
  schemeId: string;
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
  schemeId,
  ...restProps
}: Props) => {
  const initialLocationSuggest = {
    text: initialLocation?.contextualName ?? '',
    value: initialLocation?.id.value ?? '',
  };

  const [locationSuggest, setLocationSuggest] = useState(
    initialLocationSuggest,
  );

  const [showMapDialog, setShowMapDialog] = useState(false);

  const [detectedLatLong, setDetectedLatLong] = useState<[number, number]>();

  useEffect(() => {
    if (initialLocation) {
      setLocationSuggest({
        text: initialLocation.contextualName,
        value: initialLocation.id.value,
      });
    }
  }, [initialLocation]);

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
          setDetectedLatLong([
            position.coords.latitude,
            position.coords.longitude,
          ]);
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

  const handleMapLocationSelected = (location: Location) => {
    setShowMapDialog(false);
    setLocationSuggest({
      text: location.contextualName,
      value: location.id.value,
    });
    onSelect(location);
  };

  return (
    <Columns alignY="bottom" collapseBelow="tablet" space="small">
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
          icon={<IconLanguage />}
          onClick={() => setShowMapDialog(true)}
          tone={tone === 'critical' ? tone : undefined}
          variant="soft"
        >
          Select on map
        </Button>
        <Dialog
          id="map-dialog"
          title="Select a location"
          width="medium"
          description={
            <Text tone="secondary">
              Select a point on the map to choose from a list of{' '}
              <SmartTextLink href="https://developer.seek.com/use-cases/job-posting/locations#nearestlocations">
                nearest locations
              </SmartTextLink>
            </Text>
          }
          open={showMapDialog}
          onClose={() => {
            setShowMapDialog(false);
          }}
        >
          <LocationSelectMap
            schemeId={schemeId}
            onLocationSelected={handleMapLocationSelected}
            initialLocation={detectedLatLong ?? SEEK_MEL_CENTER}
            mapHeight={{
              wide: 1300,
              desktop: 1300,
              tablet: 600,
              mobile: 600,
            }}
          />
        </Dialog>
      </Column>
      <Column width="content">
        <Button
          icon={<IconLocation />}
          loading={isLoading}
          onClick={handleDetectLocationClicked}
          tone={tone === 'critical' ? tone : undefined}
          variant="soft"
        >
          Detect location
        </Button>
      </Column>
    </Columns>
  );
};

export default LocationSuggestInput;
