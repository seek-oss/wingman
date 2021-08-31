import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { AdSelectionFallback as Component } from './AdSelectionFallback';
import { MockAdSelectionFallback } from './AdSelectionFallback.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    id: 'seek-advertisement-type',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    onSelect: { action: 'onSelect' },
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
  component: Component,
  title: 'Job Posting/Ad selection/AdSelectionFallback',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const AdSelectionFallback = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockAdSelectionFallback {...args} />
  </BraidStorybookProvider>
);
AdSelectionFallback.storyName = 'AdSelectionFallback';
