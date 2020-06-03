import Koa from 'koa';
import nock from 'nock';

import { SEEK_API_BASE_URL } from '../constants';
import { createAgent } from '../testing/http';
import { getPartnerToken } from '../testing/mock';

import { createSeekAttachmentMiddleware } from './middleware';

describe('createSeekAttachmentMiddleware', () => {
  const agent = createAgent(() => {
    const middleware = createSeekAttachmentMiddleware({
      getPartnerToken,
      userAgent: 'abc/1.2.3',
    });

    return new Koa().use(middleware);
  });

  beforeAll(agent.setup);

  beforeEach(() =>
    getPartnerToken.mockImplementation((ctx) =>
      Promise.resolve(ctx.authorization === 'in' ? 'out' : ''),
    ),
  );

  afterEach(jest.clearAllMocks);

  afterAll(agent.teardown);

  const attachmentUrl = (origin: string) =>
    `/attachment?url=${encodeURIComponent(`${origin}/custom`)}`;

  it('proxies a 200 response with headers', async () => {
    nock(SEEK_API_BASE_URL).get('/custom').reply(200, Buffer.from('# My CV'), {
      'content-disposition': 'attachment; filename="cv.md"',
      'content-length': '7',
      'content-type': 'text/markdown; charset=utf-8',
      'last-modified': 'Tue, 01 Oct 2019 01:02:03 GMT',
    });

    const response = await agent()
      .get(attachmentUrl(SEEK_API_BASE_URL))
      .set('aUtHoRiZaTiOn', 'in')
      .expect(200, '# My CV');

    expect(response.header).toMatchObject({
      'content-disposition': 'attachment; filename="cv.md"',
      'content-length': '7',
      'content-type': 'text/markdown; charset=utf-8',
      'last-modified': 'Tue, 01 Oct 2019 01:02:03 GMT',
    });
  });

  it('proxies a 200 response without headers', async () => {
    nock(SEEK_API_BASE_URL).get('/custom').reply(200, Buffer.from('# My CV'));

    const response = await agent()
      .get(attachmentUrl(SEEK_API_BASE_URL))
      .set('aUtHoRiZaTiOn', 'in')
      .expect(200)
      .expect(Buffer.from('# My CV'));

    expect(response.header).toMatchObject({
      'content-disposition': 'attachment',
      'content-type': 'application/octet-stream',
    });
  });

  it('proxies a 500 response', () => {
    nock(SEEK_API_BASE_URL).get('/custom').reply(500, 'External Server Error');

    return agent()
      .get(attachmentUrl(SEEK_API_BASE_URL))
      .set('aUtHoRiZaTiOn', 'in')
      .expect(500)
      .expect(Buffer.from('External Server Error'));
  });

  it('blocks an SSRF attempt', () =>
    agent()
      .get(attachmentUrl('https://haveibeenpwned.com'))
      .set('aUtHoRiZaTiOn', 'in')
      .expect(400, "Query parameter 'url' must point to the SEEK API"));

  it('blocks a request with the wrong query parameter', () =>
    agent()
      .get('/attachment?uri=x')
      .set('aUtHoRiZaTiOn', 'in')
      .expect(400, "Query parameter 'url' must be a string"));

  it('blocks an unauthorised request', () => {
    getPartnerToken.mockRejectedValue(new Error('Help me'));

    return agent()
      .get(attachmentUrl(SEEK_API_BASE_URL))
      .set('Authorization', 'Email insecure@example.com')
      .expect(401, 'Help me');
  });
});
