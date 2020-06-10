/* eslint-disable new-cap */

import { Context } from 'koa';
import * as t from 'runtypes';

import { GetPartnerToken } from '../getPartnerToken';

export type BrowserTokenEvent =
  | {
      type: 'CACHED';
      expiry: string;
    }
  | {
      type: 'RETRIEVED';
      expiry: string;
    };

export interface BrowserTokenMiddlewareOptions {
  callback?: (ctx: Context, event: BrowserTokenEvent) => void | Promise<void>;
  getPartnerToken: GetPartnerToken<{ hirerId: string; partnerToken: string }>;
  userAgent: string;
}

export const BrowserTokenRequest = t.Record({
  scope: t.String,
});

export type BrowserTokenResponse = t.Static<typeof BrowserTokenResponse>;

export const BrowserTokenResponse = t.Record({
  access_token: t.String,
  expires_in: t.Number,
  token_type: t.Literal('Bearer'),
});

export interface SeekApiBrowserTokenRequest {
  hirerId: string;
  scope: string;
  userId: string;
}
