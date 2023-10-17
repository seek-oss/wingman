/* eslint-disable new-cap */

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import { koaMiddleware } from '@as-integrations/koa';
import type { Middleware } from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';

import { createContext } from './context';
import { createSchema } from './schema';
import type { SeekGraphMiddlewareOptions } from './types';

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
  userAgent,
  seekApiUrlOverride,
}: SeekGraphMiddlewareOptions): Promise<Middleware> => {
  const schema = await createSchema({
    getPartnerToken,
    userAgent,
    seekApiUrlOverride,
  });

  const server = new ApolloServer({
    introspection: debug,
    includeStacktraceInErrorResponses: debug,
    plugins: [
      debug
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageDisabled(),
    ],
    schema,
  });

  await server.start();

  return compose([
    bodyParser({ enableTypes: ['json'] }),
    koaMiddleware(server, {
      context: async ({ ctx }) => Promise.resolve(createContext(ctx.request)),
    }),
  ]);
};
