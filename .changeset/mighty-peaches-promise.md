---
'wingman-fe': major
---

**QuestionnaireBuilder:** Add `wrapper` prop

This component no longer renders a [Card](https://seek-oss.github.io/braid-design-system/components/Card/) wrapper around its children by default. This “unwrapped” default state can be useful when nested inside a component that manages its own space, like a [Dialog](https://seek-oss.github.io/braid-design-system/components/Dialog/) or [Drawer](https://seek-oss.github.io/braid-design-system/components/Drawer/).

You can restore the previous behaviour by setting the prop to its built-in `card` preset, though note that this defaults to rounded corners:

```diff
- <QuestionnaireBuilder />
+ <QuestionnaireBuilder wrapper="card" />
```
