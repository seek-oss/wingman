import { Box, Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';

import * as styles from './RedactableText.css';

type Props = ComponentProps<typeof Text> & {
  redact: boolean;
};

export const RedactableText = ({ children, redact, ...textProps }: Props) => (
  <Text {...textProps}>
    <Box className={redact ? styles.redact : undefined} component="span">
      {children}
    </Box>
  </Text>
);
