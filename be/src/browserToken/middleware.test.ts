import Koa from 'koa';
import nock from 'nock';
import * as fetchModule from 'node-fetch';

import { SEEK_API_BASE_URL, SEEK_BROWSER_TOKEN_PATH } from '../constants';
import { RetrieveRequest } from '../getPartnerToken';
import { createAgent } from '../testing/http';
import { errorHandler } from '../testing/koa';
import {
  INVALID_BROWSER_TOKEN_RESPONSE,
  VALID_BROWSER_TOKEN_RESPONSE,
  VALID_HIRER_ID,
} from '../testing/tokens';

import { createBrowserTokenMiddleware, resetTokenCache } from './middleware';

describe('createBrowserTokenMiddleware', () => {
  const getPartnerToken = jest.fn<
    Promise<{ hirerId: string; partnerToken: string }>,
    [RetrieveRequest]
  >();

  const agent = createAgent(() => {
    const middleware = createBrowserTokenMiddleware({
      getPartnerToken,
      userAgent: 'abc/1.2.3',
    });

    return new Koa().use(errorHandler).use(middleware);
  });

  beforeAll(agent.setup);

  beforeEach(() =>
    getPartnerToken.mockImplementation(({ authorization }) => {
      switch (authorization) {
        case 'in':
          return Promise.resolve({
            hirerId: VALID_HIRER_ID,
            partnerToken: 'out',
          });

        default:
          throw new Error('Nice try');
      }
    }),
  );

  afterEach(jest.clearAllMocks);
  afterEach(resetTokenCache);

  afterAll(agent.teardown);

  it('issues a browser token for a request with a valid hirer ID', async () => {
    nock(SEEK_API_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'arbitrary',
      })
      .expect(200, VALID_BROWSER_TOKEN_RESPONSE);

    expect(getPartnerToken.mock.calls).toMatchInlineSnapshot(`
      [
        [
          {
            "authorization": "in",
            "hirerId": "seekAnzPublicTest:organization:seek:93WyyF1h",
          },
        ],
      ]
    `);
  });

  it('caches a browser token by scope', async () => {
    const fetchSpy = jest.spyOn(fetchModule, 'default');

    nock(SEEK_API_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'arbitrary',
      })
      .expect(200, VALID_BROWSER_TOKEN_RESPONSE);

    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const response = await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'arbitrary',
      })
      .expect(200);

    expect(response.body).toEqual({
      ...VALID_BROWSER_TOKEN_RESPONSE,
      expires_in: expect.any(Number),
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'intentional',
      })
      .expect(200);

    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('blocks a request with an invalid scope', () =>
    agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        noscope: 720,
      })
      .expect(400)
      .expect(({ text }) =>
        expect(text).toMatchInlineSnapshot(`
          "Bad Request: Validation failed:
          {
            "scope": "Expected string, but was missing"
          }.
          Object should match { hirerId: string; scope: string; }"
        `),
      ));

  it('blocks a request without a body', async () => {
    nock(SEEK_API_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .expect(400)
      .expect(({ text }) =>
        expect(text).toMatchInlineSnapshot(`
          "Bad Request: Validation failed:
          {
            "hirerId": "Expected string, but was missing",
            "scope": "Expected string, but was missing"
          }.
          Object should match { hirerId: string; scope: string; }"
        `),
      );

    expect(getPartnerToken.mock.calls).toMatchInlineSnapshot(`[]`);
  });

  it('blocks a request with an invalid hirer ID', async () => {
    nock(SEEK_API_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ hirerId: 123, scope: 'arbitrary' })
      .expect(400)
      .expect(({ text }) =>
        expect(text).toMatchInlineSnapshot(`
          "Bad Request: Validation failed:
          {
            "hirerId": "Expected string, but was number"
          }.
          Object should match { hirerId: string; scope: string; }"
        `),
      );

    expect(getPartnerToken.mock.calls).toMatchInlineSnapshot(`[]`);
  });

  it('blocks an unknown user', () =>
    agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'hacker')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'arbitrary',
      })
      .expect(401, 'Nice try'));

  it('fails on invalid response from the SEEK API', () => {
    nock.cleanAll();

    nock(SEEK_API_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, INVALID_BROWSER_TOKEN_RESPONSE);

    return agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({
        hirerId: VALID_HIRER_ID,
        scope: 'arbitrary',
      })
      .expect(500);
  });
});
