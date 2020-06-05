import { Middleware } from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';
import LRU from 'lru-cache';
import fetch from 'node-fetch';

import { SEEK_BROWSER_TOKEN_URL } from '../constants';
import { wrapRetriever } from '../getPartnerToken';

import {
  BrowserTokenMiddlewareOptions,
  BrowserTokenRequest,
  BrowserTokenResponse,
  SeekApiBrowserTokenRequest,
  SeekApiBrowserTokenResponse,
} from './types';

const tokenCache = new LRU<string, BrowserTokenResponse>();

export const resetTokenCache = () => tokenCache.reset();

const _createBrowserTokenMiddleware = ({
  getPartnerToken,
  userAgent,
}: BrowserTokenMiddlewareOptions): Middleware =>
  async function BrowserTokenMiddleware(ctx) {
    const requestResult = BrowserTokenRequest.validate(ctx.request.body);

    if (!requestResult.success) {
      return ctx.throw(
        400,
        `${requestResult.key ?? 'Bad Request'}: ${requestResult.message}`,
      );
    }

    const { scope } = requestResult.value;

    const { hirerId, partnerToken } = await wrapRetriever(ctx, getPartnerToken);

    const cachedToken = tokenCache.get(hirerId);

    if (typeof cachedToken !== 'undefined') {
      ctx.body = cachedToken;

      return;
    }

    // We don't model our own user ID currently.
    const seekApiRequest: SeekApiBrowserTokenRequest = {
      hirerId,
      scope,
      userId: hirerId,
    };

    const response = await fetch(SEEK_BROWSER_TOKEN_URL, {
      body: JSON.stringify(seekApiRequest),
      headers: {
        Authorization: `Bearer ${partnerToken}`,
        'User-Agent': userAgent,
      },
      method: 'POST',
    });

    const responseBody = (await response.json()) as unknown;

    const responseResult = SeekApiBrowserTokenResponse.validate(responseBody);

    if (!responseResult.success) {
      return ctx.throw(500, 'Unexpected response from browser token endpoint');
    }

    const expiresInMs = responseResult.value.expires_in * 1000;

    const freshToken: BrowserTokenResponse = {
      authorization: `Bearer ${responseResult.value.access_token}`,
      expiry: new Date(Date.now() + expiresInMs).toISOString(),
    };

    // Write off the token at its half life. This is a bit mean.
    tokenCache.set(hirerId, freshToken, expiresInMs / 2);

    ctx.body = freshToken;

    return;
  };

export const createBrowserTokenMiddleware = (
  options: BrowserTokenMiddlewareOptions,
): Middleware =>
  compose([
    bodyParser({ enableTypes: ['json'] }),
    _createBrowserTokenMiddleware(options),
  ]);
