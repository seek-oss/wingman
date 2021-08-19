import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import { defaultArgTypes, defaultArgs } from '../../storybook/controls';
import { DesignDecorator } from '../../storybook/decorators';
import { createApolloMockClient } from '../../testing/ApolloMockProvider';

import { LocationSuggest as Component } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

export default {
  args: {
    id: 'locationSuggest',
    label: 'Location',
    message: 'undefined',
    reserveMessageSpace: false,
    schemeId: 'seekAnz',
    tone: defaultArgs.tone,
  },
  argTypes: {
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Please select a location.' },
      options: ['undefined', 'requiredValidation'],
    },
    tone: defaultArgTypes.tone,
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Job Posting/Locations/LocationSuggest',
};

type Args = ComponentProps<typeof Component>;

export const LocationSuggest = ({ client: _client, ...args }: Args) => {
  const client = createApolloMockClient({
    Query: {
      nearestLocations: () => mockNearestLocations,
      locationSuggestions: () => mockLocationSuggest,
    },
  });

  return <Component {...args} client={client} />;
};
LocationSuggest.storyName = 'LocationSuggest';
