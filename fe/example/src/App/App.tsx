import 'braid-design-system/reset';

import {
  BraidLoadableProvider,
  Stack,
  ToastProvider,
} from 'braid-design-system';
import React from 'react';

import { BrowserTokenProvider } from 'lib/hooks';

import { BE_BASE_URL } from '../api/constants';

import { Header } from './Header';
import { HomePage } from './HomePage';

interface AppProps {
  site: string;
}

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <ToastProvider>
      <BrowserTokenProvider baseUrl={BE_BASE_URL}>
        <Stack space={['none', 'none', 'large']}>
          <Header />

          <HomePage />
        </Stack>
      </BrowserTokenProvider>
    </ToastProvider>
  </BraidLoadableProvider>
);
