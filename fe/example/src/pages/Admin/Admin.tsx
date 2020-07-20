import { Box, ContentBlock, Heading, Stack } from 'braid-design-system';
import React from 'react';

import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';

import { Attachments } from './Attachments';
import { User } from './User';
import { Version } from './Version';
import { Webhook } from './Webhook';

export const AdminPage = () => (
  <Stack dividers space="none">
    <Header>
      <Heading level="3">Admin</Heading>
    </Header>

    <ClientOnly>
      <ContentBlock width="large">
        <Box padding="gutter">
          <Stack space="large">
            <User />

            <Attachments />

            <Version />

            <Webhook />
          </Stack>
        </Box>
      </ContentBlock>
    </ClientOnly>
  </Stack>
);
