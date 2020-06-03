import 'braid-design-system/reset';

import { BraidLoadableProvider, Stack } from 'braid-design-system';
import React from 'react';

import { Header } from './Header';
import { HomePage } from './HomePage';

interface AppProps {
  site: string;
}

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <Stack space={['none', 'large']}>
      <Header />

      <HomePage />
    </Stack>
  </BraidLoadableProvider>
);
