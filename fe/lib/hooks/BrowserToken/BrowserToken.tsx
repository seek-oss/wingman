import React, { ReactNode, useContext } from 'react';

import { createGetBrowserToken } from './fetch';
import { GetBrowserToken } from './types';

const ctx = React.createContext<GetBrowserToken | undefined>(undefined);

interface BrowserTokenProviderProps {
  baseUrl: string;
  children: ReactNode;
}

export const BrowserTokenProvider = ({
  baseUrl,
  children,
}: BrowserTokenProviderProps) => {
  const getBrowserToken = createGetBrowserToken(baseUrl);

  return <ctx.Provider value={getBrowserToken}>{children}</ctx.Provider>;
};

export const useBrowserToken = (): GetBrowserToken => {
  const getBrowserToken = useContext(ctx);

  if (typeof getBrowserToken === 'undefined') {
    throw Error('useBrowserToken requires a parent BrowserTokenProvider');
  }

  return getBrowserToken;
};
