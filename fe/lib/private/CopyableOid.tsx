import React, { ComponentProps } from 'react';
import { CopyableText } from 'scoobie';

type Props = Pick<ComponentProps<typeof CopyableText>, 'children' | 'size'>;

export const CopyableOid = ({ children, size }: Props) => (
  <CopyableText copiedLabel="Copied OID" copyLabel="Copy OID" size={size}>
    {children}
  </CopyableText>
);
