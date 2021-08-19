import { Card, Heading, List, Stack, Text } from 'braid-design-system';
import React from 'react';

import { useBrowserToken } from '../../../../lib/hooks';
import { DOWNLOAD_ATTACHMENT_SCOPE } from '../../api/browserToken';
import { DownloadLink } from '../../components/DownloadLink/DownloadLink';

// https://developer.seek.com/graphql/playground/mock-objects#application-profiles
const HARDCODED_COVER_LETTER_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/4QM5fWQbdekL9gPtPZrzex/attachments/7xF8zuiaFdnFo84DBSZVEjiu9EoWZasQRAr5YSYeHvGj';
const HARDCODED_RESUME_LINK =
  'https://graphql.seek.com/anzPublicTest/applications/4QM5fWQbdekL9gPtPZrzex/attachments/7wS9uaWkwNrz4L5EUjNoBpVHCo61gaTSTdqiEeqxPVAk';

export const Attachments = () => {
  const getAuthorization = useBrowserToken();

  return (
    <Card>
      <Stack dividers space="large">
        <Heading level="3">Attachments</Heading>

        <List>
          <Text>
            <DownloadLink
              getAuthorization={() =>
                getAuthorization(DOWNLOAD_ATTACHMENT_SCOPE)
              }
              href={HARDCODED_COVER_LETTER_LINK}
            >
              Cover letter
            </DownloadLink>
          </Text>

          <Text>
            <DownloadLink
              getAuthorization={() =>
                getAuthorization(DOWNLOAD_ATTACHMENT_SCOPE)
              }
              href={HARDCODED_RESUME_LINK}
            >
              Resume
            </DownloadLink>
          </Text>
        </List>
      </Stack>
    </Card>
  );
};
