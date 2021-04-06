# JobCategorySelect

A JobCategory select component that provides a full list of parent and child job categories for SEEK.
Returns a JobCategory (parent or child) with object identifier on category selection.

## Installation

```shell
$ yarn add wingman-fe
```

## Job Category Select Widget

The JobCategorySelect widget abstracts the `jobCategories` query on SEEK API and provides a select input that returns a SEEK JobCategory.
Read more about underlying [`jobCategories` query](https://developer.seek.com/schema/#operation-jobCategories).

### Properties

Required

- `schemeId`: The scheme for the job category dataset to query.

Optional:

- `client`: An `ApolloClient` instance. By default JobCategorySelect uses the client passed down via context, but a different client can be passed in.
- `onSelect`: Callback function that is supplied a [SEEK JobCategory](https://developer.seek.com/schema/#definition-JobCategory) on job category selection.

Extends:

- You may pass through various HTML input field props including: `id`, `name`, `label`

### Usage

#### Default usage

```javascript
import { JobCategorySelect } from 'wingman-fe';

// Higher component in tree wraps children in apollo provider
<JobCategorySelect schemeId="seekAnz" />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from '@apollo/client';
import { JobCategorySelect } from 'wingman-fe';

// cache and link set-up as required

const client = new ApolloClient({
  cache,
  link,
});

<JobCategorySelect schemeId="seekAnz" client={client} />;
```

#### onSelect callback usage

```javascript
import React, { useState } from 'react';
import { JobCategorySelect } from 'wingman-fe';

// client set-up as per the previous example

const JobCategoryForm = () => {
  const [jobCategory, setJobCategory] = useState();
  return (
    <div>
      <JobCategorySelect
        schemeId="seekAnz"
        client={client}
        onSelect={setJobCategory}
      />
      Your selected job category is: {jobCategory.name}
    </div>
  );
};
```

#### react-hook-form (controlled form) usage

```javascript
import { useForm } from 'react-hook-form';
import { JobCategorySelect } from 'wingman-fe';

// client set-up as per the previous example

const JobCategoryForm = () => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    // submit logic here
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(handleFormSubmit)}>
      <JobCategorySelect
        schemeId="seekAnz"
        client={client}
        id="jobCategorySelect"
        label="Job category"
        {...register('jobCategorySelect', { required: true })}
      />
      <button type="submit">Submit job category</button>
    </form>
  );
};
```
