import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { MockSpecifiedPersonForm } from './SpecifiedPersonForm.mock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    initialValues: {
      roleCode: 'HiringManager',
      givenName: 'Andrew',
      familyName: 'Bassat',
      emailAddress: 'ab@example.com',
      phoneNumber: '1900 654 321',
    },
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    showStorybookAction: defaultArgTypes.showStorybookAction,
    onCreate: { action: 'onCreate' },
  },
  component: MockSpecifiedPersonForm,
  title: 'Job Posting/Position openings/SpecifiedPersonForm',
};

type Args = ComponentProps<typeof MockSpecifiedPersonForm> & BraidArgs;

export const SpecifiedPersonForm = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MockSpecifiedPersonForm {...args} />
  </BraidStorybookProvider>
);
SpecifiedPersonForm.storyName = 'SpecifiedPersonForm';
