import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockAdSelectionFallback as Component } from './AdSelectionFallback.mock';

export default {
  title: 'Job Posting/Ad selection/AdSelectionFallback',
  component: Component,
  args: {
    id: 'seek-advertisement-type',
  },
  argTypes: {
    onSelect: { action: 'onSelect' },
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const AdSelectionFallback: Story = {};
