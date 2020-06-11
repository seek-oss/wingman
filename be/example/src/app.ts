import '../../src/register';

import Koa from 'koa';

import { middleware } from './api';
import { PORT } from './config';

const app = new Koa().use(middleware);

export = Object.assign(app, {
  port: PORT,
});
