import { Server } from 'http';
import { AddressInfo } from 'net';

import { createApp } from './app';
import { PORT } from './config';

let server: Server | undefined;

const serve = async () => {
  const app = createApp();

  await new Promise((resolve) => (server = app.listen(PORT, resolve)));

  if (typeof server === 'undefined') {
    throw Error('impossible!');
  }

  const address = server.address() as AddressInfo;

  /* eslint-disable-next-line no-console */
  console.debug('listening on', address.port);
};

serve().catch((err) => {
  throw err;
});
