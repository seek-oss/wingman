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
    <MenuItem onClick={onClickEdit}>
      <IconEdit /> Edit
    </MenuItem>
    <MenuItem onClick={onClickDelete}>
      <IconDelete /> Delete
    </MenuItem>
  </OverflowMenu>
);
