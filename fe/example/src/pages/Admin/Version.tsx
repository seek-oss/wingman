import {
  Card,
  Divider,
  Heading,
  Loader,
  Stack,
  Text,
} from 'braid-design-system';
import { useEffect, useState } from 'react';

import { querySeekGraph } from '../../api/seekGraph';

const retrieveVersion = async (callback: (version: string) => void) => {
  const { version } = await querySeekGraph('{ version }');

  if (typeof version !== 'string') {
    return;
  }

  return callback(version);
};

export const Version = () => {
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    retrieveVersion(setVersion);
  }, []);

  return (
    <Card>
      <Stack space="large">
        <Heading level="3">Version</Heading>
        <Divider />
        <Text>{typeof version === 'undefined' ? <Loader /> : version}</Text>
      </Stack>
    </Card>
  );
};
