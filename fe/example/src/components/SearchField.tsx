import { TextField } from 'braid-design-system';
import React, { ComponentProps, useRef } from 'react';

type Props = Pick<
  ComponentProps<typeof TextField>,
  'autoFocus' | 'id' | 'onChange' | 'placeholder' | 'value'
> & {
  'aria-label': string;
};

export const SearchField = (props: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return <TextField {...props} ref={ref} />;
};
