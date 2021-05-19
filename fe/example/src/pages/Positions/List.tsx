import { Heading, Stack } from 'braid-design-system';
import React from 'react';

import { Header } from '../../components/Header';
import { POSITIONS } from '../../data/positions';
import { PositionList } from '../../widgets/PositionList';

export const PositionListPage = () => (
  <Stack dividers space="none">
    <Header>
      <Heading level="3">Positions</Heading>
    </Header>

    <PositionList>
      {
        // TODO: support pagination
        POSITIONS.slice(0, 25)
      }
    </PositionList>
  </Stack>
);
