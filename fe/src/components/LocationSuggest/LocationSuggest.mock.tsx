import type { ApolloClient } from '@apollo/client';
import { useApolloClient } from '@apollo/client/react';
import { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { LocationSuggest, type LocationSuggestProps } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

interface Props extends Omit<LocationSuggestProps, 'client'> {
  client?: ApolloClient;
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
        showStorybookAction={showStorybookAction}
        storybookPath="/story/job-posting-locations-locationsuggest--location-suggest"
        sourcePath="lib/components/LocationSuggest"
      >
        <Component {...props} ref={ref} />
      </MockComponentActions>
    </ApolloMockProvider>
  ),
);
