---
'wingman-fe': patch
---

**apolloTypePolicies:** Fix `webhookRequestsForSubscription` type policy

This was not including the `subscriptionId` as a key which would cause request pages to be cached cross-subscription.
