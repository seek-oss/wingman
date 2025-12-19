import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { App } from './App/App';
import { UserProvider } from './hooks/user';
import type { ClientContext } from './types';

export default ({ basename }: ClientContext) => {
  hydrateRoot(
    document.getElementById('app')!,
    <UserProvider server={false}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </UserProvider>,
  );
};
