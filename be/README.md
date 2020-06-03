# 🛩 Wingman B.E.

## Example API

### /attachment

```http
GET http://localhost:9090/attachment?url=xxx HTTP/1.1
```

```http
HTTP/1.1 200 OK
Content-Type: text/plain

# My CV
```

### /seek-graphql

```http
POST http://localhost:9090/seek-graphql HTTP/1.1
Content-Type: application/json

{
  "query": "{ version }"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "data": {
    "version": "123"
  }
}
```

### /webhook

```http
POST http://localhost:9090/webhook/abc HTTP/1.1
Content-Type: application/json

{
  "events": [
    {
      "createDateTime": "foo",
      "id": "foo",
      "type": "CandidateApplicationCreated",
      "candidateApplicationProfileId": "foo",
      "candidateId": "foo"
    }
  ],
  "subscriptionId": "foo"
}
```

```http
HTTP/1.1 204 OK
```

## Node.js API

## `createPartnerWebhookMiddleware`

```typescript
import { GetSigningSecret, createPartnerWebhookMiddleware } from 'wingman-be';

const getSigningSecret: GetSigningSecret = (subscriptionId) => {
  switch (subscriptionId) {
    case 'fully seekret':
      return getSigningSecretFromSecretStore();
    case 'risky business':
      return null;
    default:
      throw new Error('Invalid request');
  }
};

const createApp = () => {
  const middleware = createSeekAttachmentMiddleware({
    getSigningSecret,
  });

  return new Koa().use(middleware);
};
```

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
