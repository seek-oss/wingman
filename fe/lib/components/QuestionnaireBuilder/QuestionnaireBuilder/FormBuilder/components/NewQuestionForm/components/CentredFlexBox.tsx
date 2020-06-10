import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';

type BoxProps = React.ComponentProps<typeof Box>;

interface CentredFlexBoxProps {
  justifyContent?: BoxProps['justifyContent'];
  children: ReactNode;
}
const CentredFlexBox = ({ justifyContent, children }: CentredFlexBoxProps) => (
  <Box
    display="flex"
    justifyContent={justifyContent}
    alignItems="center"
    height="full"
  >
    {children}
  </Box>
);

export default CentredFlexBox;
