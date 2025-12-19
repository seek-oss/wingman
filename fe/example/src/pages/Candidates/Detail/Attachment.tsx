import {
  Actions,
  Box,
  Button,
  Card,
  Divider,
  Heading,
  IconDownload,
  IconImage,
  Stack,
} from 'braid-design-system';
import { useState } from 'react';

import type { Attachment } from '../../../data/candidates';

import * as styles from './Attachment.css';

interface Props {
  children: Attachment;
}

export const CandidateAttachment = ({ children: attachment }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Card key={attachment.id}>
      <Stack space="gutter">
        <Box alignItems="center" display="flex" justifyContent="spaceBetween">
          <Heading level="4">{attachment.filename}</Heading>
          <Actions>
            <Button loading={loading} onClick={() => setLoading(true)}>
              <IconDownload /> Download{loading ? 'ing' : ''}
            </Button>
          </Actions>
        </Box>
        <Divider />
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
