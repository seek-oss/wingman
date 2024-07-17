import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'braid-design-system';
import type { ComponentProps } from 'react';
import { CodeBlock } from 'scoobie';

import { SeekApiResponse as SeekApiResponseComponent } from './SeekApiResponse';

const Component = (args: ComponentProps<typeof SeekApiResponseComponent>) => (
  <Stack space="large">
    <CodeBlock language="json">{JSON.stringify(args.data, null, 2)}</CodeBlock>
    <SeekApiResponseComponent {...args} />
  </Stack>
);

export default {
  title: 'Utils/SeekApiResponse',
  component: Component,
  argTypes: {
    data: {
      control: false,
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const EmptyObject: Story = {
  args: {
    data: {},
  },
};

export const ObjectWithoutTypenames: Story = {
  args: {
    data: {
      id: {
        value: 'abc',
      },
    },
  },
  name: 'Object without __typenames',
};

export const ObjectWithNestedTypenames: Story = {
  args: {
    data: {
      __typename: 'Event',
      id: {
        __typename: 'ObjectIdentifier',
        value: 'abc',
      },
    },
  },
  name: 'Object with nested __typenames',
};
