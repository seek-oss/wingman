import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';
import { createApolloMockClient } from '../../testing/ApolloMockProvider';

import { LocationSuggest as Component } from './LocationSuggest';
import { mockLocationSuggest } from './__fixtures__/locationSuggest';
import { mockNearestLocations } from './__fixtures__/nearestLocations';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    id: 'locationSuggest',
    label: 'Location',
    message: 'undefined',
    reserveMessageSpace: false,
    schemeId: 'seekAnz',
    tone: defaultArgs.tone,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Please select a location.' },
      options: ['undefined', 'requiredValidation'],
    },
    tone: defaultArgTypes.tone,
  },
  component: Component,
  title: 'Job Posting/Locations/LocationSuggest',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const LocationSuggest = ({
  braidThemeName,
  client: _client,
  ...args
}: Args) => {
  const client = createApolloMockClient({
    Query: {
      nearestLocations: () => mockNearestLocations,
      locationSuggestions: () => mockLocationSuggest,
    },
  });

  return (
    <BraidStorybookProvider braidThemeName={braidThemeName}>
      <Component {...args} client={client} />
    </BraidStorybookProvider>
  );
};
LocationSuggest.storyName = 'LocationSuggest';
