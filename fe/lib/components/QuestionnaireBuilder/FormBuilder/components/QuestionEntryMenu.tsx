import {
  IconDelete,
  IconEdit,
  MenuItem,
  OverflowMenu,
} from 'braid-design-system';
import React from 'react';

interface QuestionEntryMenuProps {
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export default ({ onClickEdit, onClickDelete }: QuestionEntryMenuProps) => (
  <OverflowMenu label="Options">
    <MenuItem icon={<IconEdit />} onClick={onClickEdit}>
      Edit
    </MenuItem>
    <MenuItem icon={<IconDelete />} onClick={onClickDelete}>
      Delete
    </MenuItem>
  </OverflowMenu>
);
