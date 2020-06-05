/* eslint-disable new-cap */

import * as t from 'runtypes';

import { GetPartnerToken } from '../getPartnerToken';

export interface BrowserTokenMiddlewareOptions {
  getPartnerToken: GetPartnerToken<{ hirerId: string; partnerToken: string }>;
  userAgent: string;
}

export const BrowserTokenRequest = t.Record({
  scope: t.String,
});

export interface BrowserTokenResponse {
  authorization: string;
  expiry: string;
}

export interface SeekApiBrowserTokenRequest {
  hirerId: string;
  scope: string;
  userId: string;
}

export const SeekApiBrowserTokenResponse = t.Record({
  access_token: t.String,
  expires_in: t.Number,
  token_type: t.Literal('Bearer'),
});
