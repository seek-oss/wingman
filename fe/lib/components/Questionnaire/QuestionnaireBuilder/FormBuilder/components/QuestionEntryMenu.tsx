import {
  Box,
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
      <Box display="flex" alignItems="center">
        <IconEdit />
        <Box paddingLeft="medium">Edit</Box>
      </Box>
    </MenuItem>
    <MenuItem onClick={onClickDelete}>
      <Box display="flex" alignItems="center">
        <IconDelete />
        <Box paddingLeft="medium">Delete</Box>
      </Box>
    </MenuItem>
  </OverflowMenu>
);
