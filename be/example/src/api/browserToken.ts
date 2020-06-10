import { createBrowserTokenMiddleware } from '../../../src';
import { USER_AGENT, getPartnerTokenWithHardcodedHirerId } from '../config';

export const browserTokenMiddleware = createBrowserTokenMiddleware({
  /* eslint-disable-next-line no-console */
  callback: (_, event) => console.debug('browserToken', event),
  getPartnerToken: getPartnerTokenWithHardcodedHirerId,
  userAgent: USER_AGENT,
});
