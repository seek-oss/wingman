import 'braid-design-system/reset';

import { Stack, Text } from 'braid-design-system';
import React, { ComponentProps, useState } from 'react';
import { CodeBlock, InlineCode } from 'scoobie';

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
  },
  component: Component,
  title: 'Job Posting/Position openings/SpecifiedPersonForm',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const SpecifiedPersonForm = ({
  braidThemeName,
  onCreate: _onCreate,
  ...args
}: Args) => {
  const [count, setCount] = useState(0);
  const [json, setJson] = useState('');

  return (
    <BraidStorybookProvider braidThemeName={braidThemeName}>
      <Stack space="large">
        <Component
          {...args}
          onCreate={(values) => {
            setCount((c) => c + 1);
            setJson(JSON.stringify(values, null, 2));
          }}
        />

        <Text>
          <InlineCode>onCreate</InlineCode>: {String(count)}
        </Text>

        <CodeBlock language="json">{json}</CodeBlock>
      </Stack>
    </BraidStorybookProvider>
  );
};
SpecifiedPersonForm.storyName = 'SpecifiedPersonForm';
