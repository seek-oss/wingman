import { Box } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';

import * as styles from './styles.css';

interface Props {
  children: ReactNode;
  height?: ComponentProps<typeof Box>['height'];
}

export const SectionCard = ({ children, height }: Props) => (
  <Box
    background="surface"
    borderRadius={['none', 'none', 'xlarge']}
    className={styles.responsiveBorder}
    height={height}
  >
    {children}
  </Box>
);
