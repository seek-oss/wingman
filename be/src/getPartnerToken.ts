/**
 * Function that verifies that the incoming request is authorised to act on
 * behalf of a partner and provides a partner token in response.
 */
export type GetPartnerToken = (
  request: GetPartnerTokenRequest,
) => Promise<string>;

export interface GetPartnerTokenRequest {
  authorization?: string;
}
