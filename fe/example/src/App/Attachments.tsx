import { Bullet, BulletList, Card, Heading, Stack } from 'braid-design-system';
import React from 'react';

import { DownloadLink } from 'lib/components/private';

import { proxyDownloadLink } from '../api/download';

const HARDCODED_COVER_LETTER_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/SekKH8b26jdv2rV1oLjC9M/attachments/coverLetter';

const HARDCODED_RESUME_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/SekKH8b26jdv2rV1oLjC9M/attachments/resume';

export const Attachments = () => (
  <Card>
    <Stack dividers space="large">
      <Heading level="3">Attachments</Heading>

      <BulletList>
        <Bullet>
          <DownloadLink href={proxyDownloadLink(HARDCODED_COVER_LETTER_LINK)}>
            Cover letter
          </DownloadLink>
        </Bullet>

        <Bullet>
          <DownloadLink href={proxyDownloadLink(HARDCODED_RESUME_LINK)}>
            Resume
          </DownloadLink>
        </Bullet>
      </BulletList>
    </Stack>
  </Card>
);
