import 'braid-design-system/reset';

import { Box, BraidProvider, ToastProvider } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { useLocation, useNavigate } from 'react-router';
import {
  QueryParamProvider,
  type PartialLocation,
  type QueryParamAdapterComponent,
} from 'use-query-params';

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

// https://github.com/pbeshai/use-query-params/issues/295 - replace if resolved
export const ReactRouter7Adapter: QueryParamAdapterComponent = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  return children({
    location,
    push: ({ search, state }: PartialLocation) =>
      navigate({ search }, { state }),
    replace: ({ search, state }: PartialLocation) =>
      navigate({ search }, { replace: true, state }),
  });
};

export const App = () => (
  <BraidProvider theme={seekJobs}>
    <ToastProvider>
      <BrowserTokenProvider baseUrl={BE_BASE_URL}>
        <QueryParamProvider adapter={ReactRouter7Adapter}>
          <Content />
        </QueryParamProvider>
      </BrowserTokenProvider>
    </ToastProvider>
  </BraidProvider>
);
