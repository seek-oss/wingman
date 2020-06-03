import Koa from 'koa';

import { router } from './api';

export const createApp = () =>
  new Koa().use(router.allowedMethods()).use(router.routes());
