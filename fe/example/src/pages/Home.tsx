import { Box, ContentBlock, Heading, Stack, Text } from 'braid-design-system';
import React from 'react';
import { SmartTextLink } from 'scoobie';

import { Header } from '../components/Header';

export const HomePage = () => (
  <Stack dividers space="none">
    <Header>
      <Heading level="3">🚧</Heading>
    </Header>

    <ContentBlock>
      <Box padding="gutter">
        <Box
          background="surface"
          borderRadius="xlarge"
          boxShadow="borderInfoLight"
          paddingX="gutter"
          paddingY="large"
        >
          <Stack space="medium">
            <Text>
              We’re still constructing a publicly-accessible sample site for
              recruitment software providers to reference when developing
              against the SEEK API.
            </Text>

            <Text>
              In the meantime, check out our{' '}
              <SmartTextLink href="https://developer.seek.com">
                Developer Site
              </SmartTextLink>{' '}
              and standalone interactive components in{' '}
              <SmartTextLink href="https://seek-oss.github.io/wingman/storybook/index.html">
                Storybook
              </SmartTextLink>
              . You can also ask your SEEK contact for guidance from our UXers
              and a demo of our internal sample site.
            </Text>
          </Stack>
        </Box>
      </Box>
    </ContentBlock>
  </Stack>
);
