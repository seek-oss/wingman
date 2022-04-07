import { Middleware } from 'koa';

const isRecord = (value: unknown): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

export const errorHandler: Middleware = async (ctx, next) => {
  try {
    return await next();
  } catch (err) {
    if (!isRecord(err) || typeof err.status !== 'number') {
      ctx.status = 500;
      ctx.body = err;
      return;
    }

    ctx.status = err.status ?? 500;
    ctx.body = err.message ?? '';
  }
};
