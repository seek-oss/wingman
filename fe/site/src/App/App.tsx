import 'braid-design-system/reset';

import { BraidLoadableProvider } from 'braid-design-system';
import React from 'react';

import { NextSteps } from './NextSteps';

interface AppProps {
  site: string;
}

export const App = ({ site }: AppProps) => (
  <BraidLoadableProvider themeName={site}>
    <NextSteps />
  </BraidLoadableProvider>
);
