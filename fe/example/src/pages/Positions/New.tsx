import {
  Box,
  ContentBlock,
  Divider,
  Heading,
  Stack,
} from 'braid-design-system';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';
import { NewPositionForm } from '../../widgets/NewPositionForm';

export const PositionNewPage = () => (
  <Stack space="none">
    <Header>
      <Heading level="3">
        <Breadcrumbs>
          {[
            {
              label: 'Positions',
              to: '/positions',
            },
            'New',
          ]}
        </Breadcrumbs>
      </Heading>
    </Header>
    <Divider />
    <ContentBlock width="large">
      <Box padding="gutter">
        <ClientOnly>
          <NewPositionForm />
        </ClientOnly>
      </Box>
    </ContentBlock>
  </Stack>
);
