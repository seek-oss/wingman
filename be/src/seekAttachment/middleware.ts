import { Context, Middleware } from 'koa';
import fetch from 'node-fetch';

import { SEEK_API_BASE_URL } from '../constants';
import { GetPartnerToken } from '../getPartnerToken';

import { filterHeaders } from './headers';
import { SeekAttachmentEvent, SeekAttachmentMiddlewareOptions } from './types';

const wrapRetriever = async (
  ctx: Context,
  getPartnerToken: GetPartnerToken,
) => {
  const request = {
    authorization: ctx.get('Authorization') || undefined,
  };

  try {
    return await getPartnerToken(request);
  } catch (err) {
    // This is a bit of a hack. Consider either exposing the full Koa context to
    // `getPartnerToken`, or standardising error behaviour so that we don’t
    // handle unexpected errors and expose internal workings to the client.
    return ctx.throw(401, err);
  }
};

const parseUrlParameter = (ctx: Context) => {
  const { url } = ctx.query as Record<string, unknown>;

  if (typeof url !== 'string') {
    return ctx.throw(400, "Query parameter 'url' must be a string");
  }

  const { origin } = new URL(url);

  if (origin !== SEEK_API_BASE_URL) {
    return ctx.throw(400, "Query parameter 'url' must point to the SEEK API");
  }

  return url;
};

export const createSeekAttachmentMiddleware = ({
  callback,
  getPartnerToken,
  userAgent,
}: SeekAttachmentMiddlewareOptions): Middleware =>
  async function seekAttachmentMiddleware(ctx) {
    const partnerToken = await wrapRetriever(ctx, getPartnerToken);

    const url = parseUrlParameter(ctx);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${partnerToken}`,
        'User-Agent': userAgent,
      },
      method: 'GET',
    });

    ctx.body = response.body;

    ctx.set(filterHeaders(response.headers));

    ctx.status = response.status;

    if (typeof callback === 'undefined') {
      return;
    }

    const event: SeekAttachmentEvent = {
      type: 'RETRIEVED',
      status: response.status,
      url,
    };

    return callback(ctx, event);
  };
