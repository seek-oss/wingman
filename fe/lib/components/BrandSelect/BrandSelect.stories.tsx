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

export const MultipleBrands = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockBrandSelect {...args} variant="multiple-brands" />
  </BraidStorybookProvider>
);
MultipleBrands.storyName = 'Multiple brands';

export const NoInitialBrandId = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockBrandSelect
      {...args}
      initialBrandId={undefined}
      variant="multiple-brands"
    />
  </BraidStorybookProvider>
);
NoInitialBrandId.storyName = 'No initial brand ID';

export const NoBrands = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockBrandSelect {...args} variant="no-brands" />
  </BraidStorybookProvider>
);
NoBrands.storyName = 'No brands';
