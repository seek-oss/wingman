import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { LocationSuggest as Component } from './LocationSuggest';
import { MockLocationSuggest } from './LocationSuggest.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    id: 'locationSuggest',
    label: 'Location',
    message: 'undefined',
    reserveMessageSpace: false,
    showBreadcrumbs: false,
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
    showStorybookAction: defaultArgTypes.showStorybookAction,
    tone: defaultArgTypes.tone,
  },
  component: Component,
  title: 'Job Posting/Locations/LocationSuggest',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const LocationSuggest = ({ braidThemeName, client, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockLocationSuggest {...args} />
  </BraidStorybookProvider>
);
LocationSuggest.storyName = 'LocationSuggest';
