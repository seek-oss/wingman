import {
  Actions,
  Badge,
  Box,
  Button,
  Column,
  Columns,
  IconPromote,
  Inline,
  Stack,
  Strong,
  Text,
} from 'braid-design-system';
import React, { useState } from 'react';

import { SearchField } from '../components/SearchField';
import { Table, TableColumn } from '../components/Table';
import { Candidate } from '../data/candidates';

const ATTRIBUTE_ROW_LIMIT = 3;

const COLUMNS: Array<TableColumn<Candidate>> = [
  {
    label: 'Name',
    align: 'left',
    render: (candidate) => candidate.formattedName,
    to: (candidate) => `/candidates/detail/${candidate.id}`,
    weight: 1,
  },
  {
    label: 'Career history',
    align: 'left',
    render: (candidate) => (
      <Stack space="small">
        {candidate.roles.length === 0 ? (
          <Text baseline={false} tone="secondary">
            <IconPromote /> New to the workforce
          </Text>
        ) : (
          candidate.roles.slice(0, ATTRIBUTE_ROW_LIMIT).map((role, index) => (
            <Text baseline={false} key={index}>
              {(() => {
                if (index === 0) {
                  return (
                    <>
                      <Strong>{role.title}</Strong>, {role.company}
                    </>
                  );
                }

                const extras = candidate.roles.length - ATTRIBUTE_ROW_LIMIT + 1;

                if (index === ATTRIBUTE_ROW_LIMIT - 1 && extras > 1) {
                  return <small>+{extras} others</small>;
                }

                return <small>{role.title}</small>;
              })()}
            </Text>
          ))
        )}
      </Stack>
    ),
    weight: 3,
  },
  {
    label: 'Education',
    align: 'left',
    render: (candidate) => (
      <Stack space="small">
        {candidate.qualifications
          .slice(0, ATTRIBUTE_ROW_LIMIT)
          .map((qualification, index) => (
            <Text baseline={false} key={index}>
              {(() => {
                if (index === 0) {
                  return (
                    <>
                      <Strong>{qualification.name}</Strong>,{' '}
                      {qualification.issuer}
                    </>
                  );
                }

                const extras =
                  candidate.qualifications.length - ATTRIBUTE_ROW_LIMIT + 1;

                if (index === ATTRIBUTE_ROW_LIMIT - 1 && extras > 1) {
                  return <small>+{extras} others</small>;
                }

                return <small>{qualification.name}</small>;
              })()}
            </Text>
          ))}
      </Stack>
    ),
    weight: 3,
  },
  {
    label: 'Skills',
    align: 'left',
    render: (candidate) => (
      <Inline space="medium">
        {candidate.skills.map((skill) => (
          <Badge key={skill.name} tone="neutral">
            {skill.name}
          </Badge>
        ))}
      </Inline>
    ),
    weight: 1,
  },
];

interface Props {
  candidates: Candidate[];
}

export const CandidateList = ({ candidates }: Props) => {
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
              placeholder="Filter candidates..."
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

      <Table columns={COLUMNS} rows={candidates} />
    </Stack>
  );
};
