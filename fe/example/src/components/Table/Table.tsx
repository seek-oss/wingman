import { Box, Text } from 'braid-design-system';
import React, { type ReactNode } from 'react';

import { TableCell } from './TableCell';

import * as styles from './Table.css';

export type Align = 'left' | 'center' | 'right';

export type BaseRow = { id: string };

export interface TableColumn<Row extends BaseRow> {
  align: Align;
  label: string;
  render: (row: Row) => ReactNode;
  to?: (row: Row) => string;

  // TODO: switch to CSS Grid for fractional column widths?
  weight: 1 | 2 | 3;
}

interface Props<Row extends BaseRow> {
  columns: TableColumn<Row>[];

  rows: Row[];
}

const TableHead = <T extends BaseRow>({ columns }: Props<T>) => (
  <Box className={styles.head} component="thead">
    <Box component="tr">
      {columns.map((column) => (
        <Box
          component="th"
          key={column.label}
          padding="gutter"
          textAlign={column.align}
        >
          <Text weight="strong">{column.label}</Text>
        </Box>
      ))}
    </Box>
  </Box>
);

const TableBody = <T extends BaseRow>({ columns, rows }: Props<T>) => (
  <Box background="surface" component="tbody">
    {rows.map((row) => (
      <Box className={styles.row} component="tr" key={row.id}>
        {columns.map((column) => (
          <TableCell
            align={column.align}
            key={column.label}
            to={column.to?.(row)}
          >
            {column.render(row)}
          </TableCell>
        ))}
      </Box>
    ))}
  </Box>
);

export const Table = <T extends BaseRow>(props: Props<T>) => (
  <Box className={styles.table} component="table">
    <TableHead {...props} />

    <TableBody {...props} />
  </Box>
);
