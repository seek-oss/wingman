import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { LocationSuggest } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

storiesOf('Locations', module)
  .add('Locations Suggest', () => (
    <LocationSuggest id="locationSuggest" schemeId="seekAnz" />
  ))
  .addDecorator((story) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          nearestLocations: () => mockNearestLocations,
          locationSuggestions: () => mockLocationSuggest,
        },
      }}
    >
      <BraidLoadableProvider themeName="apac">
        <Box paddingX="gutter" paddingY="large">
          {story()}
        </Box>
      </BraidLoadableProvider>
    </ApolloMockProvider>
  ));
