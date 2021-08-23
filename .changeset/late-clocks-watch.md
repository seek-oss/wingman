---
'wingman-fe': major
---

**QuestionnaireBuilder:** Remove Braid reset

This component no longer imports the [Braid reset](https://github.com/seek-oss/braid-design-system#setup) itself, which was unintended behaviour. You should be importing this before [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider) in your app:

```diff
+ import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
```
