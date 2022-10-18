import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { LocationSelectMap, LocationSelectMapProps } from './LocationSelectMap';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

interface Props extends LocationSelectMapProps {
  showStorybookAction?: boolean;
}

export const MockLocationSelectMap = ({
  client: _client,
  showStorybookAction,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        nearestLocations: () => mockNearestLocations,
      },
    }}
  >
    <MockComponentActions
      space="medium"
      showStorybookAction={showStorybookAction}
      storybookPath="/story/job-posting-locations-locationselectmap--location-select-map"
      sourcePath="lib/components/LocationSelectMap"
    >
      <LocationSelectMap {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
