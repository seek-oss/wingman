import {
  Box,
  ContentBlock,
  Heading,
  IconDocument,
  IconNote,
  IconProfile,
  IconWorkExperience,
  Loader,
  Stack,
  Strong,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
  Text,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';
import { CANDIDATE_BY_ID, Candidate } from '../../data/candidates';
import { POSITION_BY_ID } from '../../data/positions';
import { useClient } from '../../hooks/user';
import { pluralise } from '../../utils/text';
import { PositionList } from '../../widgets/PositionList';

import { CandidateAttachment } from './Detail/Attachment';
import { CandidateNotes } from './Detail/Notes';
import { CandidateProfile } from './Detail/Profile';

const CandidateDetails = () => {
  const { id } = useParams();

  const { preferences } = useClient();

  const [candidate, setCandidate] = useState<Candidate>();

  useEffect(() => {
    const newCandidate = CANDIDATE_BY_ID[id];

    if (newCandidate) {
      setCandidate(newCandidate);
    }
  }, [id]);

  if (!candidate) {
    return (
      <Stack space="none">
        <Header>
          <Heading level="3">
            <Breadcrumbs trailingChevron>
              {[
                {
                  label: 'Candidates',
                  to: '/candidates',
                },
              ]}
            </Breadcrumbs>
          </Heading>
        </Header>

        <Box padding="gutter">
          <Loader />
        </Box>
      </Stack>
    );
  }

  const coverLetter = candidate.attachments.find(
    (attachment) => attachment.type === 'Cover letter',
  );
  const resume = candidate.attachments.find(
    (attachment) => attachment.type === 'Resume',
  );

  const positions = candidate.positions.map(({ id: positionId }) => {
    const position = POSITION_BY_ID[positionId];

    if (!position) {
      throw Error(
        `Couldn't find position ${positionId} associated with candidate ${candidate.id}! This indicates an inconsistency in our data.`,
      );
    }

    return position;
  });

  const tabs = [
    <Tab key="profile">
      <IconProfile /> Profile
    </Tab>,
    ...(coverLetter
      ? [
          <Tab key="coverLetter">
            <IconDocument /> Cover letter
          </Tab>,
        ]
      : []),
    ...(resume
      ? [
          <Tab key="resume">
            <IconDocument /> Resume
          </Tab>,
        ]
      : []),
    <Tab key="positions">
      <IconWorkExperience /> {pluralise(candidate.positions.length, 'position')}
    </Tab>,
    <Tab key="notes">
      <IconNote /> {pluralise(candidate.notes.length, 'note')}
    </Tab>,
  ];

  const tabPanels = [
    <TabPanel key="profile">
      <ContentBlock width="large">
        <Box padding="gutter">
          <CandidateProfile>{candidate}</CandidateProfile>
        </Box>
      </ContentBlock>
    </TabPanel>,
    ...(coverLetter
      ? [
          <TabPanel key="coverLetter">
            <ContentBlock width="large">
              <Box padding="gutter">
                <CandidateAttachment>{coverLetter}</CandidateAttachment>
              </Box>
            </ContentBlock>
          </TabPanel>,
        ]
      : []),
    ...(resume
      ? [
          <TabPanel key="resume">
            <ContentBlock width="large">
              <Box padding="gutter">
                <CandidateAttachment>{resume}</CandidateAttachment>
              </Box>
            </ContentBlock>
          </TabPanel>,
        ]
      : []),
    <TabPanel key="positions">
      <PositionList>{positions}</PositionList>
    </TabPanel>,
    <TabPanel key="notes">
      <ContentBlock width="large">
        <Box padding="gutter">
          <CandidateNotes>{candidate}</CandidateNotes>
        </Box>
      </ContentBlock>
    </TabPanel>,
  ];

  return (
    <Stack dividers space="none">
      <Header>
        <Heading level="3">
          <Breadcrumbs>
            {[
              {
                label: 'Candidates',
                to: '/candidates',
              },
              candidate.formattedName,
            ]}
          </Breadcrumbs>
        </Heading>
      </Header>

      <Box background="card" padding="gutter">
        <Stack space="gutter">
          {preferences.devTools ? (
            <Text>
              <Strong>ID:</Strong> {candidate.id}
            </Text>
          ) : undefined}
          <Text>
            <Strong>Source:</Strong> {candidate.source}
          </Text>
        </Stack>
      </Box>

      <TabsProvider id="candidate">
        <Box background="card">
          <Tabs gutter="gutter" label="Candidate" reserveHitArea>
            {tabs}
          </Tabs>
        </Box>

        <TabPanels>{tabPanels}</TabPanels>
      </TabsProvider>
    </Stack>
  );
};

export const CandidateDetailPage = () => (
  <ClientOnly>
    <CandidateDetails />
  </ClientOnly>
);
