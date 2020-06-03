import { Box, TextLinkRenderer } from 'braid-design-system';
import React from 'react';

export const TextLinkButton = ({
  children,
  disabled,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <TextLinkRenderer>
    {(textLinkProps) => (
      <Box
        {...textLinkProps}
        component="button"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Box>
    )}
  </TextLinkRenderer>
);
