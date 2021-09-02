---
'wingman-fe': patch
---

**JobCategorySelect, JobCategorySuggest, LocationSuggest:** Rationalise fetch policies

This removes an explicit fetch policy except for the realtime suggestion queries.

This can cause problems if you're not using an appropriate cache policy for the SEEK API.
You can either use our `apolloTypePolicies` or set a default cache policy of `no-fetch` for the `client` you pass to the component.
