import '../../src/register';

import Koa, { Middleware } from 'koa';

import { createMiddleware } from './api';
import { PORT } from './config';

const createApp = () => {
  let cache: Promise<Middleware> | undefined;

  return new Koa().use(async (ctx, next) => {
    const middleware = await (cache ?? (cache = createMiddleware()));

    return middleware(ctx, next);
  });
};

const app = createApp();

export = Object.assign(app, {
  port: PORT,
});
