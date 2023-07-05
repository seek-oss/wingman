---
'wingman-fe': major
---

Update Salary Details to query pay types and currencies.

Breaking change:
1. `SalaryDetails` now requires `schemeId` to be passed in.
2. The `onBlur` prop will now return `basisCode` and `intervalCode` for the key `payType` instead of `basis`, `interval` and `payType`

