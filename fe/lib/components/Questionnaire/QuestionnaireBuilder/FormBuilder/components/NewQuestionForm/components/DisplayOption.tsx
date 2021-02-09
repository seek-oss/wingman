import {
  Box,
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

import CentredFlexBox from './CentredFlexBox';

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

      <Columns space="small">
        <Column width="4/5">
          <CentredFlexBox>
            <Box paddingRight="small">
              <Text>
                <TextLinkButton onClick={removeItem}>
                  <IconClear tone="link" />
                </TextLinkButton>
              </Text>
            </Box>
            <Text baseline={false}>{text}</Text>
          </CentredFlexBox>
        </Column>

        <Column>
          <CentredFlexBox justifyContent="flexEnd">
            <Checkbox
              reserveMessageSpace={false}
              checked={preferredIndicator}
              id="id"
              label=""
              onChange={onCheckboxChange}
            />
          </CentredFlexBox>
        </Column>
      </Columns>
    </Stack>
  );
};
