import { Box, Text } from 'braid-design-system';
import type { ReactNode } from 'react';

import type { Align } from './Table';
import { TableCellLink } from './TableCellLink';

interface Props {
  align?: Align;
  children: ReactNode;
  to?: string;
}

export const TableCell = ({ align, children, to }: Props) => {
  let wrappedChildren = children;

  if (typeof to === 'string') {
    wrappedChildren = (
      <TableCellLink align={align} to={to}>
        {wrappedChildren}
      </TableCellLink>
    );
  }

  if (typeof wrappedChildren === 'string') {
    wrappedChildren = (
      <Text align={align} baseline={false}>
        {wrappedChildren}
      </Text>
    );
  }

  return (
    <Box component="td" padding={typeof to === 'string' ? 'none' : 'gutter'}>
      {wrappedChildren}
    </Box>
  );
};
