import type { Middleware } from 'koa';

const isObject = (value: unknown): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

export const rootMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();

    /* eslint-disable-next-line no-console */
    console.log(ctx.method, ctx.url, ctx.status);
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.error(ctx.method, ctx.url, ctx.status, err);

    if (!isObject(err) || typeof err.status !== 'number') {
      ctx.status = 500;
      ctx.body = '';
      return;
    }

    ctx.status = err.status;
    ctx.body = (err.status < 500 && err.message) || '';
  }
};
