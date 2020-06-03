import { BE_BASE_URL } from './constants';

const webhookUrl = (endpoint: string) => `${BE_BASE_URL}/webhook/${endpoint}`;

/**
 * You wouldn't have this in a real production system, but it's an easy way to
 * seed data for demonstrative purposes without having to deploy a database,
 * public webhook endpoint, etc.
 */
export const postPartnerWebhook = async (data: unknown, endpoint: string) => {
  const response = await fetch(webhookUrl(endpoint), {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  if (response.status === 204) {
    return 'Received a 204!';
  }

  const body = await response.text();

  throw Error(`${response.status} ${response.statusText}: ${body}`);
};
