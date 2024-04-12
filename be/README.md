# 🛩 Wingman B.E.

[![npm package](https://img.shields.io/npm/v/wingman-be)](https://www.npmjs.com/package/wingman-be)

## Disclaimer

While we publish Wingman components as packages on the public npm registry,
they are not considered part of the public SEEK API and we don’t recommend their use in third-party production systems. We recommend its use for inspiration only. [Read more](/README.md#disclaimers).

## Example API

### /browser-token

Provide a hirer-scoped browser token to the Wingman F.E.

```http
POST http://localhost:9090/browser-token HTTP/1.1
Authorization: ...
Content-Type: application/json

{
  "hirerId": "seekAnzPublicTest:organization:seek:93WyyF1h",
  "scope": "query:locations"
}
```

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "authorization": "Bearer ey...",
  "expiry": "1970-01-01T00:00:00.000Z"
}
```

### /seek-graphql

Proxy requests from the Wingman F.E. to the SEEK API’s GraphQL endpoint.

```http
POST http://localhost:9090/seek-graphql HTTP/1.1
Authorization: ...
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

Handle incoming webhooks from the SEEK API.

```http
POST http://localhost:9090/webhook/abc HTTP/1.1
Content-Type: application/json
Seek-Signature: ...

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

## `createBrowserTokenMiddleware`

```typescript
import { GetPartnerToken, createBrowserTokenMiddleware } from 'wingman-be';

const getPartnerToken: GetPartnerToken<{
  hirerId: string;
  partnerToken: string;
}> = async (request) => {
  if (request.authorization !== 'SUPER_SECRET') {
    throw new Error('oh no!');
  }

  const partnerToken = await getPartnerTokenFromSecretStore();

  return {
    hirerId: 'seekAnzPublicTest:organization:seek:93WyyF1h',
    partnerToken,
  };
};

const createApp = () => {
  const middleware = createBrowserTokenMiddleware({
    getPartnerToken,
    userAgent: 'my-service/1.2.3',
  });

  return new Koa().use(middleware);
};
```

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
  const middleware = createPartnerWebhookMiddleware({
    getSigningSecret,
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
