import { useQuery } from '@apollo/client';
import {
  Alert,
  Box,
  ButtonIcon,
  Column,
  Columns,
  IconClear,
  Stack,
  Text,
  useColor,
  useResponsiveValue,
} from 'braid-design-system';
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps';
import React from 'react';
import { useState } from 'react';
import { InlineCode } from 'scoobie';
import { useDebounce } from 'use-debounce';

import { Location, NearbyLocationsQuery } from '../../../types/seekApi.graphql';
import { formatPoint } from '../../../utils/formatPoint';

import { NEAREST_LOCATIONS } from './queries';

import * as styles from './styles.css';

const DEFAULT_ZOOM = 10;

interface Props {
  debounceDelay?: number;
  schemeId: string;
  onLocationSelected: (location: Location) => void;
  initialLocation: [number, number];
}

export const MapSelect = ({
  debounceDelay = 250,
  schemeId,
  onLocationSelected,
  initialLocation,
}: Props) => {
  const [latLong, setLatLong] = useState(initialLocation);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const responsiveValue = useResponsiveValue();
  const color = useColor();
  const [debouncedLatLong] = useDebounce(latLong, debounceDelay);

  const { data, previousData } = useQuery<NearbyLocationsQuery>(
    NEAREST_LOCATIONS,
    {
      variables: {
        geoLocation: {
          latitude: debouncedLatLong[0],
          longitude: debouncedLatLong[1],
        },
        schemeId,
      },
    },
  );

  const nearestLocations =
    data?.nearestLocations ?? previousData?.nearestLocations;

  const isDesktopOrAbove = responsiveValue({
    mobile: false,
    desktop: true,
  });

  const NearestLocationsCards = () => (
    <Box borderRadius="standard" background="surface">
      <Stack dividers space="none">
        <Box
          paddingX="medium"
          paddingY={{ desktop: 'xsmall', tablet: 'small', mobile: 'small' }}
        >
          <Columns space="small" alignY="center">
            <Column>
              <Text weight="strong" size="small">
                {`Locations near ${formatPoint(latLong)}`}
              </Text>
            </Column>
            {isDesktopOrAbove ? (
              <Column width="content">
                <ButtonIcon
                  icon={<IconClear />}
                  tone="secondary"
                  id="clear-nearest-suggestions-button"
                  label="Clear Suggestions"
                  onClick={() => setShowSuggestions(false)}
                />
              </Column>
            ) : null}
          </Columns>
        </Box>
        {nearestLocations?.map((location) => (
          <Box
            className={styles.card}
            cursor="pointer"
            padding="medium"
            key={location.id.value}
            onClick={() => onLocationSelected(location)}
          >
            <Stack space="small">
              <Text size="small">{location.contextualName}</Text>
              <InlineCode>{location.id.value}</InlineCode>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );

  const NoLocationsNotice = () => (
    <Alert
      tone="info"
      onClose={() => setShowSuggestions(false)}
      closeLabel="Close"
    >
      <Text>No locations found.</Text>
    </Alert>
  );

  const hasNearestLocations = nearestLocations && nearestLocations.length > 0;
  const suggestionsOffset: [number, number] = [-40, 130];

  return (
    <Box>
      <Map
        defaultCenter={initialLocation}
        defaultZoom={DEFAULT_ZOOM}
        height={isDesktopOrAbove ? 1500 : 600}
        onClick={({ latLng }) => {
          setLatLong(latLng);
          setShowSuggestions(true);
        }}
        animate={true}
        animateMaxScreens={100}
        center={latLong}
      >
        <Marker
          color={color.foreground.formAccentLight}
          anchor={latLong}
          onClick={() => setLatLong(latLong)}
        />
        {/* View for desktops and above */}
        {showSuggestions && isDesktopOrAbove && (
          <Overlay anchor={latLong} offset={suggestionsOffset}>
            {hasNearestLocations ? (
              <NearestLocationsCards />
            ) : (
              <NoLocationsNotice />
            )}
          </Overlay>
        )}
        <ZoomControl />
      </Map>

      {/* Views for tablets and below */}
      {!isDesktopOrAbove && (
        <>
          {hasNearestLocations ? (
            <Stack dividers space="none">
              <NearestLocationsCards />
            </Stack>
          ) : (
            <NoLocationsNotice />
          )}
        </>
      )}
    </Box>
  );
};
