import Router from '@koa/router';
import { Middleware } from 'koa';
import compose from 'koa-compose';

import { createSeekGraphMiddleware } from 'src';

import { USER_AGENT, getPartnerToken } from '../config';

import { seekAttachmentMiddleware } from './attachment';
import { corsMiddleware } from './cors';
import { partnerWebhookMiddleware } from './webhook';

export const createMiddleware = async (): Promise<Middleware> => {
  const seekGraphMiddleware = await createSeekGraphMiddleware({
    debug: true,
    getPartnerToken,
    path: '/seek-graphql',
    userAgent: USER_AGENT,
  });

  const router = new Router()
    .get('/attachment', seekAttachmentMiddleware)
    .post('/webhook/:endpoint', partnerWebhookMiddleware);

  // TODO: fix incompatibility with @koa/router context
  return compose<any>([
    seekGraphMiddleware,

    corsMiddleware,
    router.allowedMethods(),
    router.routes(),
  ]);
};
