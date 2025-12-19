import { Box, Text } from 'braid-design-system';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

import type { Align } from './Table';

import * as styles from './TableCellLink.css';

interface Props {
  align?: Align;
  children: ReactNode;
  to: string;
}

export const TableCellLink = ({ align, children, to }: Props) => (
  <Link className={clsx([styles.link, styles.linkRef])} tabIndex={-1} to={to}>
    <Text align={align} baseline={false} tone="link">
      <Box className={styles.linkBox} padding="gutter">
        {children}
      </Box>
    </Text>
  </Link>
);
