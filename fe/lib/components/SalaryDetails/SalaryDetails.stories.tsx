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
    initialMinimumPay: '',
    initialMaximumPay: '',
    initialPayType: 'Salaried',
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
          payType: { message: 'Error posting with chosen pay type' },
        },
        'Minimum pay errored': {
          minPay: { message: 'Minimum pay must be greater than 0' },
        },
        'Maximum pay errored': {
          maxPay: { message: 'Maximum pay must be less than 1,000,000' },
        },
        'Pay shown on ad errored': {
          payShownOnAd: { message: 'Maximum character limit exceeded!' },
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
  title: 'Job Posting/SalaryDetails/SalaryDetails',
};

type Args = ComponentProps<typeof SalaryDetailsComponent> & BraidArgs;

export const SalaryDetails = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSalaryDetails {...args} />
  </BraidStorybookProvider>
);

SalaryDetails.storyName = 'SalaryDetails';
