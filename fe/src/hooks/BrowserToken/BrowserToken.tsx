import React, { type ReactNode, useContext } from 'react';

import { createGetAuthorization } from './fetch';
import type { GetAuthorization } from './types';

const ctx = React.createContext<GetAuthorization | undefined>(undefined);

interface BrowserTokenProviderProps {
  baseUrl: string;
  children: ReactNode;
}

export const BrowserTokenProvider = ({
  baseUrl,
  children,
}: BrowserTokenProviderProps) => {
  const getAuthorization = createGetAuthorization(baseUrl);

  return <ctx.Provider value={getAuthorization}>{children}</ctx.Provider>;
};

export const useBrowserToken = (): GetAuthorization => {
  const getAuthorization = useContext(ctx);

  if (typeof getAuthorization === 'undefined') {
    throw Error('useBrowserToken requires a parent BrowserTokenProvider');
  }

  return getAuthorization;
};
