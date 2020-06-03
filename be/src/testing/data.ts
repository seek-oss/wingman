import crypto from 'crypto';

import { WebhookBody } from '../partnerWebhook/types';

export const SIGNED_WEBHOOK_SUBSCRIPTION_ID = 'signed';

export const UNSIGNED_WEBHOOK_SUBSCRIPTION_ID = 'unsigned';

export const SIGNED_WEBHOOK_BODY: WebhookBody = {
  events: [
    {
      createDateTime: 'foo',
      id: 'foo',
      type: 'CandidateApplicationCreated',

      candidateApplicationProfileId: 'foo',
      candidateId: 'foo',
    },
  ],

  subscriptionId: SIGNED_WEBHOOK_SUBSCRIPTION_ID,
};

export const UNSIGNED_WEBHOOK_BODY: WebhookBody = {
  ...SIGNED_WEBHOOK_BODY,

  subscriptionId: UNSIGNED_WEBHOOK_SUBSCRIPTION_ID,
};

export const SIGNED_WEBHOOK_SECRET = 'Hi Richard!';

export const SIGNED_WEBHOOK_SIGNATURE = crypto
  .createHmac('sha512', SIGNED_WEBHOOK_SECRET)
  .update(JSON.stringify(SIGNED_WEBHOOK_BODY))
  .digest('hex');

export const INVALID_WEBHOOK_SIGNATURE = 'this is totally not a HMAC';
