---
'wingman-be': patch
---

Add `createBrowserTokenMiddleware`

Use this middleware to issue a hirer-scoped token for use directly in the browser.
This is a recommended pattern for partners and we should encourage its use where possible.
The proxying middleware will be kept around to demo partner-scoped interactions and for rapid prototyping.
