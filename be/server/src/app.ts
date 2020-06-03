import Koa from 'koa';

import { createMiddleware } from './api';

export const createApp = async () => {
  const middleware = await createMiddleware();

  return new Koa().use(middleware);
};
