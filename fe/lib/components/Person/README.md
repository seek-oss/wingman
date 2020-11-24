# SpecifiedPersonForm

A specified person form component that provides hiring manager or recruiter details to SEEK.
Returns a `SpecifiedPersonInput` for e.g the `createPositionOpening` and `createCandidateProcessHistoryItem` mutations.

## Installation

```shell
$ yarn add wingman-fe
```

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
