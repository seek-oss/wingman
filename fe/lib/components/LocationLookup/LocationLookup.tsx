import { ApolloClient, useLazyQuery } from '@apollo/client';
import {
  FieldMessage,
  Loader,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';
import { InlineCode } from 'scoobie';
import { useDebounce } from 'use-debounce';

import {
  LocationQuery,
  LocationQueryVariables,
} from '../../types/seekApi.graphql';
import { flattenResourceByKey } from '../../utils/flattenResourceByKey';
import { BreadCrumbsString } from '../BreadCrumbsString/BreadCrumbsString';
import { LOCATION } from '../LocationSuggest/queries';
import { SeekApiResponse } from '../SeekApiResponse/SeekApiResponse';

export interface LocationLookupProps {
  schemeId: string;
  client?: ApolloClient<unknown>;
  initialLocationId?: string;
  debounceDelay?: number;
}

export const LocationLookup = ({
  schemeId,
  initialLocationId,
  debounceDelay = 250,
  client,
}: LocationLookupProps) => {
  const [locationId, setLocationId] = useState(initialLocationId ?? '');

  const [debouncedLocationId] = useDebounce(locationId, debounceDelay);

  const [
    locationLookup,
    { data: locationData, error: locationError, loading: locationLoading },
  ] = useLazyQuery<LocationQuery, LocationQueryVariables>(LOCATION, {
    ...(client && { client }),
  });

  useEffect(() => {
    if (debouncedLocationId) {
      locationLookup({
        variables: {
          id: debouncedLocationId,
        },
      });
    }
  }, [locationLookup, debouncedLocationId]);

  return (
    <Stack dividers space="large">
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

      {locationLoading && <Loader />}

      {locationError && (
        <FieldMessage
          id="locationLookupError"
          message="Sorry, we couldn’t fetch the location. Please try again."
          tone="critical"
        />
      )}

      {locationData &&
        (locationData.location ? (
          <>
            <BreadCrumbsString
              segments={flattenResourceByKey(locationData.location, 'parent')
                .map((x) => ({ name: x.name, key: x.id.value }))
                .reverse()}
            />

            <SeekApiResponse id="locationLookupSeekApiResponse">
              {locationData.location}
            </SeekApiResponse>
          </>
        ) : (
          <Notice tone="info">
            <Text>Hmm, we can’t find that location.</Text>
          </Notice>
        ))}
    </Stack>
  );
};
