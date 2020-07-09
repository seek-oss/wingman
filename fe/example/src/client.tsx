import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';
import { UserProvider } from './hooks/user';
import { ClientContext } from './types';

export default ({ site }: ClientContext) => {
  hydrate(
    <UserProvider server={false}>
      <BrowserRouter>
        <App site={site} />
      </BrowserRouter>
    </UserProvider>,
    document.getElementById('app'),
  );
};
