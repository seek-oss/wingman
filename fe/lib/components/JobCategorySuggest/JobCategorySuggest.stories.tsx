import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { JobCategorySuggest as Component } from './JobCategorySuggest';
import { MockJobCategorySuggest } from './JobCategorySuggest.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    message: 'undefined',
    onSelect: () => {},
    positionTitle: `Senior Developer`,
    positionLocation: ['seekAnzPublicTest:location:seek:2FqwWaaMV'],
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
    showStorybookAction: defaultArgTypes.showStorybookAction,
    tone: defaultArgTypes.tone,
  },
  component: Component,
  title: 'Job Posting/Job categories/JobCategorySuggest',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const JobCategorySuggest = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockJobCategorySuggest {...args} />
  </BraidStorybookProvider>
);
JobCategorySuggest.storyName = 'JobCategorySuggest';
