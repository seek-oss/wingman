import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App/App';
import { UserProvider } from './hooks/user';
import type { ClientContext } from './types';

export default ({ basename }: ClientContext) => {
  hydrate(
    <UserProvider server={false}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </UserProvider>,
    document.getElementById('app'),
  );
};
