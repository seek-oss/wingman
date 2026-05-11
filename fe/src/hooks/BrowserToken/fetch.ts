import { BrowserTokenResponse, type GetAuthorization } from './types';

interface BrowserTokenRequest {
  scope: string;
}

const fetchNewBrowserToken = async (
  baseUrl: string,
  scope: string,
): Promise<BrowserTokenResponse> => {
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

  const result = BrowserTokenResponse.inspect(body);

  if (!result.success) {
    throw Error('Browser token endpoint returned unexpected body');
  }

  return result.value;
};

const getAuthorizationWithExpiry = async (baseUrl: string, scope: string) => {
  const response = await fetchNewBrowserToken(baseUrl, scope);

  const expiry = Date.now() + response.expires_in * 1000;

  return {
    authorization: `Bearer ${response.access_token}`,

    // Expire cached token once there is a minute left
    expired: () => expiry - Date.now() < 60 * 1000,
  };
};

export const createGetAuthorization = (baseUrl: string): GetAuthorization => {
  interface CacheItem {
    authorization: string;
    expired(): boolean;
  }

  const cache = new Map<string, Promise<CacheItem>>();

  return async (scope) => {
    const cachedPromise = cache.get(scope);

    if (typeof cachedPromise !== 'undefined') {
      const response = await cachedPromise;

      if (!response.expired()) {
        return response.authorization;
      }
    }

    const freshPromise = getAuthorizationWithExpiry(baseUrl, scope).catch(
      (err) => {
        // Do not cache failed retrievals
        cache.delete(scope);

        throw err;
      },
    );

    cache.set(scope, freshPromise);

    const response = await freshPromise;

    return response.authorization;
  };
};
