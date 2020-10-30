import 'braid-design-system/reset';

import { Box, BraidLoadableProvider, ToastProvider } from 'braid-design-system';
import React from 'react';
import { Route } from 'react-router-dom';
import { useStyles } from 'sku/react-treat';
import { QueryParamProvider } from 'use-query-params';

import { BrowserTokenProvider } from '../../../lib/hooks';
import { BE_BASE_URL } from '../api/constants';

import { Router } from './Router';
import { Sidebar } from './Sidebar';

import * as styleRefs from './App.treat';

interface AppProps {
  site: string;
}

const Content = () => {
  const styles = useStyles(styleRefs);

  return (
    <Box display="flex">
      <Box background="card" className={styles.rightBorder} flexShrink={0}>
        <Sidebar />
      </Box>

      <Box flexGrow={1}>
        <Router />
      </Box>
    </Box>
  );
};

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <ToastProvider>
      <BrowserTokenProvider baseUrl={BE_BASE_URL}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Content />
        </QueryParamProvider>
      </BrowserTokenProvider>
    </ToastProvider>
  </BraidLoadableProvider>
);
