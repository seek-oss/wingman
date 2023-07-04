import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes, defaultArgs } from '../../../.storybook/preview';

import { MockJobCategorySuggest as Component } from './JobCategorySuggest.mock';

export default {
  args: {
    label: 'Category',
    message: 'undefined',
    onSelect: () => {},
    positionProfile: {
      positionTitle: `Senior Developer`,
      positionLocation: ['seekAnzPublicTest:location:seek:2FqwWaaMV'],
    },
    reserveMessageSpace: false,
    schemeId: 'seekAnz',
    tone: defaultArgs.tone,
  },
  argTypes: {
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Select a category' },
      options: ['undefined', 'requiredValidation'],
    },
    showStorybookAction: defaultArgTypes.showStorybookAction,
    tone: defaultArgTypes.tone,
  },
  component: Component,
  title: 'Job Posting/Job categories/JobCategorySuggest',
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const JobCategorySuggest: Story = {};
