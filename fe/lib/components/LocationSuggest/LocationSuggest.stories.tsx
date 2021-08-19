import 'braid-design-system/reset';

import { useApolloClient } from '@apollo/client';
import { boolean, select } from '@storybook/addon-knobs';
import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { LocationSuggest } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

const Story = () => {
  const client = useApolloClient();
  const requiredValidation = 'Please select a location.';

  const message = select(
    'message',
    {
      undefined,
      requiredValidation,
    },
    undefined,
  );

  const tone = select(
    'tone',
    {
      undefined,
      critical: 'critical',
      neutral: 'neutral',
      positive: 'positive',
    },
    undefined,
  );

  return (
    <LocationSuggest
      client={client}
      id="locationSuggest"
      label="Location"
      message={message}
      reserveMessageSpace={boolean('reserveMessageSpace', false)}
      schemeId="seekAnz"
      tone={tone}
    />
  );
};

storiesOf('LocationSuggest', module)
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
  ))
  .add('LocationSuggest', () => <Story />);
