import { createContext } from './context';

describe('createContext', () => {
  it.each([
    [
      'extracts accept-language header',
      {
        request: {
          header: {
            authorization: 'Bearer in',
            'accept-language': 'EN',
          },
        },
      },
      {
        authorization: 'Bearer in',
        'accept-language': 'EN',
      },
    ],
    [
      'extracts a sole authorization header',
      {
        request: {
          header: {
            authorization: 'Bearer in',
          },
        },
      },
      {
        authorization: 'Bearer in',
      },
    ],
    [
      'extracts an authorization header while ignoring other cruft',
      {
        request: {
          header: {
            authorization: 'Bearer in',
            'user-agent': 'my-service/1.2.3',
          },
        },
        response: {
          status: 404,
        },
      },
      {
        authorization: 'Bearer in',
      },
    ],
    [
      'ignores another header',
      {
        request: {
          header: {
            'user-agent': 'my-service/1.2.3',
          },
        },
      },
      {},
    ],
    ['ignores an empty object', {}, {}],
    ['ignores undefined', undefined, {}],
  ] as const)('%s', (_, input, output) =>
    expect(createContext(input)).toEqual(output),
  );
});
