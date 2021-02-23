---
'wingman-fe': patch
---

**deps:** `@hookform/resolvers` 1.3.0

Later 1.3.x versions are broken per [react-hook-form/resolvers/issues/107](https://github.com/react-hook-form/resolvers/issues/107). This fixes these mysterious build errors:

```text
ERROR in Cannot use import statement outside a module
```
