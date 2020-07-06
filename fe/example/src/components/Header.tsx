import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Header = ({ children }: Props) => (
  <Box background="card" padding="gutter">
    {children}
  </Box>
);
