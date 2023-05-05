import type { Server } from 'http';

import type Koa from 'koa';
import request from 'supertest';

export const createAgent = (createApp: () => Koa | Promise<Koa>) => {
  let server: Server;

  let _agent: request.SuperTest<request.Test>;

  const agent = () => _agent;

  const setup = async () => {
    const app = await createApp();

    await new Promise((resolve) => (server = app.listen(resolve)));

    _agent = request.agent(server);
  };

  const teardown = () => server.close();

  return Object.assign(agent, {
    setup,
    teardown,
  });
};
