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
    message: 'undefined',
    reserveMessageSpace: false,
    schemeId: 'global',
    tone: defaultArgs.tone,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Please select a brand.' },
      options: ['undefined', 'requiredValidation'],
    },
    showStorybookAction: defaultArgTypes.showStorybookAction,
    tone: defaultArgTypes.tone,
  },
  component: Component,

  title: 'Job Posting/Brand/BrandSelect',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const BrandSelect = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockBrandSelect {...args} />
  </BraidStorybookProvider>
);
BrandSelect.storyName = 'BrandSelect';
