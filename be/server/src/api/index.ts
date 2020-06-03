import Router from '@koa/router';
import { Middleware } from 'koa';
import compose from 'koa-compose';

import { createSeekGraphMiddleware } from '../../../src';
import { USER_AGENT, getPartnerToken } from '../config';

import { attachmentRouter } from './attachment';

export const createMiddleware = async (): Promise<Middleware> => {
  const seekGraphMiddleware = await createSeekGraphMiddleware({
    debug: true,
    getPartnerToken,
    path: '/seek-graphql',
    userAgent: USER_AGENT,
  });

  const router = new Router().use('/attachment', attachmentRouter.routes());

  return compose([
    seekGraphMiddleware,
    router.allowedMethods(),
    router.routes(),
  ]);
};
