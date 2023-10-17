import type { GetPartnerToken } from '../getPartnerToken';

export interface SeekGraphMiddlewareOptions {
  debug: boolean;
  getPartnerToken: GetPartnerToken;
  userAgent: string;

  /**
   * Override for the SEEK API GraphQL endpoint
   *
   * This is used by SEEK for internal testing. External consumers should omit
   * this option.
   */
  seekApiUrlOverride?: string;
}
