import { Box, ContentBlock, Heading } from 'braid-design-system';
import React from 'react';

export const Header = () => (
  <Box background="brand" paddingY="large">
    <ContentBlock>
      <Box paddingX="gutter">
        <Heading level="2">Wingman</Heading>
      </Box>
    </ContentBlock>
  </Box>
);
