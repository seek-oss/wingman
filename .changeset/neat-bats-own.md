---
'wingman-fe': patch
---

**JobCategorySuggest:** Don't rerender on no-op props changes

This avoids re-querying the SEEK API and re-displaying suggestions unless there's a meaningful change to our props.
