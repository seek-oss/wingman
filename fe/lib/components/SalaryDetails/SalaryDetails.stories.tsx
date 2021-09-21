import 'braid-design-system/reset';

import React from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { SalaryDetails as SalaryDetailsComponent } from './SalaryDetails';
import { MockSalaryDetails } from './SalaryDetails.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    wrapper: 'undefined',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    wrapper: {
      control: { type: 'radio' },
      mapping: { undefined, card: 'card' },
      options: ['undefined', 'card', 'custom'],
    },
  },
  component: SalaryDetailsComponent,
  title: 'Job Posting/SalaryDetails/SalaryDetails',
};

type Args = BraidArgs;

export const SalaryDetails = ({ braidThemeName }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSalaryDetails />
  </BraidStorybookProvider>
);

SalaryDetails.storyName = 'SalaryDetails';
