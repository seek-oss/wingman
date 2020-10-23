import { isObject } from '../../../lib/validation';

import { BE_SEEK_GRAPH_URL } from './constants';

export const querySeekGraph = async (query: string) => {
  const response = await fetch(BE_SEEK_GRAPH_URL, {
    body: JSON.stringify({
      query,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const responseBody = (await response.json()) as unknown;

  if (!(isObject(responseBody) && isObject(responseBody.data))) {
    throw Error('unexpected response from GraphQL server');
  }

  return responseBody.data;
};
