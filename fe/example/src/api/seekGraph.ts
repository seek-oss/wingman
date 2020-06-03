import { BE_SEEK_GRAPH_URL } from './constants';

const isRecord = (value: unknown): value is Record<PropertyKey, unknown> =>
  typeof value === 'object' && value !== null;

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

  const responseBody: unknown = await response.json();

  if (!(isRecord(responseBody) && isRecord(responseBody.data))) {
    throw Error('unexpected response from GraphQL server');
  }

  return responseBody.data;
};
