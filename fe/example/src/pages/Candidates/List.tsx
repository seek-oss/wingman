import { Heading, Stack } from 'braid-design-system';
import React from 'react';

import { Header } from '../../components/Header';
import { CANDIDATES } from '../../data/candidates';
import { CandidateList } from '../../widgets/CandidateList';

export const CandidateListPage = () => (
  <Stack dividers space="none">
    <Header>
      <Heading level="3">Candidates</Heading>
    </Header>

    {/* TODO: support pagination */}
    <CandidateList candidates={CANDIDATES.slice(0, 25)} />
  </Stack>
);
