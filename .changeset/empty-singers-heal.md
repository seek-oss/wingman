---
'wingman-fe': major
---

**QuestionnaireCreateInput:** Remove type

A similar type can be derived via component props:

```typescript
import { ComponentProps } from 'react';
import { QuestionnaireBuilder } from 'wingman-fe';

type Input = ComponentProps<typeof QuestionnaireBuilder>['graphqlInput'];
```
