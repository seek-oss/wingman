import Router from '@koa/router';

import { attachmentRouter } from './attachment';

export const router = new Router().use(
  '/attachment',
  attachmentRouter.routes(),
);
