import 'braid-design-system/reset';

import { Heading, Stack } from 'braid-design-system';
import React, { type ComponentProps } from 'react';
import { CodeBlock } from 'scoobie';

import {
  type BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../../storybook/controls';
import { BraidStorybookProvider } from '../../storybook/decorators';

import { SeekApiResponse as Component } from './SeekApiResponse';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    data: {
      control: false,
    },
  },
  component: Component,
  title: 'Utils/SeekApiResponse',
};

type ComponentPropsWithoutData = Omit<ComponentProps<typeof Component>, 'data'>;

type Args = ComponentPropsWithoutData & BraidArgs;

export const SeekApiResponse = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Stack dividers space="large">
      {[
        {
          data: {},
          heading: 'Empty object',
        },
        {
          data: {
            id: {
              value: 'abc',
            },
          },
          heading: 'Object without __typenames',
        },
        {
          data: {
            __typename: 'Event',
            id: {
              __typename: 'ObjectIdentifier',
              value: 'abc',
            },
          },
          heading: 'Object with nested __typenames',
        },
      ].map(({ data, heading }) => (
        <Stack key={heading} space="large">
          <Heading level="3">{heading}</Heading>

          <CodeBlock language="json">{JSON.stringify(data, null, 2)}</CodeBlock>

          <Component {...args} data={data} />
        </Stack>
      ))}
    </Stack>
  </BraidStorybookProvider>
);
SeekApiResponse.storyName = 'SeekApiResponse';
