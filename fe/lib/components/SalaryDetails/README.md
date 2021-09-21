# SalaryDetails

Add details here

## Installation

```shell
$ yarn add wingman-fe
```

### Properties

Required

- `onChange`: The callback to handle the completed specified person input. // make this onBlur basically (prevents spamming handlers)

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
