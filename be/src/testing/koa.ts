import { Middleware } from 'koa';

const isRecord = (value: unknown): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

export const errorHandler: Middleware = async (ctx, next) => {
  try {
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    return await next();
  } catch (anyErr) {
    const err = anyErr as unknown;

    if (!isRecord(err) || typeof err.status !== 'number') {
      ctx.status = 500;
      ctx.body = err;
      return;
    }

    ctx.status = err.status ?? 500;
    ctx.body = err.message ?? '';
  }
};
