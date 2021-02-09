import {
  Actions,
  Box,
  Button,
  Card,
  Heading,
  IconDownload,
  IconImage,
  Stack,
} from 'braid-design-system';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';

import type { Attachment } from '../../../data/candidates';

import * as styleRefs from './Attachment.treat';

interface Props {
  children: Attachment;
}

export const CandidateAttachment = ({ children: attachment }: Props) => {
  const styles = useStyles(styleRefs);

  const [loading, setLoading] = useState(false);

  return (
    <Card key={attachment.id}>
      <Stack dividers space="gutter">
        <Box alignItems="center" display="flex" justifyContent="spaceBetween">
          <Heading level="4">{attachment.filename}</Heading>
          <Actions>
            <Button loading={loading} onClick={() => setLoading(true)}>
              <IconDownload /> Download{loading ? 'ing' : ''}
            </Button>
          </Actions>
        </Box>

        <Box
          alignItems="center"
          background="neutralLight"
          className={styles.preview}
          display="flex"
          justifyContent="center"
        >
          <IconImage size="large" tone="secondary" />
        </Box>
      </Stack>
    </Card>
  );
};
