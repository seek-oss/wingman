import {
  Badge,
  Box,
  ContentBlock,
  Divider,
  Heading,
  IconPeople,
  IconVisibility,
  Loader,
  Stack,
  Strong,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProvider,
  Text,
  TextDropdown,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StringParam, useQueryParam } from 'use-query-params';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ClientOnly } from '../../components/ClientOnly';
import { Header } from '../../components/Header';
import { ADS_BY_POSITION_ID, type Ad } from '../../data/ads';
import {
  CANDIDATES_BY_POSITION_ID,
  type Candidate,
} from '../../data/candidates';
import {
  POSITION_BY_ID,
  type Position,
  STAGES,
  type Stage,
} from '../../data/positions';
import { USERS, type User } from '../../data/users';
import { useClient } from '../../hooks/user';
import { pluralise } from '../../utils/text';
import { CandidateList } from '../../widgets/CandidateList';
import { AdList } from '../Ads/List';

interface PositionDetailTabProps {
  position: Position;
  ads: Ad[];
  candidates: Candidate[];
}

const PositionDetailTabs = ({
  position,
  ads,
  candidates,
}: PositionDetailTabProps) => {
  const [selectedTab, setSelectedTab] = useState<string>();
  const [selectedAdId] = useQueryParam('ad', StringParam);

  useEffect(() => {
    if (typeof selectedAdId === 'undefined') {
      return;
    }

    setSelectedTab('ads');
  }, [selectedAdId]);

  return (
    <TabsProvider
      id="position"
      selectedItem={selectedTab}
      onChange={(_, selectedItem) => setSelectedTab(selectedItem)}
    >
      <Box background="surface">
        <Tabs gutter="gutter" label="Position" reserveHitArea>
          <Tab
            item="candidates"
            badge={
              position.candidates.new ? (
                <Badge tone="positive">{`+${position.candidates.new}`}</Badge>
              ) : undefined
            }
          >
            <IconPeople /> {pluralise(position.candidates.total, 'candidate')}
          </Tab>
          <Tab item="ads">
            <IconVisibility /> {pluralise(ads.length, 'ad')}
          </Tab>
        </Tabs>
      </Box>

      <TabPanels>
        <TabPanel>
          {/* TODO: support pagination */}
          <CandidateList candidates={candidates.slice(0, 25)} />
        </TabPanel>
        <TabPanel>
          <ContentBlock width="large">
            <AdList ads={ads} position={position.id} />
          </ContentBlock>
        </TabPanel>
      </TabPanels>
    </TabsProvider>
  );
};

const PositionDetails = () => {
  const { id } = useParams<{ id?: string }>();

  const { preferences } = useClient();

  const [position, setPosition] = useState<Position>();

  const [contact, setContact] = useState<User>();
  const [stage, setStage] = useState<Stage>();

  const [ads, setAds] = useState<Ad[]>();

  useEffect(() => {
    const newPosition = id ? POSITION_BY_ID[id] : null;

    if (newPosition) {
      setPosition(newPosition);

      setContact(newPosition.contact);
      setStage(newPosition.stage);

      const newAds = ADS_BY_POSITION_ID[newPosition.id];

      setAds(newAds ?? []);
    }
  }, [id]);

  if (!ads || !contact || !position || !stage) {
    return (
      <Stack space="none">
        <Header>
          <Heading level="3">
            <Breadcrumbs trailingChevron>
              {[
                {
                  label: 'Positions',
                  to: '/positions',
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

  const candidates = CANDIDATES_BY_POSITION_ID[position.id];

  return (
    <Stack space="none">
      <Header>
        <Heading level="3">
          <Breadcrumbs>
            {[
              {
                label: 'Positions',
                to: '/positions',
              },
              position.name,
            ]}
          </Breadcrumbs>
        </Heading>
      </Header>
      <Divider />
      <Box background="surface" padding="gutter">
        <Stack space="medium">
          {preferences.devTools ? (
            <Text>
              <Strong>ID:</Strong> {position.id}
            </Text>
          ) : undefined}
          <Text>
            <Strong>Contact:</Strong>{' '}
            <TextDropdown
              id="contact"
              label={contact.formattedName}
              onChange={(value) =>
                setContact(USERS.find((user) => user.id === value))
              }
              options={USERS.map((user) => ({
                text: user.formattedName,
                value: user.id,
              }))}
              value={contact.id}
            />
          </Text>
          <Text>
            <Strong>Stage:</Strong>{' '}
            <TextDropdown
              id="stage"
              label={stage}
              onChange={(value) => setStage(value)}
              options={[...STAGES]}
              value={stage}
            />
          </Text>
        </Stack>
      </Box>
      <Divider />
      <PositionDetailTabs
        ads={ads}
        candidates={candidates}
        position={position}
      />
    </Stack>
  );
};

export const PositionDetailPage = () => (
  <ClientOnly>
    <PositionDetails />
  </ClientOnly>
);
