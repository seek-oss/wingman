export const PORT = '9090';

export const FE_ORIGIN = 'http://dev.seekunifiedbeta.com:8080';

export const USER_AGENT = 'wingman/local';

export const getPartnerToken = () =>
  Promise.resolve(process.env.DANGEROUS_PLAYGROUND_TOKEN ?? '');
