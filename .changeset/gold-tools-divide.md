---
'wingman-fe': major
---

**QuestionnaireBuilder:** Remove width constraint

This component no longer bundles its own width constraint. You can wrap it in a standard Braid [ContentBlock](https://seek-oss.github.io/braid-design-system/components/ContentBlock/) to restore the previous behaviour.

```diff
+ import { ContentBlock } from 'braid-design-system';

+ <ContentBlock>
    <QuestionnaireBuilder />
+ </ContentBlock>
```
