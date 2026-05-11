import type { Meta, StoryObj } from '@storybook/react';

import { defaultArgTypes } from '../../../.storybook/preview';

import { MockJobCategoryLookup as Component } from './JobCategoryLookup.mock';

export default {
  title: 'Job Posting/Job categories/JobCategoryLookup',
  component: Component,
  args: {
    schemeId: 'seekAnz',
  },
  argTypes: {
    showStorybookAction: defaultArgTypes.showStorybookAction,
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const JobCategoryLookup: Story = {};
