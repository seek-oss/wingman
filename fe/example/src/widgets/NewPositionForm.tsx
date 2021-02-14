import {
  Actions,
  Autosuggest,
  Button,
  Card,
  Checkbox,
  Heading,
  Notice,
  Stack,
  Text,
  TextField,
} from 'braid-design-system';
import React, { useState } from 'react';

import { USERS } from '../data/users';
import { useClient } from '../hooks/user';

import { NewAdForm } from './NewAdForm';

export const NewPositionForm = () => {
  // TODO: save to local storage
  const [seekAd, setSeekAd] = useState(false);

  const { user } = useClient();

  const [name, setName] = useState('');
  const [contact, setContact] = useState({
    text: user.formattedName,
    value: user.id,
  });

  return (
    <Stack dividers space="none">
      <Card>
        <Stack space="large">
          <TextField
            id="name"
            label="Name"
            onChange={(event) => setName(event.currentTarget.value)}
            onClear={() => setName('')}
            value={name}
          />
          <Autosuggest
            automaticSelection
            id="contact"
            label="Contact"
            onChange={({ text, value }) =>
              setContact({
                text,
                // This is always there for our `suggestions`
                value: value!,
              })
            }
            suggestions={USERS.map((element) => ({
              text: element.formattedName,
              value: element.id,
            }))}
            value={contact}
          />
        </Stack>
      </Card>

      <Card>
        <Stack space="large">
          <Heading level="4">Advertise your position</Heading>

          <Notice tone="info">
            <Text>You can do this later from the position page.</Text>
          </Notice>

          <Checkbox
            checked={false}
            disabled
            id="jobsDbAd"
            label="jobsDB"
            onChange={() => undefined}
          />

          <Checkbox
            checked={seekAd}
            id="seekAd"
            label="SEEK"
            onChange={() => setSeekAd((value) => !value)}
          />
        </Stack>
      </Card>

      {seekAd ? <NewAdForm initial={{ title: name }} /> : undefined}

      <Card>
        <Actions>
          <Button tone="brandAccent" type="submit">
            Create position
          </Button>
        </Actions>
      </Card>
    </Stack>
  );
};
