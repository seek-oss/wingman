---
'wingman-be': minor
---

**createBrowserTokenMiddleware:** Add `acceptedScopes` browser token option

This allows the backend to filter out the scopes it will request from the SEEK API.
If this option isn't specified then the existing behaviour of accepting all scopes is preserved.
