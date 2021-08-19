import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import { defaultArgTypes, defaultArgs } from '../../storybook/controls';
import {
  DesignDecorator,
  createApolloDecorator,
} from '../../storybook/decorators';
import { mockJobCategories } from '../JobCategorySelect/__fixtures__/jobCategories';

import { JobCategorySuggest as Component } from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

export default {
  args: {
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
      mapping: { undefined, requiredValidation: 'Please select a category.' },
      options: ['undefined', 'requiredValidation'],
    },
    tone: defaultArgTypes.tone,
  },
  component: Component,
  decorators: [
    DesignDecorator,
    createApolloDecorator({
      Query: {
        jobCategorySuggestions: () => mockJobCategorySuggest,
        jobCategories: () => mockJobCategories,
      },
    }),
  ],
  title: 'Job Posting/Job categories/JobCategorySuggest',
};

type Args = ComponentProps<typeof Component>;

export const JobCategorySuggest = (args: Args) => <Component {...args} />;
JobCategorySuggest.storyName = 'JobCategorySuggest';
