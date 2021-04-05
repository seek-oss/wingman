import { Box, Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleDefs from './RedactableText.treat';

type Props = ComponentProps<typeof Text> & {
  redact: boolean;
};

export const RedactableText = ({ children, redact, ...textProps }: Props) => {
  const styles = useStyles(styleDefs);
  return (
    <Text {...textProps}>
      <Box className={{ [styles.redact]: redact }} component="span">
        {children}
      </Box>
    </Text>
  );
};
