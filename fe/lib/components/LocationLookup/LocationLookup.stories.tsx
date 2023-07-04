import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockLocationLookup as Component } from './LocationLookup.mock';

export default {
  title: 'Job Posting/Locations/LocationLookup',
  component: Component,
  args: {
    schemeId: 'seekAnz',
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const LocationLookup: Story = {};
