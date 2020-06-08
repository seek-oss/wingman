export const VALID_BROWSER_TOKEN_RESPONSE = {
  access_token: 'hunter2',
  expires_in: 60,
  token_type: 'Bearer',
} as const;

export const INVALID_BROWSER_TOKEN_RESPONSE = {
  ...VALID_BROWSER_TOKEN_RESPONSE,
  token_type: 'Basic',
};

export const VALID_HIRER_ID = 'seekAnzPublicTest:organization:seek:93WyyF1h';
