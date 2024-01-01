/* eslint-disable new-cap */

import * as t from 'runtypes';

import type { RetrieveRequest } from '../getPartnerToken';

const IncomingContext = t.Record({
  request: t.Record({
    header: t.Record({
      authorization: t.String,
      'accept-language': t.String.optional(),
    }),
  }),
});

type IncomingContext = t.Static<typeof IncomingContext>;

export const createContext = (context: unknown): RetrieveRequest => {
  const result = IncomingContext.validate(context);

  if (result.success) {
    return {
      authorization: result.value.request.header.authorization,
      'accept-language': result.value.request.header['accept-language'],
    };
  }

  return {};
};
