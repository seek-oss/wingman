import {
  Checkbox,
  Column,
  Columns,
  Divider,
  IconClear,
  Stack,
  Text,
  TextLinkButton,
} from 'braid-design-system';
import React from 'react';

interface DisplayOptionProps {
  text: string;
  showDivider: boolean;
  setPreferred: (text: string, newStatus: boolean) => void;
  removeItem: () => void;
  preferredIndicator: boolean;
}

export default ({
  text,
  showDivider,
  setPreferred,
  removeItem,
  preferredIndicator,
}: DisplayOptionProps) => {
  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) =>
    setPreferred(text, event.currentTarget.checked);

  return (
    <Stack space="small">
      {showDivider && <Divider />}

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
