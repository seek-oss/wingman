import cors from '@koa/cors';

import { FE_ORIGIN } from '../config';

export const corsMiddleware = cors({
  // Needed for attachment downloads
  exposeHeaders: ['Content-Disposition'],

  // Allow frontend local development server
  origin: FE_ORIGIN,
});
