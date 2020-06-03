import { GetPartnerToken } from '../getPartnerToken';

export interface SeekGraphMiddlewareOptions {
  debug: boolean;
  getPartnerToken: GetPartnerToken;
  path: string;
  userAgent: string;
}
