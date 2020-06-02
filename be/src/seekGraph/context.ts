/* eslint-disable new-cap */

import * as t from 'runtypes';

import { SeekGraphContext } from './types';

const IncomingContext = t.Record({
  ctx: t.Record({
    request: t.Record({
      header: t.Record({
        authorization: t.String,
      }),
    }),
  }),
});

type IncomingContext = t.Static<typeof IncomingContext>;

export const createContext = (context: unknown): SeekGraphContext => {
  const result = IncomingContext.validate(context);

  return {
    authorization: result.success
      ? result.value.ctx.request.header.authorization
      : undefined,
  };
};
