import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { JobCategoryLookup as Component } from './JobCategoryLookup';
import { MockJobCategoryLookup } from './JobCategoryLookup.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    schemeId: 'seekAnz',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    // message: {
    //   control: { type: 'radio' },
    //   mapping: { undefined, requiredValidation: 'Please select a category.' },
    //   options: ['undefined', 'requiredValidation'],
    // },
    showStorybookAction: defaultArgTypes.showStorybookAction,
    // tone: defaultArgTypes.tone,
  },
  component: Component,

  title: 'Job Posting/Job categories/JobCategoryLookup',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const JobCategoryLookup = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockJobCategoryLookup {...args} />
  </BraidStorybookProvider>
);
JobCategoryLookup.storyName = 'JobCategoryLookup';
