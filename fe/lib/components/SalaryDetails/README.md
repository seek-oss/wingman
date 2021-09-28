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

- `initialMinimumPay`: A default value for the minimum pay.
- `initialMaximumPay`: A default value for the maximum pay.
- `initialSalaryType`: A default value for the salary type.
- `initialSalaryDescription`: A default value for the salary description.
- `errors`: An object of errors mapping to either `salaryType`, `minimumPay`, `maximumPay` or `salaryDescription` that contain an error message.

### Validation

The Salary Details component has some basic UI validation rules:

- The salary description contains a maximum of 50 characters.
- The minimum pay must be greater than 0.
- The maximum pay must be greater than the minimum pay.

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
