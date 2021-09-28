import { ApolloClient, useApolloClient } from '@apollo/client';
import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { LocationSuggest, LocationSuggestProps } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

interface Props extends Omit<LocationSuggestProps, 'client'> {
  client?: ApolloClient<unknown>;
  showStorybookAction?: boolean;
}

const Component = forwardRef<HTMLInputElement, Props>(
  (
    { client: _client, showStorybookAction: _showStorybookAction, ...props },
    ref,
  ) => {
    const client = useApolloClient();

    return <LocationSuggest {...props} client={client} ref={ref} />;
  },
);

export const MockLocationSuggest = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, showStorybookAction, ...props }, ref) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          nearestLocations: () => mockNearestLocations,
          locationSuggestions: () => mockLocationSuggest,
        },
      }}
    >
      <MockComponentActions
        space="medium"
        storybookPath={
          showStorybookAction
            ? '/story/job-posting-locations-locationsuggest--location-suggest'
            : undefined
        }
        sourcePath="lib/components/LocationSuggestion"
      >
        <Component {...props} ref={ref} />
      </MockComponentActions>
    </ApolloMockProvider>
  ),
);
