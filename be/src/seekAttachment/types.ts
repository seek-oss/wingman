import { Context } from 'koa';

import { GetPartnerToken } from '../getPartnerToken';

export type SeekAttachmentEvent = {
  type: 'RETRIEVED';
  status: number;
  url: string;
};

export interface SeekAttachmentMiddlewareOptions {
  callback?: (ctx: Context, event: SeekAttachmentEvent) => void | Promise<void>;
  getPartnerToken: GetPartnerToken;
  userAgent: string;
}
