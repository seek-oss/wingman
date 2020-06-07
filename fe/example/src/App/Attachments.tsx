import { Bullet, BulletList, Card, Heading, Stack } from 'braid-design-system';
import React from 'react';

import { DownloadLink } from 'lib/components/private';
import { useBrowserToken } from 'lib/hooks';

import { DOWNLOAD_ATTACHMENT_SCOPE } from '../api/browserToken';

const HARDCODED_COVER_LETTER_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/SekKH8b26jdv2rV1oLjC9M/attachments/coverLetter';

const HARDCODED_RESUME_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/SekKH8b26jdv2rV1oLjC9M/attachments/resume';

export const Attachments = () => {
  const getBrowserToken = useBrowserToken();

  const getAuthorization = async () => {
    const browserToken = await getBrowserToken(DOWNLOAD_ATTACHMENT_SCOPE);

    return browserToken.authorization;
  };

  return (
    <Card>
      <Stack dividers space="large">
        <Heading level="3">Attachments</Heading>

        <BulletList>
          <Bullet>
            <DownloadLink
              getAuthorization={getAuthorization}
              href={HARDCODED_COVER_LETTER_LINK}
            >
              Cover letter
            </DownloadLink>
          </Bullet>

          <Bullet>
            <DownloadLink
              getAuthorization={getAuthorization}
              href={HARDCODED_RESUME_LINK}
            >
              Resume
            </DownloadLink>
          </Bullet>
        </BulletList>
      </Stack>
    </Card>
  );
};
