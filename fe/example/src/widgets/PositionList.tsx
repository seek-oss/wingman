import {
  Actions,
  Box,
  Button,
  Column,
  Columns,
  Inline,
  Stack,
  Text,
} from 'braid-design-system';
import React, { useState } from 'react';

import { RelativeDate } from '../components/RelativeDate';
import { SearchField } from '../components/SearchField';
import { Table, TableColumn } from '../components/Table';
import { Position } from '../data/positions';

const COLUMNS: Array<TableColumn<Position>> = [
  {
    label: 'Name',
    align: 'left',
    render: (position) => position.name,
    to: (position) => `/positions/detail/${position.id}`,
    weight: 1,
  },
  {
    label: 'Contact',
    align: 'left',
    render: (position) => position.contact.formattedName,
    weight: 1,
  },
  {
    label: 'Stage',
    align: 'left',
    render: (position) => position.stage,
    weight: 1,
  },
  {
    label: 'Updated',
    align: 'right',
    render: (position) => (
      <Text align="right" baseline={false}>
        <RelativeDate date={position.lastUpdate} />
      </Text>
    ),
    weight: 1,
  },
  {
    label: 'Candidates',
    align: 'right',
    render: (position) => (
      <Inline align="right" alignY="center" space="small">
        {position.candidates.new ? (
          <Text baseline={false} tone="positive">
            +{String(position.candidates.new)}
          </Text>
        ) : undefined}
        <Text baseline={false}>{position.candidates.total}</Text>
      </Inline>
    ),
    weight: 1,
  },
];

interface Props {
  children: Position[];
}

export const PositionList = ({ children }: Props) => {
  const [nameSearch, setNameSearch] = useState<string>('');

  return (
    <Stack space="none">
      <Box padding="gutter" paddingBottom="none">
        <Columns alignY="center" space="gutter">
          <Column>
            <SearchField
              autoFocus
              id="nameSearch"
              onChange={(event) => setNameSearch(event.currentTarget.value)}
              placeholder="Filter positions..."
              value={nameSearch}
            />
          </Column>
          <Column width="content">
            <Actions>
              <Button type="submit">Save</Button>
              <Button type="reset">Clear</Button>
            </Actions>
          </Column>
        </Columns>
      </Box>

      <Table columns={COLUMNS} rows={children} />
    </Stack>
  );
};
