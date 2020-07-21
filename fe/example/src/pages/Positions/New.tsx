import { Box, ContentBlock, Heading, Stack } from 'braid-design-system';
import React from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';
import { NewPositionForm } from '../../widgets/NewPositionForm';

export const PositionNewPage = () => (
  <Stack dividers space="none">
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

    <ContentBlock width="large">
      <Box padding="gutter">
        <ClientOnly>
          <NewPositionForm />
        </ClientOnly>
      </Box>
    </ContentBlock>
  </Stack>
);
