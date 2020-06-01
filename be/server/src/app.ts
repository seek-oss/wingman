import { AddressInfo } from 'net';

import Koa from 'koa';

const app = new Koa().use((ctx) => {
  ctx.body = 'Hello world!';
});

const port = undefined;

const server = app.listen(port, () => {
  const address = server.address() as AddressInfo;

  console.debug('listening on', address.port);
});

export const stopServer = () =>
  new Promise((resolve, reject) =>
    server.close((err) =>
      typeof err === 'undefined' ? resolve() : reject(err),
    ),
  );
