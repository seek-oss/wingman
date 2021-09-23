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
    wrapper: 'undefined',
    currency: 'AUD',
    initialMinimumPay: '',
    initialMaximumPay: '',
    initialPayType: 'Salaried',
    errors: undefined,
    onBlur: () => {},
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

type Args = ComponentProps<typeof SalaryDetailsComponent> & BraidArgs;

export const SalaryDetails = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSalaryDetails {...args} />
  </BraidStorybookProvider>
);

SalaryDetails.storyName = 'SalaryDetails';
