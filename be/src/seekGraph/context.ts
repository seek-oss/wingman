/* eslint-disable new-cap */

import * as t from 'runtypes';

import type { RetrieveRequest } from '../getPartnerToken';

const IncomingContext = t.Record({
  ctx: t.Record({
    request: t.Record({
      header: t.Record({
        authorization: t.String,
        'accept-language': t.String.optional(),
      }),
    }),
  }),
});

type IncomingContext = t.Static<typeof IncomingContext>;

export const createContext = (context: unknown): RetrieveRequest => {
  const result = IncomingContext.validate(context);

  return {
    authorization: result.success
      ? result.value.ctx.request.header.authorization
      : undefined,
    'accept-language': result.success
      ? result.value.ctx.request.header['accept-language']
      : undefined,
  };
};
