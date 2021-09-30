import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

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
    currency: 'AUD',
    initialMinimumAmount: '',
    initialMaximumAmount: '',
    initialBasisCode: 'Salaried',
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
        'Pay type errored': {
          basisCode: { message: 'Invalid pay type set' },
        },
        'Minimum pay errored': {
          minimumAmount: { message: 'Minimum pay must be greater than 0' },
        },
        'Maximum pay errored': {
          maximumAmount: { message: 'Maximum pay must be a reasonable number' },
        },
        'Pay shown on ad errored': {
          description: { message: 'Maximum character limit exceeded' },
        },
      },
      options: [
        'undefined',
        'Pay type errored',
        'Minimum pay errored',
        'Maximum pay errored',
        'Pay shown on ad errored',
      ],
    },
  },
  component: SalaryDetailsComponent,
  title: 'Job Posting/Salary details/SalaryDetails',
};

type Args = ComponentProps<typeof SalaryDetailsComponent> & BraidArgs;

export const SalaryDetails = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSalaryDetails {...args} />
  </BraidStorybookProvider>
);

SalaryDetails.storyName = 'SalaryDetails';
