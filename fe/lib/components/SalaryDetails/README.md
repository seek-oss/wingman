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

- The salary description contains a maximum of 50 characters.
- The minimum pay must be greater than 0.
- The maximum pay must be greater than the minimum pay.

### Usage

```javascript
import React, { useState } from 'react';
import { SalaryDetails } from 'wingman-fe';

const buildRenumerationPackageInput = (renumeration) => ({
  basisCode: renumeration.basisCode,
  ranges: [{
    intervalCode: renumeration.intervalCode,
    minimumAmount: {
      currency: renumeration.currency,
      value: Number(renumeration.minimumAmount),
    },
    maximumAmount: renumeration.maximumAmount ?? {
      currency: renumeration.currency,
      value: Number(renumeration.maximumAmount),
    },
  }],
  descriptions: [renumeration.description],
})

const PostingForm = () => {
  const [renumeration, setRenumeration] = useState({
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
        setRenumeration({
          ...renumeration,
          basisCode: item.salary.code,
          intervalCode: item.salary.interval,
        });
        break;

      case 'minimumAmount':
        setRenumeration({
          ...renumeration,
          minimumAmount: item.amount,
        });
        break;

      case 'maximumAmount':
        setRenumeration({
          ...renumeration,
          maximumAmount: item.amount,
        });
        break;

      case 'description':
        setRenumeration({
          ...renumeration,
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
