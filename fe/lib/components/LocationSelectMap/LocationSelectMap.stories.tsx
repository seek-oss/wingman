import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { LocationSelectMap as Component } from './LocationSelectMap';
import { MockLocationSelectMap } from './LocationSelectMap.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    schemeId: 'seekAnz',
    onLocationSelected: () => {},
    initialLocation: [-37.8275, 144.9902],
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
  component: Component,
  title: 'Job Posting/Locations/LocationSelectMap',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const LocationSelectMap = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockLocationSelectMap {...args} />
  </BraidStorybookProvider>
);
LocationSelectMap.storyName = 'LocationSelectMap';
