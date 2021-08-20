import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { JobCategorySelect as Component } from './JobCategorySelect';
import { MockJobCategorySelect } from './JobCategorySelect.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    id: 'jobCategories',
    label: 'Category',
    message: 'undefined',
    reserveMessageSpace: false,
    schemeId: 'seekAnz',
    tone: defaultArgs.tone,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    message: {
      control: { type: 'radio' },
      mapping: { undefined, requiredValidation: 'Please select a category.' },
      options: ['undefined', 'requiredValidation'],
    },
    tone: defaultArgTypes.tone,
  },
  component: Component,

  title: 'Job Posting/Job categories/JobCategorySelect',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const JobCategorySelect = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockJobCategorySelect {...args} />
  </BraidStorybookProvider>
);
JobCategorySelect.storyName = 'JobCategorySelect';
