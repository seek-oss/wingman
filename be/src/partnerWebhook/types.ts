/* eslint-disable new-cap */

import type { Context } from 'koa';
import * as t from 'runtypes';

/**
 * Function that retrieves the shared secret used to sign the webhook bodies for
 * a particular subscription ID.
 *
 * Return `null` if you wish to skip signature verification.
 */
export type GetSigningSecret = (
  subscriptionId: string,
) => Promise<string | null>;

export type PartnerWebhookEvent = {
  type: 'RECEIVED';
  body: WebhookBody;
  signature: string;
  valid: boolean;
};

export interface PartnerWebhookMiddlewareOptions {
  getSigningSecret: GetSigningSecret;
  callback?: (ctx: Context, event: PartnerWebhookEvent) => void | Promise<void>;
}

const NonEmptyString = t.String.withConstraint(
  (str) => str !== '' || 'string must not be empty',
);

const EVENT_FIELDS = {
  id: NonEmptyString,
  createDateTime: NonEmptyString,
  type: t.Union(t.Literal('CandidateApplicationCreated')),
} as const;

const CandidateApplicationCreatedEvent = t.Record({
  ...EVENT_FIELDS,
  type: t.Literal('CandidateApplicationCreated'),

  candidateApplicationProfileId: NonEmptyString,
  candidateId: NonEmptyString,
});

const Event = CandidateApplicationCreatedEvent;

export const WebhookBody = t.Record({
  events: t
    .Array(Event)
    .withConstraint(
      (events) => events.length > 0 || 'events must not be an empty array',
    ),
  subscriptionId: NonEmptyString,
});

export type WebhookBody = t.Static<typeof WebhookBody>;
