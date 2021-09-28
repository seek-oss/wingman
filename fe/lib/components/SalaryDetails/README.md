# SalaryDetails

A Salary Details component that contains information on the pay type, range and description.

## Installation

```shell
$ yarn add wingman-fe
```

### Properties

Required:

- `currency`: The currency that the job ad will be posted with.
- `onBlur`: The callback to handle completed input fields.

Optional:

- `initialMinimumPay`: A default value to initially render for the minimum pay.
- `initialMaximumPay`: A default value to initially render for the maximum pay.
- `initialSalaryType`: A default value to initially render for the salary type.
- `initialSalaryDescription`: A default value to initially render for the salary description.
- `errors`: An object of errors mapping to either `salaryType`, `minimumPay`, `maximumPay` or `salaryDescription` that contain an error message.

### Validation

The Salary Details component has some very light validation on the maximum character limit associated with the pay description.
It will render an error message if the field exceeds the maximuim character limit.

### Usage

```javascript
import React, { useState } from 'react';
import { SpecifiedPersonForm } from 'wingman-fe';

const PostingForm = () => {
  const [jobAd, setJobAd] = useState();

  const onBlur = (item) => {
    switch (item.key) {
      case 'salaryType':
        setJobAd({ ...jobAd, [item.key]: item.type })
        return;
      case 'minimumPay':
        setJobAd({ ...jobAd, [item.key]: item.amount })
        return;
      case 'maximumPay':
        setJobAd({ ...jobAd, [item.key]: item.amount })
        return;
      case 'salaryDescription':
        setJobAd({ ...jobAd, [item.key]: item.description })
        return;
    }
  }

  return (
    <div>
      <SalaryDetails currency="AUD" onBlur={onBlur}>
    </div>
  );
};
```
