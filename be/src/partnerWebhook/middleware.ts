import { Context, Middleware } from 'koa';
import bodyParser from 'koa-bodyparser';
import compose from 'koa-compose';

import { validateWebhookSignature } from './signature';
import {
  GetSigningSecret,
  PartnerWebhookEvent,
  PartnerWebhookMiddlewareOptions,
  WebhookBody,
} from './types';

const wrapRetriever = async (
  ctx: Context,
  promise: ReturnType<GetSigningSecret>,
) => {
  try {
    return await promise;
  } catch (err) {
    // This is a bit of a hack. Consider either exposing the full Koa context to
    // `getSigningSecret`, or standardising error behaviour so that we don’t
    // handle unexpected errors and expose internal workings to the client.
    return ctx.throw(400, err);
  }
};

const _createPartnerWebhookMiddleware = ({
  callback,
  getSigningSecret,
}: PartnerWebhookMiddlewareOptions): Middleware =>
  async function PartnerWebhookMiddleware(ctx) {
    const bodyResult = WebhookBody.validate(ctx.request.body);

    if (!bodyResult.success) {
      return ctx.throw(400, 'Invalid request');
    }

    const body = bodyResult.value;

    const signature = ctx.get('Seek-Signature');

    const secret = await wrapRetriever(
      ctx,
      getSigningSecret(body.subscriptionId),
    );

    const valid =
      secret === null
        ? true
        : validateWebhookSignature({
            body: ctx.request.rawBody,
            signature,
            secret,
          });

    const event: PartnerWebhookEvent = {
      type: 'RECEIVED',
      body,
      signature,
      valid,
    };

    await callback?.(ctx, event);

    if (!valid) {
      return ctx.throw(400, 'Invalid request');
    }

    ctx.status = 204;

    return;
  };

export const createPartnerWebhookMiddleware = (
  options: PartnerWebhookMiddlewareOptions,
): Middleware =>
  compose([
    bodyParser({ enableTypes: ['json'] }),
    _createPartnerWebhookMiddleware(options),
  ]);
