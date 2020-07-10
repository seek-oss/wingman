import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import { createMockClient } from 'mock-apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { storiesOf } from 'sku/@storybook/react';

import { LocationSuggest } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { LOCATION_SUGGEST } from './queries';

const mockClient = createMockClient();

mockClient.setRequestHandler(LOCATION_SUGGEST, () =>
  Promise.resolve({ data: mockLocationSuggest }),
);

storiesOf('Locations', module)
  .add('Locations Suggest', () => (
    <LocationSuggest id="locationSuggest" schemeId="seekAnz" />
  ))
  .addDecorator((story) => (
    <ApolloProvider client={mockClient}>
      <BraidLoadableProvider themeName="apac">
        <Box paddingX="gutter" paddingY="large">
          {story()}
        </Box>
      </BraidLoadableProvider>
    </ApolloProvider>
  ));
