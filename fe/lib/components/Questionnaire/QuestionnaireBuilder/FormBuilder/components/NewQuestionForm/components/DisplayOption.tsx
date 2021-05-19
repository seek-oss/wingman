import {
  Checkbox,
  Column,
  Columns,
  IconClear,
  Stack,
  Text,
  TextLinkButton,
} from 'braid-design-system';
import React from 'react';

interface DisplayOptionProps {
  text: string;
  setPreferred: (text: string, newStatus: boolean) => void;
  removeItem: () => void;
  preferredIndicator: boolean;
}

export default ({
  text,
  setPreferred,
  removeItem,
  preferredIndicator,
}: DisplayOptionProps) => {
  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) =>
    setPreferred(text, event.currentTarget.checked);

  return (
    <Stack space="small">
      <Columns alignY="center" space="small">
        <Column width="content">
          <Text>
            <TextLinkButton hitArea="large" onClick={removeItem}>
              <IconClear tone="link" />
            </TextLinkButton>
          </Text>
        </Column>

        <Column>
          <Text>{text}</Text>
        </Column>

        <Column width="content">
          <Checkbox
            reserveMessageSpace={false}
            checked={preferredIndicator}
            id="id"
            label=""
            onChange={onCheckboxChange}
          />
        </Column>
      </Columns>
    </Stack>
  );
};
