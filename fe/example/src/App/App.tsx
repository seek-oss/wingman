import 'braid-design-system/reset';
import './App.treat';

import { Box, BraidLoadableProvider, ToastProvider } from 'braid-design-system';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BrowserTokenProvider } from 'lib/hooks';

import { BE_BASE_URL } from '../api/constants';
import { UserProvider } from '../hooks/user';
import { OopsPage } from '../pages/Oops';

import { Sidebar } from './Sidebar';

interface AppProps {
  site: string;
}

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <ToastProvider>
      <UserProvider>
        <BrowserTokenProvider baseUrl={BE_BASE_URL}>
          <Box display="flex" height="full">
            <Box background="card" flexShrink={0} overflow="auto">
              <Sidebar />
            </Box>

            <Box
              background="neutral"
              flexShrink={0}
              height="full"
              style={{ width: '1px' }}
            />

            <Box flexGrow={1} overflow="auto">
              <Switch>
                <Route path="*">
                  <OopsPage />
                </Route>
              </Switch>
            </Box>
          </Box>
        </BrowserTokenProvider>
      </UserProvider>
    </ToastProvider>
  </BraidLoadableProvider>
);
