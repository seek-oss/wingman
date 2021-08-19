import 'braid-design-system/reset';

import { Stack, Text } from 'braid-design-system';
import React, { ComponentProps, useState } from 'react';
import { CodeBlock, InlineCode } from 'scoobie';

import { DesignDecorator } from '../../storybook/decorators';

import { SpecifiedPersonForm as Component } from './SpecifiedPersonForm';

export default {
  args: {
    initialValues: {
      roleCode: 'HiringManager',
      givenName: 'Andrew',
      familyName: 'Bassat',
      emailAddress: 'ab@example.com',
      phoneNumber: '1900 654 321',
    },
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Job Posting/Position openings/SpecifiedPersonForm',
};

type Args = ComponentProps<typeof Component>;

export const SpecifiedPersonForm = ({ onCreate: _onCreate, ...args }: Args) => {
  const [count, setCount] = useState(0);
  const [json, setJson] = useState('');

  return (
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
  );
};
SpecifiedPersonForm.storyName = 'SpecifiedPersonForm';
