import { GetPartnerTokenRequest } from '../getPartnerToken';

export const getPartnerToken = jest.fn<
  Promise<string>,
  [GetPartnerTokenRequest]
>();
