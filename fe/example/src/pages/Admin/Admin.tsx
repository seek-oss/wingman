import {
  Box,
  ContentBlock,
  Divider,
  Heading,
  Stack,
} from 'braid-design-system';

import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';

import { Attachments } from './Attachments';
import { User } from './User';
import { Version } from './Version';
import { Webhook } from './Webhook';

export const AdminPage = () => (
  <Stack space="none">
    <Header>
      <Heading level="3">Admin</Heading>
    </Header>
    <Divider />
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
