import { GetPartnerTokenRequest } from '../getPartnerToken';

export const getPartnerToken = jest.fn<
  Promise<string>,
  [GetPartnerTokenRequest]
>();

export const getSigningSecret = jest.fn<Promise<string | null>, [string]>();
