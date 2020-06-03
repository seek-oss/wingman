import 'braid-design-system/reset';

import {
  BraidLoadableProvider,
  Stack,
  ToastProvider,
} from 'braid-design-system';
import React from 'react';

import { Header } from './Header';
import { HomePage } from './HomePage';

interface AppProps {
  site: string;
}

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <ToastProvider>
      <Stack space={['none', 'none', 'large']}>
        <Header />

        <HomePage />
      </Stack>
    </ToastProvider>
  </BraidLoadableProvider>
);
