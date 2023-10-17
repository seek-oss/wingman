/* eslint-disable new-cap */

import { TextEncoder } from 'util';

import type { Context } from 'koa';
import * as t from 'runtypes';

/**
 * Function that verifies that the incoming request is authorised to act on
 * behalf of a partner and provides a partner token in response.
 */
export type GetPartnerToken<T = string> = (
  request: RetrieveRequest,
) => Promise<T>;

export interface RetrieveRequest {
  authorization?: string;
  hirerId?: string;
  'accept-language'?: string;
}

const RetrieveRequestBody = t.Record({
  hirerId: t.String.withConstraint((input) => {
    const { length } = new TextEncoder().encode(input);

    if (length < 1) {
      return 'Hirer ID cannot be an empty string';
    }

    if (length > 255) {
      return 'Hirer ID cannot exceed 255 bytes in UTF-8 encoding';
    }

    return true;
  }),
});

export const wrapRetriever = async <T>(
  ctx: Context,
  retrieve: (request: RetrieveRequest) => Promise<T>,
): Promise<T> => {
  const request = {
    authorization: ctx.get('Authorization') || undefined,
    hirerId: RetrieveRequestBody.check(ctx.request).hirerId,
  };

  try {
    return await retrieve(request);
  } catch (err) {
    // This is a bit of a hack. Consider either exposing the full Koa context to
    // the retriever function, or standardising error behaviour so that we don’t
    // handle unexpected errors and expose internal workings to the client.
    return ctx.throw(401, err instanceof Error ? err : String(err));
  }
};
