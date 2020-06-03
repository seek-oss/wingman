const BE_BASE_URL = 'http://localhost:9090';

export const proxyDownloadLink = (url: string) =>
  `${BE_BASE_URL}/attachment?url=${encodeURIComponent(url)}`;
