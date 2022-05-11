import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { LocationQueryVariables } from '../../types/seekApi.graphql';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { LocationLookup, LocationLookupProps } from './LocationLookup';
import { mockLocation } from './__fixtures__/location';

interface Props extends LocationLookupProps {
  showStorybookAction?: boolean;
}

export const MockLocationLookup = ({
  client: _client,
  showStorybookAction,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        location: (_root, args: LocationQueryVariables) =>
          args.id === 'seekAnz:location:seek:2FqwWaaMV'
            ? mockLocation
            : undefined,
      },
    }}
  >
    <MockComponentActions
      space="medium"
      showStorybookAction={showStorybookAction}
      storybookPath="/story/job-posting-locations-locationlookup--location-lookup"
      sourcePath="lib/components/LocationLookup"
    >
      <LocationLookup {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
