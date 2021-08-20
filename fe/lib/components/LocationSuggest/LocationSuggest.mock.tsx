import { ApolloClient, useApolloClient } from '@apollo/client';
import React, { forwardRef } from 'react';

import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { LocationSuggest, LocationSuggestProps } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

interface Props extends Omit<LocationSuggestProps, 'client'> {
  client?: ApolloClient<unknown>;
}

const Component = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, ...props }, ref) => {
    const client = useApolloClient();

    return <LocationSuggest {...props} client={client} ref={ref} />;
  },
);

export const MockLocationSuggest = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, ...props }, ref) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          nearestLocations: () => mockNearestLocations,
          locationSuggestions: () => mockLocationSuggest,
        },
      }}
    >
      <Component {...props} ref={ref} />
    </ApolloMockProvider>
  ),
);
