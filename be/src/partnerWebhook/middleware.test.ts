import Koa from 'koa';

import {
  INVALID_WEBHOOK_SIGNATURE,
  SIGNED_WEBHOOK_BODY,
  SIGNED_WEBHOOK_SECRET,
  SIGNED_WEBHOOK_SIGNATURE,
  SIGNED_WEBHOOK_SUBSCRIPTION_ID,
  UNSIGNED_WEBHOOK_BODY,
  UNSIGNED_WEBHOOK_SUBSCRIPTION_ID,
} from '../testing/data/webhooks';
import { createAgent } from '../testing/http';
import { getSigningSecret } from '../testing/mock';

import { createPartnerWebhookMiddleware } from './middleware';

describe('createPartnerWebhookMiddleware', () => {
  const callback = jest.fn().mockResolvedValue(undefined);

  const agent = createAgent(() => {
    const middleware = createPartnerWebhookMiddleware({
      callback,
      getSigningSecret,
    });

    return new Koa().use(middleware);
  });

  beforeAll(agent.setup);

  beforeEach(() =>
    getSigningSecret.mockImplementation((subscriptionId) => {
      switch (subscriptionId) {
        case SIGNED_WEBHOOK_SUBSCRIPTION_ID:
          return Promise.resolve(SIGNED_WEBHOOK_SECRET);
        case UNSIGNED_WEBHOOK_SUBSCRIPTION_ID:
          return Promise.resolve(null);
        default:
          return Promise.reject(new Error('New webhook, who dis'));
      }
    }),
  );

  afterEach(jest.clearAllMocks);

  afterAll(agent.teardown);

  it('accepts a signed request', async () => {
    await agent()
      .post('/')
      .set('Seek-Signature', SIGNED_WEBHOOK_SIGNATURE)
      .send(SIGNED_WEBHOOK_BODY)
      .expect(204);

    expect(callback.mock.calls[0][1]).toEqual({
      body: SIGNED_WEBHOOK_BODY,
      signature: SIGNED_WEBHOOK_SIGNATURE,
      type: 'RECEIVED',
      valid: true,
    });
  });

  it('accepts a request for which we have a null secret', async () => {
    await agent()
      .post('/')
      .set('Seek-Signature', INVALID_WEBHOOK_SIGNATURE)
      .send(UNSIGNED_WEBHOOK_BODY)
      .expect(204);

    expect(callback.mock.calls[0][1]).toEqual({
      body: UNSIGNED_WEBHOOK_BODY,
      signature: INVALID_WEBHOOK_SIGNATURE,
      type: 'RECEIVED',
      valid: true,
    });
  });

  it('denies a request with a mismatched signature', async () => {
    await agent()
      .post('/')
      .set('Seek-Signature', INVALID_WEBHOOK_SIGNATURE)
      .send(SIGNED_WEBHOOK_BODY)
      .expect(400, 'Invalid request');

    expect(callback.mock.calls[0][1]).toEqual({
      body: SIGNED_WEBHOOK_BODY,
      signature: INVALID_WEBHOOK_SIGNATURE,
      type: 'RECEIVED',
      valid: false,
    });
  });

  it('denies a request with an unknown subscription ID', async () => {
    await agent()
      .post('/')
      .set('Seek-Signature', SIGNED_WEBHOOK_SIGNATURE)
      .send({ ...SIGNED_WEBHOOK_BODY, subscriptionId: '???' })
      .expect(400, 'New webhook, who dis');

    expect(callback).not.toHaveBeenCalled();
  });

  it('denies a request with an invalid body', async () => {
    await agent()
      .post('/')
      .set('Seek-Signature', SIGNED_WEBHOOK_SIGNATURE)
      .send({})
      .expect(400, 'Invalid request');

    expect(callback).not.toHaveBeenCalled();
  });
});
