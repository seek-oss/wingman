import { createSeekAttachmentMiddleware } from '../../../src';
import { USER_AGENT, getPartnerToken } from '../config';

export const seekAttachmentMiddleware = createSeekAttachmentMiddleware({
  /* eslint-disable-next-line no-console */
  callback: (_, event) => console.debug('attachment', event),
  getPartnerToken,
  userAgent: USER_AGENT,
});
