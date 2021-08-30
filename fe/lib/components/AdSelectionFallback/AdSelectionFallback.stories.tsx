import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes } from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { AdSelectionFallback as Component } from './AdSelectionFallback';

export default {
  args: {
    id: 'seek-advertisement-type',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    onSelect: { action: 'onSelect' },
  },
  component: Component,
  title: 'Job Posting/Ad selection/AdSelectionFallback',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const AdSelectionFallback = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
AdSelectionFallback.storyName = 'AdSelectionFallback';
