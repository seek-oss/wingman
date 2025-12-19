import { Divider, Heading, Stack } from 'braid-design-system';

import { Header } from '../../components/Header';
import { CANDIDATES } from '../../data/candidates';
import { CandidateList } from '../../widgets/CandidateList';

export const CandidateListPage = () => (
  <Stack space="none">
    <Header>
      <Heading level="3">Candidates</Heading>
    </Header>
    <Divider />
    {/* TODO: support pagination */}
    <CandidateList candidates={CANDIDATES.slice(0, 25)} />
  </Stack>
);
