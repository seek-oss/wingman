import { Box } from 'braid-design-system';
import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Header = ({ children }: Props) => (
  <Box background="surface" padding="gutter">
    {children}
  </Box>
);
