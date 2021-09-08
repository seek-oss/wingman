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
    id: 'brands',
    label: 'Brand',
    reserveMessageSpace: false,
    schemeId: 'global',
    hirerId: 'seekAnz:organization:seek:kLDHs7W7',
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