---
'wingman-fe': minor
---

**QuestionnaireCreateInput:** Remove export

A similar type can be derived from component props:

```typescript
import {ComponentProps} from 'react';

type Input = ComponentProps<typeof QuestionnaireBuilder>['graphqlInput']
```
