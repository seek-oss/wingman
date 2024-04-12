# SpecifiedPersonForm

A specified person form component that provides hiring manager or recruiter details to SEEK.
Returns a `SpecifiedPersonInput` for e.g the `createPositionOpening` and `createCandidateProcessHistoryItem` mutations.

## Disclaimer

While we publish Wingman components as packages on the public npm registry,
they are not considered part of the public SEEK API and we don’t recommend their use in third-party production systems. We recommend its use for inspiration only. [Read more](/README.md#disclaimers).

### Properties

Required

- `onCreate`: The callback to handle the completed specified person input.

### Usage

```javascript
import React, { useState } from 'react';
import { SpecifiedPersonForm } from 'wingman-fe';

const AddSpecifiedPersonForm = () => {
  const [person, setPerson] = useState();
  return (
    <div>
      <SpecifiedPersonForm onCreate={setPerson} />
      Your {person.roleCode}'s name is {jobCategory.name}
    </div>
  );
};
```
