import {
  Alert,
  Box,
  ContentBlock,
  Divider,
  Heading,
  Stack,
  Text,
} from 'braid-design-system';
import React from 'react';

import { Header } from '../components/Header';

export const OopsPage = () => (
  <Stack space="none">
    <Header>
      <Heading level="3">Oops!</Heading>
    </Header>
    <Divider />
    <ContentBlock width="large">
      <Box padding="gutter">
        <Alert tone="info">
          <Text>This isn’t a thing yet. Check back later!</Text>
        </Alert>
      </Box>
    </ContentBlock>
  </Stack>
);
