import { IconCopy, IconTick } from 'braid-design-system';
import React, { ComponentProps, Fragment } from 'react';
import { CopyableText } from 'scoobie';

type Props = Pick<ComponentProps<typeof CopyableText>, 'children' | 'size'>;

export const CopyableOid = ({ children, size }: Props) => (
  <CopyableText
    copiedLabel={
      <Fragment>
        <IconTick alignY="lowercase" /> Copied OID
      </Fragment>
    }
    copyLabel={
      <Fragment>
        <IconCopy alignY="lowercase" /> Copy OID
      </Fragment>
    }
    size={size}
  >
    {children}
  </CopyableText>
);
