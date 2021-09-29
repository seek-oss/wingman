# SalaryDetails

A Salary Details component that contains information on the salary type, range and description.

## Installation

```shell
$ yarn add wingman-fe
```

### Properties

Required:

- `currency`: The currency that the job ad will be posted with.
- `onBlur`: The callback to handle completed input fields.

Optional:

- `initialMinimumAmount`: A default value for the minimum pay.
- `initialMaximumAmount`: A default value for the maximum pay.
- `initialBasisCode`: A default value for the salary type.
- `initialDescription`: A default value for the salary description.
- `errors`: An object of errors mapping to either `basisCode`, `minimumAmount`, `maximumAmount` or `description` that contain an error message.

### Validation

The Salary Details component has some basic UI validation rules:

- The minimum pay must be greater than 0.
- The maximum pay must be greater than the minimum pay.

### Usage

```javascript
import React, { useState } from 'react';
import { SalaryDetails } from 'wingman-fe';

const buildRemunerationPackageInput = (remuneration) => ({
  basisCode: remuneration.basisCode,
  ranges: [{
    intervalCode: remuneration.intervalCode,
    minimumAmount: {
      currency: remuneration.currency,
      value: Number(remuneration.minimumAmount),
    },
    maximumAmount: remuneration.maximumAmount ?? {
      currency: remuneration.currency,
      value: Number(remuneration.maximumAmount),
    },
  }],
  descriptions: [remuneration.description],
})

const PostingForm = () => {
  const [remuneration, setRemuneration] = useState({
    basisCode: '',
    currency: 'AUD',
    intervalCode: '',
    minimumAmount: '',
    maximumAmount: null,
    description: '',
  });

  const onBlur = (item) => {
    switch (item.key) {
      case 'basisCode':
        setRemuneration({
          ...remuneration,
          basisCode: item.salary.code,
          intervalCode: item.salary.interval,
        });
        break;

      case 'minimumAmount':
        setRemuneration({
          ...remuneration,
          minimumAmount: item.amount,
        });
        break;

      case 'maximumAmount':
        setRemuneration({
          ...remuneration,
          maximumAmount: item.amount,
        });
        break;

      case 'description':
        setRemuneration({
          ...remuneration,
          description: item.description,
        });
        break;
    }
  }

  return (
    <div>
      <SalaryDetails currency="AUD" onBlur={onBlur}>
    </div>
  );
};
```
