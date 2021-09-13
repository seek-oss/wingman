import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { BrandSelect as Component } from './BrandSelect';
import { MockBrandSelect } from './BrandSelect.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    initialBrandId:
      'global:advertisementBranding:hirerBranding:4pkLmqYhoSxSKmfcKMbDG6',
    pageSize: 4,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
  component: Component,

  title: 'Job Posting/Branding/BrandSelect',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const BrandSelect = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockBrandSelect {...args} />
  </BraidStorybookProvider>
);
BrandSelect.storyName = 'BrandSelect';
