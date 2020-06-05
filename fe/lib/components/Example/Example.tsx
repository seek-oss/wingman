import { Text } from 'braid-design-system';
import React from 'react';

interface Props {
  message?: string;
}

export const Example = ({ message = 'Hello World' }: Props) => (
  <Text>{message}</Text>
);
