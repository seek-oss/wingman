import type { Middleware } from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';
import { LRUCache } from 'lru-cache';
import fetch from 'node-fetch';

import { SEEK_BROWSER_TOKEN_URL } from '../constants';
import { wrapRetriever } from '../getPartnerToken';

import {
  type BrowserTokenEvent,
  type BrowserTokenMiddlewareOptions,
  BrowserTokenRequest,
  BrowserTokenResponse,
  type SeekApiBrowserTokenRequest,
} from './types';

interface CacheItem {
  expiry: string;
  response: BrowserTokenResponse;
}

interface CacheKey {
  browserTokenUrl: string;
  hirerId: string;
  scope: string;
}

const tokenCache = new LRUCache<string, CacheItem>({
  max: 1024,
});

const cacheKey = ({ hirerId, scope }: CacheKey) =>
  JSON.stringify({ hirerId, scope });

export const resetTokenCache = () => tokenCache.clear();

const _createBrowserTokenMiddleware = ({
  callback,
  getPartnerToken,
  userAgent,
  browserTokenUrlOverride,
}: BrowserTokenMiddlewareOptions): Middleware =>
  async function BrowserTokenMiddleware(ctx) {
    const requestResult = BrowserTokenRequest.validate(ctx.request.body);

    if (!requestResult.success) {
      return ctx.throw(400, `Bad Request: ${requestResult.message}`);
    }

    const { scope } = requestResult.value;

    const { hirerId, partnerToken } = await wrapRetriever(ctx, getPartnerToken);

    const browserTokenUrl = browserTokenUrlOverride ?? SEEK_BROWSER_TOKEN_URL;

    const cachedItem = tokenCache.get(
      cacheKey({ browserTokenUrl, hirerId, scope }),
    );

    if (typeof cachedItem !== 'undefined') {
      const event: BrowserTokenEvent = {
        type: 'CACHED',
        expiry: cachedItem.expiry,
      };

      await callback?.(ctx, event);

      const response: BrowserTokenResponse = {
        ...cachedItem.response,

        // Recalculate expiry whenever we pull an item out of the cache.
        expires_in: Math.floor(
          (Date.parse(cachedItem.expiry) - Date.now()) / 1000,
        ),
      };

      ctx.body = response;

      return;
    }

    // We don't model our own user ID currently.
    const seekApiRequest: SeekApiBrowserTokenRequest = {
      hirerId,
      scope,
      userId: hirerId,
    };

    const fetchResponse = await fetch(browserTokenUrl, {
      body: JSON.stringify(seekApiRequest),
      headers: {
        Authorization: `Bearer ${partnerToken}`,
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
      },
      method: 'POST',
    });

    if (fetchResponse.status !== 200) {
      return ctx.throw(500, 'Unexpected status from browser token endpoint');
    }

    const fetchResponseJson = (await fetchResponse.json()) as unknown;

    const result = BrowserTokenResponse.validate(fetchResponseJson);

    if (!result.success) {
      return ctx.throw(500, 'Unexpected body from browser token endpoint');
    }

    const response: BrowserTokenResponse = result.value;

    const expiresInMs = response.expires_in * 1000;

    const expiry = new Date(Date.now() + expiresInMs).toISOString();

    const freshItem: CacheItem = {
      expiry,
      response,
    };

    // Write off the token at its half life. This is a bit mean.
    tokenCache.set(cacheKey({ browserTokenUrl, hirerId, scope }), freshItem, {
      ttl: expiresInMs / 2,
    });

    const event: BrowserTokenEvent = {
      type: 'RETRIEVED',
      expiry,
    };

    await callback?.(ctx, event);

    ctx.body = response;

    return;
  };

export const createBrowserTokenMiddleware = (
  options: BrowserTokenMiddlewareOptions,
): Middleware =>
  compose([
    bodyParser({ enableTypes: ['json'] }),
    _createBrowserTokenMiddleware(options),
  ]);
