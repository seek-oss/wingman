import Router from '@koa/router';
import compose from 'koa-compose';
import { AsyncMiddleware } from 'seek-koala';

import { createSeekGraphMiddleware } from 'src';

import { USER_AGENT, getPartnerToken } from '../config';

import { browserTokenMiddleware } from './browserToken';
import { corsMiddleware } from './cors';
import { rootMiddleware } from './root';
import { partnerWebhookMiddleware } from './webhook';

const createMiddleware = async () => {
  const seekGraphMiddleware = await createSeekGraphMiddleware({
    debug: true,
    getPartnerToken,
    path: '/seek-graphql',
    userAgent: USER_AGENT,
  });

  const router = new Router()
    .post('/browser-token', browserTokenMiddleware)
    .post('/webhook/:endpoint', partnerWebhookMiddleware);

  return compose([
    rootMiddleware,

    seekGraphMiddleware,

    corsMiddleware,
    router.allowedMethods(),
    router.routes(),
  ]);
};

export const middleware = AsyncMiddleware.lazyLoad(createMiddleware);
