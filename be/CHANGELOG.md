# wingman-be

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
