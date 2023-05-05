import type { RetrieveRequest } from '../getPartnerToken';

export const getPartnerToken = jest.fn<Promise<string>, [RetrieveRequest]>();

export const getSigningSecret = jest.fn<Promise<string | null>, [string]>();
