import { createPartnerWebhookMiddleware } from '../../../src';
import { getSigningSecret } from '../config';

export const partnerWebhookMiddleware = createPartnerWebhookMiddleware({
  /* eslint-disable-next-line no-console */
  callback: (_, event) => console.debug('webhook', event),
  getSigningSecret,
});
