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
import { mockJobCategories } from '../JobCategorySelect/__fixtures__/jobCategories';

import { JobCategorySuggest as Component } from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
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
        jobCategorySuggestions: () => mockJobCategorySuggest,
        jobCategories: () => mockJobCategories,
      },
    }),
  ],
  title: 'Job Posting/Job categories/JobCategorySuggest',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const JobCategorySuggest = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
JobCategorySuggest.storyName = 'JobCategorySuggest';
