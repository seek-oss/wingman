# wingman-be

## 0.1.1

### Patch Changes

- 7a33b92: Add `createBrowserTokenMiddleware`

  Use this middleware to issue a hirer-scoped token for use directly in the browser.
  This is a recommended pattern for partners and we should encourage its use where possible.
  The proxying middleware will be kept around to demo partner-scoped interactions and for rapid prototyping.

## 0.1.0

### Minor Changes

- ef648a2: Initial version
