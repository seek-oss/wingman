import { Box, BraidProvider, ContentBlock } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import docs from 'braid-design-system/themes/docs';
import wireframe from 'braid-design-system/themes/wireframe';
import React, { type ReactNode } from 'react';

import type { BraidThemeName } from './controls';

const THEMES = { apac, docs, wireframe };

interface ProviderProps {
  braidThemeName: BraidThemeName;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidProvider theme={THEMES[braidThemeName]}>
    <ContentBlock>
      <Box paddingX="gutter" paddingY="large">
        {children}
      </Box>
    </ContentBlock>
  </BraidProvider>
);
