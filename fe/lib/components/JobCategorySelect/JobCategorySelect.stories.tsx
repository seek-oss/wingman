import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import { defaultArgTypes, defaultArgs } from '../../storybook/controls';
import {
  DesignDecorator,
  createApolloDecorator,
} from '../../storybook/decorators';

import { JobCategorySelect as Component } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

export default {
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
        jobCategories: () => mockJobCategories,
      },
    }),
  ],
  title: 'Job Posting/Job categories/JobCategorySelect',
};

type Args = ComponentProps<typeof Component>;

export const JobCategorySelect = (args: Args) => <Component {...args} />;
JobCategorySelect.storyName = 'JobCategorySelect';
