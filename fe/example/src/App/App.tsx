import 'braid-design-system/reset';

import { Box, BraidProvider, ToastProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import * as styles from './App.css';

import { BrowserTokenProvider } from '../../../lib/hooks';
import { BE_BASE_URL } from '../api/constants';

import { Router } from './Router';
import { Sidebar } from './Sidebar';

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
  // Default to `apac` theme for example wingman app
  <BraidProvider theme={apac}>
    <ToastProvider>
      <BrowserTokenProvider baseUrl={BE_BASE_URL}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Content />
        </QueryParamProvider>
      </BrowserTokenProvider>
    </ToastProvider>
  </BraidProvider>
);
