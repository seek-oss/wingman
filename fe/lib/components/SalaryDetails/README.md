# SalaryDetails

A Salary Details component that contains information on the salary type, range and description.

## Installation

```shell
$ yarn add wingman-fe
```

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
  descriptions: remuneration.description ? [remuneration.description] : [],
})

const PostingForm = () => {
  const [remuneration, setRemuneration] = useState({
    basisCode: 'Hourly',
    currency: 'AUD',
    description: '',
    intervalCode: 'Hour',
    maximumAmount: null,
    minimumAmount: '',
  });

  const onBlur = (item) => {
    switch (item.key) {
      case 'payType':
        setRemuneration({
          ...remuneration,
          basisCode: item.basisCode,
          intervalCode: item.intervalCode,
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

      case 'currency':
        setRemuneration({
          ...remuneration,
          currency: item.currency,
        });
        break;
    }
  }

  return (
    <div>
      <SalaryDetails initialCurrency="AUD" onBlur={onBlur} schemeId="seekAnz">
    </div>
  );
};
```
