import {
  Alert,
  Box,
  ContentBlock,
  Heading,
  Stack,
  Text,
} from 'braid-design-system';
import React from 'react';

import { Header } from '../components/Header';

export const OopsPage = () => (
  <Stack space="none">
    <Header>
      <ContentBlock width="large">
        <Heading level="3">Oops!</Heading>
      </ContentBlock>
    </Header>

    <Box padding="gutter">
      <ContentBlock width="large">
        <Alert tone="info">
          <Text>This isn’t a thing yet. Check back later!</Text>
        </Alert>
      </ContentBlock>
    </Box>
  </Stack>
);
