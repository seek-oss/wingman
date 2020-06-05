import '../../src/register';

import { RequestListener } from 'http';

import Koa from 'koa';

import { createMiddleware } from './api';
import { PORT } from './config';

const createApp = async () => {
  const middleware = await createMiddleware();

  return new Koa().use(middleware);
};

const wrapAsyncApp = (appPromise: Promise<Koa>) => {
  const callbackPromise = appPromise.then((app) => app.callback());

  return {
    callback: (): RequestListener => (req, res) =>
      callbackPromise.then((callback) => callback(req, res)),

    listen: (port?: number, listeningListener?: () => void) =>
      appPromise.then((app) => app.listen(port, listeningListener)),

    port: PORT,
  };
};

const app = createApp();

export = wrapAsyncApp(app);
