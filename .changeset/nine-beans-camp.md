---
'wingman-fe': major
---

**apolloTypePolicies:**: Disable infinite scrolling opinions by default

Our Apollo type policy was imported from an internal repository that consistently uses infinitely scrolled lists to display paginated data. However, this makes a number of assumptions about how the data is used:

1. It assumes that the data should be flipped in reverse pagination so the oldest data appears first. When paginating forwards and backwards using a fixed page size this causes the data to flip when paginating backwards which is unexpected.

2. It expects data to always be appended in the same direction which isn't true for page-based pagination.

This turns `apolloTypePolicies` in to a function that now takes a `paginationPolicy` property. By default this is `conservative` which behaves the same way raw GraphQL queries would. This can be changed to `infinite-scroll` to opt-in to the previous behaviour.
