import { Box, Text } from 'braid-design-system';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from 'sku/react-treat';

import { Align } from './Table';

import * as styleRefs from './TableCellLink.treat';

interface Props {
  align?: Align;
  children: ReactNode;
  to: string;
}

export const TableCellLink = ({ align, children, to }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Link
      className={classNames([styles.link, styles.linkRef])}
      tabIndex={-1}
      to={to}
    >
      <Text align={align} baseline={false} tone="link">
        <Box className={styles.linkBox} padding="gutter">
          {children}
        </Box>
      </Text>
    </Link>
  );
};
