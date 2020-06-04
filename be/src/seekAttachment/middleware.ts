import { Context, Middleware } from 'koa';
import fetch from 'node-fetch';

import { SEEK_API_BASE_URL } from '../constants';
import { wrapRetriever } from '../getPartnerToken';

import { filterHeaders } from './headers';
import { SeekAttachmentEvent, SeekAttachmentMiddlewareOptions } from './types';

// Third parties shouldn’t depend on this.
const SEEK_API_ATTACHMENT_PATH = /^\/(anz|anzPublicTest)\/applications\/[a-z0-9]+\/attachments\/[a-z0-9]+$/i;

const parseUrlParameter = (ctx: Context) => {
  const { url } = ctx.query as Record<string, unknown>;

  if (typeof url !== 'string') {
    return ctx.throw(400, "Query parameter 'url' must be a string");
  }

  const { origin, pathname } = new URL(url);

  // Third parties shouldn’t use this method in production as it doesn’t check
  // that the hirer is authorised to access the attachment and it won’t cover
  // future attachment paths. Instead, the server should receive a request to
  // download a given attachment type for a candidate, check that the hirer has
  // access to said candidate, then retrieve the attachment from the SEEK API.
  // The URL should be sourced from a GraphQL query rather than user input.
  if (
    !(origin === SEEK_API_BASE_URL && SEEK_API_ATTACHMENT_PATH.test(pathname))
  ) {
    return ctx.throw(
      400,
      "Query parameter 'url' must point to a SEEK API attachment",
    );
  }

  return `${origin}${pathname}`;
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
