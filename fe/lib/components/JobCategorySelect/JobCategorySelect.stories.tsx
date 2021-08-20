import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import {
  BraidStorybookProvider,
  createWithApolloProvider,
} from '../../storybook/decorators';

import { JobCategorySelect as Component } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

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
  decorators: [
    createWithApolloProvider({
      Query: {
        jobCategories: () => mockJobCategories,
      },
    }),
  ],
  title: 'Job Posting/Job categories/JobCategorySelect',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const JobCategorySelect = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
JobCategorySelect.storyName = 'JobCategorySelect';
