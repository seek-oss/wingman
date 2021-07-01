---
'wingman-fe': minor
---

**JobCategorySelect**: Provide job category node type

Job posting in ANZ requires a child category for both pricing & posting.

Pass back the category node type (`parent` or `child`) so we can
validate we have the right type of category. For example, we could block
posting until the user has selected a `child`.
