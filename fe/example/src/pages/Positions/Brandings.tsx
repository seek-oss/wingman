import { Box, ContentBlock, Heading, Stack, Text } from 'braid-design-system';
import React, { useState } from 'react';

import { Header } from '../../components/Header';
import type { Branding } from '../../data/brandings';
import { BrandingSelect } from '../../widgets/BrandingSelect';

export const PositionBrandingPage = () => {
  const [selection, setSelection] = useState<Branding>();

  return (
    <Stack dividers space="none">
      <Header>
        <Heading level="3">Brandings</Heading>
      </Header>

      <ContentBlock width="large">
        <Box padding="gutter">
          <Stack space="gutter">
            <Text>
              {selection
                ? `Branding ID ${selection.id}`
                : 'No branding selected'}
            </Text>

            <BrandingSelect onChange={setSelection} />
          </Stack>
        </Box>
      </ContentBlock>
    </Stack>
  );
};
