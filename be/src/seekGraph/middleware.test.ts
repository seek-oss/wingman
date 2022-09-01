import { AuthenticationError } from 'apollo-server-koa';
import Koa from 'koa';
import nock from 'nock';

import { SEEK_API_BASE_URL, SEEK_API_PATH } from '../constants';
import { INTROSPECTION_RESPONSE } from '../testing/graphql';
import { createAgent } from '../testing/http';
import { getPartnerToken } from '../testing/mock';

import { createSeekGraphMiddleware } from './middleware';

describe('createSeekGraphMiddleware', () => {
  const agent = createAgent(async () => {
    nock(SEEK_API_BASE_URL)
      .post(SEEK_API_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, INTROSPECTION_RESPONSE);

    const middleware = await createSeekGraphMiddleware({
      debug: false,
      getPartnerToken,
      path: '/custom',
      userAgent: 'abc/1.2.3',
    });

    return new Koa().use(middleware);
  });

  beforeAll(agent.setup);

  afterEach(jest.clearAllMocks);

  afterAll(agent.teardown);

  it('propagates an authorised request to the SEEK API', async () => {
    const graphqlResponse = { data: { _query: 'such wow' } };

    getPartnerToken.mockImplementation((ctx) =>
      Promise.resolve(ctx.authorization === 'in' ? 'out' : ''),
    );

    nock(SEEK_API_BASE_URL)
      .post(SEEK_API_PATH)
      .matchHeader('authorization', 'Bearer out')
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, graphqlResponse);

    const response = await agent()
      .post('/custom')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ query: '{ _query }' })
      .expect(200);

    expect(response.body).toEqual(graphqlResponse);

    expect(getPartnerToken).toHaveBeenCalledTimes(1);
  });

  it('blocks an unauthorised request', async () => {
    const message = 'no creds';

    getPartnerToken.mockRejectedValue(new AuthenticationError(message));

    const response = await agent()
      .post('/custom')
      .send({ query: '{ _query }' })
      .expect(200);

    expect(response.body).toEqual({
      data: {
        _query: null,
      },
      errors: [
        expect.objectContaining({
          extensions: expect.objectContaining({
            code: 'UNAUTHENTICATED',
          }),
          message,
        }),
      ],
    });

    expect(getPartnerToken).toHaveBeenCalledTimes(1);
  });
});
