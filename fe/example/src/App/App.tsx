import 'braid-design-system/reset';

import { Box, BraidProvider, ToastProvider } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import React from 'react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { BrowserTokenProvider } from '../../../lib/hooks';
import { BE_BASE_URL } from '../api/constants';

import { Router } from './Router';
import { Sidebar } from './Sidebar';

import * as styles from './App.css';

const Content = () => (
  <Box display="flex">
    <Box background="surface" className={styles.rightBorder} flexShrink={0}>
      <Sidebar />
    </Box>

    <Box flexGrow={1}>
      <Router />
    </Box>
  </Box>
);

export const App = () => (
  // Default to `seekJobs` theme for example wingman app
  <BraidProvider theme={seekJobs}>
    <ToastProvider>
      <BrowserTokenProvider baseUrl={BE_BASE_URL}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Content />
        </QueryParamProvider>
      </BrowserTokenProvider>
    </ToastProvider>
  </BraidProvider>
);
