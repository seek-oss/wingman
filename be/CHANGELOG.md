# wingman-be

## 0.4.4

### Patch Changes

- **deps:** lru-cache ^7.14.0 ([#830](https://github.com/seek-oss/wingman/pull/830))

## 0.4.3

### Patch Changes

- **deps:** seek-koala ^6.0.0 ([#788](https://github.com/seek-oss/wingman/pull/788))

## 0.4.2

### Patch Changes

- GraphQL 16 ([#699](https://github.com/seek-oss/wingman/pull/699))

## 0.4.1

### Patch Changes

- eed480d: Properly pipe through `seekApiUrlOverride`

## 0.4.0

### Minor Changes

- 1343b31: **middleware**: Support overriding SEEK API URLs

  This is to support resurrecting some of SEEK's internal staging environment.
  External consumers should be able to ignore this.

## 0.3.0

### Minor Changes

- 021699f: **deps:** Apollo Server 3

  See the [Migrating to Apollo Server 3](https://www.apollographql.com/docs/apollo-server/migration) guide for more information.

## 0.2.6

### Patch Changes

- 6841ee0: **deps:** runtypes ^6.3.0

## 0.2.5

### Patch Changes

- 730b9c6: **deps:** runtypes ^5.2.0

## 0.2.4

### Patch Changes

- 26c015c: **deps:** seek-koala ^5.0.0

## 0.2.3

### Patch Changes

- c31f24b: refactor(JobCategorySuggest): switch to JobCategory ID for radio group

## 0.2.2

### Patch Changes

- 552529c: Release updated package.json with correct main file path

## 0.2.1

### Patch Changes

- fda1d1e: Add repository info to package.json files

## 0.2.0

### Minor Changes

- 5bc3a0d: **BREAKING:** Remove `createSeekAttachmentMiddleware`

  This has been superseded by the browser token flow.
  See `createBrowserTokenMiddleware` and the associated [/fe/example](/fe/example) code.

## 0.1.3

### Patch Changes

- 5738714: Point back to graphql.seek.com for browser tokens

## 0.1.2

### Patch Changes

- b516115: Disable Apollo Server subscriptions
- 11137b6: **BREAKING:** Handle browser tokens better

  - Pass through OAuth access token format in backend
  - Cache tokens by scope

- aef0405: Apply fixes to browser token middleware

  The middleware now points to the browser token playground URL,
  and accepts a `callback` for debugging/logging.

## 0.1.1

### Patch Changes

- 7a33b92: Add `createBrowserTokenMiddleware`

  Use this middleware to issue a hirer-scoped token for use directly in the browser.
  This is a recommended pattern for partners and we should encourage its use where possible.
  The proxying middleware will be kept around to demo partner-scoped interactions and for rapid prototyping.

## 0.1.0

### Minor Changes

- ef648a2: Initial version
