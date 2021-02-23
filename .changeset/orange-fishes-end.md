---
'wingman-fe': patch
---

**deps:** Drop `@hookform/resolvers`, `@types/yup`, `yup`

`@hookform/resolvers` has broken imports and types on the latest channel. We can save some heartache and bytes by replacing all of these dependencies with around 20 lines of code. This fixes these mysterious build errors:

```text
ERROR in Cannot use import statement outside a module
```
