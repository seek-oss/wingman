import { ContentBlock, Divider, Hidden, Stack } from 'braid-design-system';
import React from 'react';

import { Attachments } from './Attachments';
import { Version } from './Version';
import { Webhook } from './Webhook';

export const HomePage = () => (
  <ContentBlock>
    <Stack space={['none', 'none', 'large']}>
      <Attachments />

      <Hidden above="tablet">
        <Divider />
      </Hidden>

      <Version />

      <Hidden above="tablet">
        <Divider />
      </Hidden>

      <Webhook />
    </Stack>
  </ContentBlock>
);
