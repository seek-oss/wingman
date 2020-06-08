import { Box, TextLinkRenderer } from 'braid-design-system';
import { BoxProps } from 'braid-design-system/lib/components/Box/Box';
import React from 'react';

type TextLinkButtonProps = {
  width?: BoxProps['width'];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const TextLinkButton = ({
  children,
  disabled,
  onClick,
  width,
}: TextLinkButtonProps) => (
  <TextLinkRenderer>
    {(textLinkProps) => (
      <Box
        component="button"
        width={width}
        {...textLinkProps}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Box>
    )}
  </TextLinkRenderer>
);
