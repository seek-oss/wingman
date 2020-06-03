import { BE_BASE_URL } from './constants';

export const proxyDownloadLink = (url: string) =>
  `${BE_BASE_URL}/attachment?url=${encodeURIComponent(url)}`;
