import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';
import { ClientContext } from './types';

export default ({ site }: ClientContext) => {
  hydrate(
    <BrowserRouter>
      <App site={site} />
    </BrowserRouter>,
    document.getElementById('app'),
  );
};
