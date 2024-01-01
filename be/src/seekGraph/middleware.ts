/* eslint-disable new-cap */

import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { koaMiddleware } from '@as-integrations/koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';

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
  path,
  userAgent,
  seekApiUrlOverride,
}: SeekGraphMiddlewareOptions): Promise<Router.Middleware> => {
  const schema = await createSchema({
    getPartnerToken,
    userAgent,
    seekApiUrlOverride,
  });

  const server = new ApolloServer({
    cache: 'bounded',
    csrfPrevention: true,
    introspection: debug,
    plugins: [
      debug
        ? ApolloServerPluginLandingPageLocalDefault()
        : ApolloServerPluginLandingPageDisabled(),
    ],
    schema,
  });

  await server.start();

  const router = new Router().post(
    path,
    bodyParser(),
    koaMiddleware(server, {
      context: ({ ctx }) => Promise.resolve(createContext(ctx)),
    }),
  );

  return router.middleware();
};
