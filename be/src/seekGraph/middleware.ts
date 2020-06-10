import { ApolloServer } from 'apollo-server-koa';
import { Middleware } from 'koa';

import { createContext } from './context';
import { createSchema } from './schema';
import { SeekGraphMiddlewareOptions } from './types';

/**
 * Create a GraphQL proxy for the SEEK API on the specified `path`.
 *
 * The proxy calls `getPartnerToken` to validate that the incoming request is
 * authorised to act on behalf of a partner and retrieve a partner token. The
 * request is then forwarded to the SEEK API.
 */
export const createSeekGraphMiddleware = async ({
  getPartnerToken,
  debug,
  path,
  userAgent,
}: SeekGraphMiddlewareOptions): Promise<Middleware> => {
  const schema = await createSchema({
    getPartnerToken,
    userAgent,
  });

  const server = new ApolloServer({
    context: createContext,
    engine: false,
    introspection: debug,
    debug,
    playground: debug,
    schema,
    subscriptions: false,
  });

  return server.getMiddleware({ path });
};
