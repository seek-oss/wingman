export const PORT = '9090';

export const FE_ORIGIN = 'http://dev.seekunifiedbeta.com:8080';

export const USER_AGENT = 'wingman/local';

// Take care when handling your token; it’s easy for environment variables to be
// accessed by other processes, accidentally logged, or persisted to shell
// history. We recommend wiring this up to a secret store like AWS Secrets
// Manager.
export const getPartnerToken = () =>
  Promise.resolve(process.env.DANGEROUS_PLAYGROUND_TOKEN ?? '');
