import type { AsyncExecutor } from '@graphql-tools/utils';
import { introspectSchema, wrapSchema } from '@graphql-tools/wrap';
import { type GraphQLSchema, print } from 'graphql';
import fetch from 'node-fetch';

import { SEEK_API_URL } from '../constants';
import type { RetrieveRequest } from '../getPartnerToken';

import type { SeekGraphMiddlewareOptions } from './types';

type Options = Pick<
  SeekGraphMiddlewareOptions,
  'getPartnerToken' | 'userAgent' | 'seekApiUrlOverride'
>;

const createExecutor =
  ({
    getPartnerToken,
    userAgent,
    seekApiUrlOverride,
  }: Options): AsyncExecutor =>
  async ({ document, variables, context }) => {
    // The shape of context depends on framework and Apollo Server configuration.
    // We perform runtime validation in the `createContext` function.
    const partnerToken =
      typeof context === 'undefined'
        ? undefined
        : await getPartnerToken(context as RetrieveRequest);

    const authHeaders: Record<string, string> =
      typeof partnerToken === 'undefined'
        ? {}
        : { Authorization: `Bearer ${partnerToken}` };

    const query = print(document);

    const seekApiUrl = seekApiUrlOverride ?? SEEK_API_URL;

    const fetchResult = await fetch(seekApiUrl, {
      body: JSON.stringify({ query, variables }),
      headers: {
        ...authHeaders,
        'Content-Type': 'application/json',
        'User-Agent': userAgent,
      },
      method: 'POST',
    });

    return fetchResult.json();
  };

export const createSchema = async ({
  getPartnerToken,
  userAgent,
  seekApiUrlOverride,
}: Options): Promise<GraphQLSchema> => {
  const executor = createExecutor({
    getPartnerToken,
    userAgent,
    seekApiUrlOverride,
  });

  const schema = await introspectSchema(executor);

  return wrapSchema({
    executor,
    schema,
  });
};
