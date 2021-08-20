import { Box, BraidLoadableProvider, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';

interface ProviderProps {
  braidThemeName: string;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidLoadableProvider themeName={braidThemeName}>
    <ContentBlock>
      <Box paddingX="gutter" paddingY="large">
        {children}
      </Box>
    </ContentBlock>
  </BraidLoadableProvider>
);
