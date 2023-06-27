import type { Meta, StoryObj } from 'sku/@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockSpecifiedPersonForm as Component } from './SpecifiedPersonForm.mock';

export default {
  title: 'Job Posting/Position openings/SpecifiedPersonForm',
  component: Component,
  args: {
    initialValues: {
      roleCode: 'HiringManager',
      givenName: 'Andrew',
      familyName: 'Bassat',
      emailAddress: 'ab@example.com',
      phoneNumber: '1900 654 321',
    },
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
    onCreate: { action: 'onCreate' },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SpecifiedPersonForm: Story = {};
