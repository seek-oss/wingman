import Koa from 'koa';
import nock from 'nock';
import * as fetchModule from 'node-fetch';

import {
  SEEK_BROWSER_TOKEN_PATH,
  SEEK_BROWSER_TOKEN_PLAYGROUND_BASE_URL,
} from '../constants';
import { RetrieveRequest } from '../getPartnerToken';
import { createAgent } from '../testing/http';
import { errorHandler } from '../testing/koa';
import {
  DATE_ISO_REGEX,
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

  it('issues a browser token for a valid request', async () => {
    nock(SEEK_BROWSER_TOKEN_PLAYGROUND_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    const response = await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ scope: 'arbitrary' })
      .expect(200);

    expect(response.body).toEqual({
      authorization: `Bearer ${VALID_BROWSER_TOKEN_RESPONSE.access_token}`,
      expiry: expect.stringMatching(DATE_ISO_REGEX),
    });
  });

  it('caches a browser token', async () => {
    const fetchSpy = jest.spyOn(fetchModule, 'default');

    nock(SEEK_BROWSER_TOKEN_PLAYGROUND_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, VALID_BROWSER_TOKEN_RESPONSE);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ scope: 'arbitrary' })
      .expect(200);

    expect(fetchSpy).toBeCalledTimes(1);

    await agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ scope: 'arbitrary' })
      .expect(200);

    expect(fetchSpy).toBeCalledTimes(1);
  });

  it('blocks an invalid request', () =>
    agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ noscope: 720 })
      .expect(400, 'scope: Expected string, but was undefined'));

  it('blocks an unknown user', () =>
    agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'hacker')
      .send({ scope: 'arbitrary' })
      .expect(401, 'Nice try'));

  it('fails on invalid response from the SEEK API', () => {
    nock.cleanAll();
    nock(SEEK_BROWSER_TOKEN_PLAYGROUND_BASE_URL)
      .post(SEEK_BROWSER_TOKEN_PATH)
      .matchHeader('user-agent', 'abc/1.2.3')
      .reply(200, INVALID_BROWSER_TOKEN_RESPONSE);

    return agent()
      .post('/')
      .set('aUtHoRiZaTiOn', 'in')
      .send({ scope: 'arbitrary' })
      .expect(500);
  });
});
