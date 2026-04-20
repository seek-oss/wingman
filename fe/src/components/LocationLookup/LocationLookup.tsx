import type { ApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import {
  Divider,
  FieldMessage,
  Loader,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import { useState } from 'react';
import { InlineCode } from 'scoobie';
import { useDebounce } from 'use-debounce';

import type {
  LocationQuery,
  LocationQueryVariables,
} from '../../types/seekApi.graphql';
import { flattenResourceByKey } from '../../utils/flattenResourceByKey';
import { BreadCrumbsString } from '../BreadCrumbsString/BreadCrumbsString';
import { LOCATION } from '../LocationSuggest/queries';
import { SeekApiResponse } from '../SeekApiResponse/SeekApiResponse';

export interface LocationLookupProps {
  schemeId: string;
  client?: ApolloClient;
  context?: Record<string, unknown>;
  initialLocationId?: string;
  debounceDelay?: number;
}

export const LocationLookup = ({
  schemeId,
  initialLocationId,
  debounceDelay = 250,
  client,
  context,
}: LocationLookupProps) => {
  const [locationId, setLocationId] = useState(initialLocationId ?? '');

  const [debouncedLocationId] = useDebounce(locationId, debounceDelay);

  const {
    data: locationData,
    error: locationError,
    loading: locationLoading,
  } = useQuery<LocationQuery, LocationQueryVariables>(LOCATION, {
    ...(client && { client }),
    context,
    skip: !debouncedLocationId,
    variables: {
      id: debouncedLocationId,
    },
  });

  return (
    <Stack space="large">
      <Stack space="medium">
        <TextField
          aria-label="Location OID"
          id="locationLookupId"
          onClear={() => setLocationId('')}
          value={locationId ?? ''}
          onChange={(event) => setLocationId(event.currentTarget.value)}
          name="locationId"
        />

        <FieldMessage
          id="locationIdMessage"
          message={
            <>
              e.g. <InlineCode>{schemeId}:location:seek:2FqwWaaMV</InlineCode>
            </>
          }
        />
      </Stack>

      {locationLoading && (
        <>
          <Divider />
          <Loader />
        </>
      )}

      {locationError && (
        <>
          <Divider />
          <FieldMessage
            id="locationLookupError"
            message="Sorry, we couldn’t retrieve this location. Please try again."
            tone="critical"
          />
        </>
      )}

      {locationData &&
        (locationData.location ? (
          <>
            <Divider />
            <BreadCrumbsString
              segments={flattenResourceByKey(
                locationData.location,
                'parent',
              ).map((x) => ({ name: x.name, key: x.id.value }))}
            />
            <Divider />
            <SeekApiResponse
              data={locationData.location}
              id="locationLookupSeekApiResponse"
            />
          </>
        ) : (
          <>
            <Divider />
            <Notice tone="info">
              <Text>Hmm, we can’t find that location.</Text>
            </Notice>
          </>
        ))}
    </Stack>
  );
};
