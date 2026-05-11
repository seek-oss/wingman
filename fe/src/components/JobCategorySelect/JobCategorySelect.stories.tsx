import type { Meta, StoryObj } from '@storybook/react';

import { defaultArgTypes, defaultArgs } from '../../../.storybook/preview';

import { MockJobCategorySelect as Component } from './JobCategorySelect.mock';

export default {
  title: 'Job Posting/Job categories/JobCategorySelect',
  component: Component,
  args: {
    id: 'jobCategories',
    label: 'Category',
    message: 'undefined',
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
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const JobCategorySelect: Story = {};
