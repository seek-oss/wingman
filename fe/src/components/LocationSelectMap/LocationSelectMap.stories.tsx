import type { Meta, StoryObj } from '@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockLocationSelectMap as Component } from './LocationSelectMap.mock';

export default {
  args: {
    schemeId: 'seekAnz',
    onLocationSelected: () => {},
    initialLocation: [-37.8275, 144.9902],
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
  component: Component,
  title: 'Job Posting/Locations/LocationSelectMap',
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const LocationSelectMap: Story = {};
