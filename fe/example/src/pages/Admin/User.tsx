import {
  Card,
  Checkbox,
  Divider,
  Heading,
  Stack,
  TextField,
} from 'braid-design-system';
import { useState } from 'react';

import { useClient } from '../../hooks/user';

export const User = () => {
  const [editMode, setEditMode] = useState(false);

  const { user, setUser } = useClient();

  return (
    <Card>
      <Stack space="large">
        <Heading level="3">User</Heading>
        <Divider />
        <Stack space="large">
          <Checkbox
            checked={editMode}
            id="editMode"
            label="Edit"
            onChange={() => setEditMode((value) => !value)}
          />

          <TextField
            disabled={!editMode}
            id="userName"
            label="Name"
            onChange={(event) =>
              setUser({
                formattedName: event.currentTarget.value,
              })
            }
            type="text"
            value={user.formattedName}
          />
        </Stack>
      </Stack>
    </Card>
  );
};
