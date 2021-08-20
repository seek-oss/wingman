import 'braid-design-system/reset';

import React, { ComponentProps } from 'react';

import {
  BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { SpecifiedPersonForm as Component } from './SpecifiedPersonForm';

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
    onCreate: { action: 'onCreate' },
  },
  component: Component,
  title: 'Job Posting/Position openings/SpecifiedPersonForm',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const SpecifiedPersonForm = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
SpecifiedPersonForm.storyName = 'SpecifiedPersonForm';
