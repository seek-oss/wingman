import 'braid-design-system/reset';

import React, { type ComponentProps } from 'react';

import {
  type BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { LocationLookup as Component } from './LocationLookup';
import { MockLocationLookup } from './LocationLookup.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    schemeId: 'seekAnz',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
  component: Component,

  title: 'Job Posting/Locations/LocationLookup',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const LocationLookup = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockLocationLookup {...args} />
  </BraidStorybookProvider>
);
LocationLookup.storyName = 'LocationLookup';
