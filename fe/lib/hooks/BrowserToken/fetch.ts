import { hasStringProp } from '../../validation';

import { BrowserToken, GetBrowserToken } from './types';

interface BrowserTokenRequest {
  scope: string;
}

const fetchNewBrowserToken = async (
  baseUrl: string,
  scope: string,
): Promise<BrowserToken> => {
  const request: BrowserTokenRequest = {
    scope,
  };

  const response = await fetch(`${baseUrl}/browser-token`, {
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.status !== 200) {
    const body = await response.text();

    throw Error(`Browser token endpoint returned ${response.status}: ${body}`);
  }

  const body = (await response.json()) as unknown;

  if (!hasStringProp(body, 'authorization') || !hasStringProp(body, 'expiry')) {
    throw Error('Browser token endpoint returned unexpected body');
  }

  return body;
};

export const createGetBrowserToken = (baseUrl: string): GetBrowserToken => {
  let cachedPromise: Promise<BrowserToken> | undefined;

  return async (scope) => {
    if (typeof cachedPromise !== 'undefined') {
      const browserToken = await cachedPromise;

      // Use cached browser token until a minute before expiry
      if (Date.parse(browserToken.expiry) - Date.now() > 60 * 1000) {
        return browserToken;
      }
    }

    const freshPromise = fetchNewBrowserToken(baseUrl, scope);

    // Reset cache on promise rejection
    cachedPromise = freshPromise.catch((err) => {
      cachedPromise = undefined;

      throw err;
    });

    return freshPromise;
  };
};
