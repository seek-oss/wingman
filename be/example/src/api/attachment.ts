import cors from '@koa/cors';
import Router from '@koa/router';

import { createSeekAttachmentMiddleware } from '../../../src';
import { FE_ORIGIN, USER_AGENT, getPartnerToken } from '../config';

const corsMiddleware = cors({
  // Needed for attachment downloads
  exposeHeaders: ['Content-Disposition'],

  // Allow frontend local development server
  origin: FE_ORIGIN,
});

const seekAttachmentMiddleware = createSeekAttachmentMiddleware({
  /* eslint-disable-next-line no-console */
  callback: (_, event) => console.debug('attachment', event),
  getPartnerToken,
  userAgent: USER_AGENT,
});

export const attachmentRouter = new Router()
  .use(corsMiddleware)
  .get('downloadAttachment', '/', seekAttachmentMiddleware);
