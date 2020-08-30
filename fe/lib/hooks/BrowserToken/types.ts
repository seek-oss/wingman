/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable new-cap */

import * as t from 'runtypes';

export type BrowserTokenResponse = t.Static<typeof BrowserTokenResponse>;

export const BrowserTokenResponse = t.Record({
  access_token: t.String,
  expires_in: t.Number,
  token_type: t.Literal('Bearer'),
});

export type GetAuthorization = (scope: string) => Promise<string>;
