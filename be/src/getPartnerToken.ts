import { Context } from 'koa';

/**
 * Function that verifies that the incoming request is authorised to act on
 * behalf of a partner and provides a partner token in response.
 */
export type GetPartnerToken<T = string> = (
  request: RetrieveRequest,
) => Promise<T>;

export interface RetrieveRequest {
  authorization?: string;
}

export const wrapRetriever = async <T>(
  ctx: Context,
  retrieve: (request: RetrieveRequest) => Promise<T>,
): Promise<T> => {
  const request = {
    authorization: ctx.get('Authorization') || undefined,
  };

  try {
    return await retrieve(request);
  } catch (err) {
    // This is a bit of a hack. Consider either exposing the full Koa context to
    // the retriever function, or standardising error behaviour so that we don’t
    // handle unexpected errors and expose internal workings to the client.
    return ctx.throw(401, err instanceof Error ? err : String(err));
  }
};
