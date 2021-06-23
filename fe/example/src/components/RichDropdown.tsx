import { Box, IconChevron, Stack } from 'braid-design-system';
import React, { ReactNode, useState } from 'react';

import * as styles from './RichDropdown.css';

interface BaseT {
  id: string;
}

interface ItemProps<T> {
  children: (value: T | undefined) => ReactNode;
  chevron?: boolean;
  onClick: () => void;
  value: T | undefined;
}

const Item = <T extends unknown>({
  children,
  chevron,
  onClick,
  value,
}: ItemProps<T>) => (
  <Box
    alignItems="center"
    background="card"
    className={styles.selectionHover}
    component="button"
    cursor="pointer"
    display="flex"
    justifyContent="spaceBetween"
    onClick={onClick}
    padding="gutter"
    width="full"
  >
    {children(value)}

    {chevron ? <IconChevron direction="down" size="xsmall" /> : undefined}
  </Box>
);

interface Props<T> {
  children: (value: T | undefined) => ReactNode;
  onChange?: (value: T | undefined) => void;
  values: T[];
}

export const RichDropdown = <T extends BaseT>({
  children,
  onChange,
  values,
}: Props<T>) => {
  const [selection, setSelection] = useState<T>();

  const [expanded, setExpanded] = useState(false);

  const select = (value: T | undefined) => {
    setSelection(value);
    setExpanded(false);
    onChange?.(value);
  };

  return expanded ? (
    <Stack dividers space="none">
      {values.map((value) => (
        <Item key={value.id} onClick={() => select(value)} value={value}>
          {children}
        </Item>
      ))}
    </Stack>
  ) : (
    <Item chevron onClick={() => setExpanded(true)} value={selection}>
      {children}
    </Item>
  );
};
