import { stopServer } from './app';

describe('app', () => {
  it('can be stopped', () => expect(stopServer()).resolves.toBeUndefined());
});
