import { TextField } from 'braid-design-system';
import React, { ComponentProps, useEffect, useRef } from 'react';

type Props = Pick<
  ComponentProps<typeof TextField>,
  'id' | 'onChange' | 'placeholder' | 'value'
> & {
  autoFocus?: boolean;
};

export const SearchField = (props: Props) => {
  const { autoFocus } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return <TextField {...props} ref={ref} />;
};
