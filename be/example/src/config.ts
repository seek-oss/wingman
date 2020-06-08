export const PORT = '9090';

export const FE_ORIGIN = 'http://dev.seekunifiedbeta.com:8080';

export const USER_AGENT = 'wingman/local';

const HARDCODED_HIRER_ID = 'seekAnzPublicTest:organization:seek:93WyyF1h';

/**
 * Take care when handling your token; it’s easy for environment variables to be
 * accessed by other processes, accidentally logged, or persisted to shell
 * history. We recommend wiring this up to a secret store like AWS Secrets
 * Manager.
 */
export const getPartnerToken = () =>
  Promise.resolve(process.env.DANGEROUS_PLAYGROUND_TOKEN ?? '');

export const getPartnerTokenWithHardcodedHirerId = async () => {
  const partnerToken = await getPartnerToken();

  return {
    hirerId: HARDCODED_HIRER_ID,
    partnerToken,
  };
};

/**
 * This ignores signature verification for all incoming webhooks! Don’t do this
 * in production. Store the signing secret against each subscription ID in a
 * secure place that you can look up from your software, such as an encrypted
 * database or secret store.
 */
export const getSigningSecret = () => Promise.resolve(null);
