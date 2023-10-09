import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes, defaultArgs } from '../../../.storybook/preview';

import { MockLocationSuggest as Component } from './LocationSuggest.mock';

export default {
  args: {
    id: 'locationSuggest',
    label: 'Location',
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    message: 'undefined',
    reserveMessageSpace: false,
    showBreadcrumbs: false,
    schemeId: 'seekAnz',
    tone: defaultArgs.tone,
  },
  argTypes: {
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Select a location' },
      options: ['undefined', 'requiredValidation'],
    },
    showStorybookAction: defaultArgTypes.showStorybookAction,
    tone: defaultArgTypes.tone,
  },
  component: Component,
  title: 'Job Posting/Locations/LocationSuggest',
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const LocationSuggest: Story = {};
