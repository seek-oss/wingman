/**
 * Function that verifies that the incoming request is authorised to act on
 * behalf of a partner and provides a partner token in response.
 */
export type GetPartnerToken = (
  context: SeekGraphContext,
) => Promise<string | undefined>;

export interface SeekGraphContext {
  authorization?: string;
}

export interface SeekGraphMiddlewareOptions {
  debug: boolean;
  getPartnerToken: GetPartnerToken;
  path: string;
  userAgent: string;
}
