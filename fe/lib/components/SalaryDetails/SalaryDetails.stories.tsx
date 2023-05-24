import 'braid-design-system/reset';

import React, { type ComponentProps } from 'react';

import {
  type BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { SalaryDetails as SalaryDetailsComponent } from './SalaryDetails';
import { MockSalaryDetails } from './SalaryDetails.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    errors: undefined,
    onBlur: () => {},
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    showStorybookAction: defaultArgTypes.showStorybookAction,
    errors: {
      control: { type: 'radio' },
      mapping: {
        undefined,
        'Minimum pay errored': {
          minimumAmount: { message: 'Must be positive' },
        },
        'Maximum pay errored': {
          maximumAmount: { message: 'Must be greater than minimum' },
        },
        'Pay shown on ad errored': {
          description: { message: 'Must not exceed 50 characters' },
        },
      },
      options: [
        'undefined',
        'Minimum pay errored',
        'Maximum pay errored',
        'Pay shown on ad errored',
      ],
    },
    initialMinimumAmount: {
      control: { type: 'number' },
    },
    initialMaximumAmount: {
      control: { type: 'number' },
    },
    initialDescription: {
      control: { type: 'text' },
    },
  },
  component: SalaryDetailsComponent,
  title: 'Job Posting/Salary details',
};

type Args = ComponentProps<typeof SalaryDetailsComponent> & BraidArgs;

export const SalaryDetails = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSalaryDetails {...args} />
  </BraidStorybookProvider>
);

SalaryDetails.storyName = 'SalaryDetails';
