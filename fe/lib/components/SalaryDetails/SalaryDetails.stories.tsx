import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockSalaryDetails as Component } from './SalaryDetails.mock';

export default {
  title: 'Job Posting/Salary details',
  component: Component,
  args: {
    errors: undefined,
    onBlur: () => {},
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
    errors: {
      control: { type: 'radio' },
      mapping: {
        undefined,
        'Minimum pay errored': {
          minimumAmount: { message: 'Must be positive' },
        },
        'Maximum pay errored': {
          maximumAmount: { message: 'Must be greater than minimum' },
        },
        'Pay shown on ad errored': {
          description: { message: 'Must not exceed 50 characters' },
        },
      },
      options: [
        'undefined',
        'Minimum pay errored',
        'Maximum pay errored',
        'Pay shown on ad errored',
      ],
    },
    initialMinimumAmount: {
      control: { type: 'number' },
    },
    initialMaximumAmount: {
      control: { type: 'number' },
    },
    initialDescription: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SalaryDetails: Story = {};
