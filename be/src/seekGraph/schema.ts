import { AsyncExecutor } from '@graphql-tools/delegate';
import { introspectSchema, wrapSchema } from '@graphql-tools/wrap';
import { GraphQLSchema, print } from 'graphql';
import fetch from 'node-fetch';

import { SEEK_API_URL } from './constants';
import { SeekGraphContext, SeekGraphMiddlewareOptions } from './types';

type Options = Pick<
  SeekGraphMiddlewareOptions,
  'getPartnerToken' | 'userAgent'
>;

const createExecutor = ({
  getPartnerToken,
  userAgent,
}: Options): AsyncExecutor => async ({ document, variables, context }) => {
  // The shape of context depends on framework and Apollo Server configuration.
  // We perform runtime validation in the `createContext` function.
  const partnerToken =
    typeof context === 'undefined'
      ? undefined
      : await getPartnerToken(context as SeekGraphContext);

  const authHeaders: Record<string, string> =
    typeof partnerToken === 'undefined'
      ? {}
      : { Authorization: `Bearer ${partnerToken}` };

  const query = print(document);

  const fetchResult = await fetch(SEEK_API_URL, {
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
}: Options): Promise<GraphQLSchema> => {
  const executor = createExecutor({ getPartnerToken, userAgent });

  const schema = await introspectSchema(executor);

  return wrapSchema({
    executor,
    schema,
  });
};
