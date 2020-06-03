import { Headers } from 'node-fetch';

import { filterHeaders } from './headers';

describe('filterHeaders', () => {
  it.each([
    [
      'adds defaults on empty input',
      new Headers(),
      {
        'Content-Disposition': 'attachment',
        'Content-Type': 'application/octet-stream',
      },
    ],
    [
      'drops other input headers',
      new Headers({
        'User-Agent': 'my-service/1.2.3',
        'X-Deprecate-X': 'foo',
      }),
      {
        'Content-Disposition': 'attachment',
        'Content-Type': 'application/octet-stream',
      },
    ],
    [
      'overrides defaults with input headers',
      new Headers({
        'Content-Disposition': 'attachment; filename="cool.html"',
        'content-length': '123',
        'cOnTeNt-TyPe': 'text/html; charset=utf-8',
        'LAST-MODIFIED': 'Wed, 21 Oct 2015 07:28:00 GMT',
      }),
      {
        'Content-Disposition': 'attachment; filename="cool.html"',
        'Content-Length': '123',
        'Content-Type': 'text/html; charset=utf-8',
        'Last-Modified': 'Wed, 21 Oct 2015 07:28:00 GMT',
      },
    ],
  ] as const)('%s', (_, input, output) =>
    expect(filterHeaders(input)).toEqual(output),
  );
});
