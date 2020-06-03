# 🛩 Wingman B.E.

## Node.js API

### `createSeekAttachmentMiddleware`

```typescript
import { GetPartnerToken, createSeekAttachmentMiddleware } from 'wingman-be';

const getPartnerToken: GetPartnerToken = (request) => {
  if (request.authorization !== 'SUPER_SECRET') {
    throw new Error('oh no!');
  }

  return getPartnerTokenFromSecretStore();
};

const createApp = () => {
  const middleware = createSeekAttachmentMiddleware({
    getPartnerToken,
    userAgent: 'my-service/1.2.3',
  });

  return new Koa().use(middleware);
};
```

### `createSeekGraphMiddleware`

```typescript
import {
  AuthenticationError,
  GetPartnerToken,
  createSeekGraphMiddleware,
} from 'wingman-be';

const getPartnerToken: GetPartnerToken = (request) => {
  if (request.authorization !== 'SUPER_SECRET') {
    throw new AuthenticationError('oh no!');
  }

  return getPartnerTokenFromSecretStore();
};

const createApp = async () => {
  const middleware = await createSeekGraphMiddleware({
    debug: false,
    getPartnerToken,
    path: '/seek-graphql',
    userAgent: 'my-service/1.2.3',
  });

  return new Koa().use(middleware);
};
```
