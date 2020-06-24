# JobCategorySuggest

A JobCategory suggest component that provides a narrowed down list of SEEK job categories, these are ordered by confidence of suggestion.

Returns a `JobCategorySuggestionChoice` on selection of a suggestion. This includes a SEEK JobCategory with job category object identifier and a floating point confidence score.

## Installation

```shell
$ yarn add wingman-fe
```

## Job Category Suggest Widget

The JobCategorySuggest widget abstracts the `jobCategorySuggestions` query on SEEK API and provides a list of suggested job categories for a position profile input.
Read more about underlying [`jobCategorySuggestions` query](https://developer.seek.com/schema/#operation-jobCategorySuggestions).

### Properties

Required

- `schemeId`: The scheme for the job category dataset to query.
- `positionProfile`: Matches the shape of [`JobCategorySuggestionPositionProfileInput`](https://developer.seek.com/schema/#/definitions/JobCategorySuggestionPositionProfileInput). Including a `positionFormattedDescriptions` with `descriptionId` of `AdvertisementDetails` will increase the accuracy of the suggested job categories.

Optional:

- `client`: An `ApolloClient` instance. By default `JobCategorySuggest` uses the client passed down via context, but a different client can be passed in.
- `debounceDelay`: The delay in milliseconds between job category suggest calls to reduce overhead. Defaults to `250`.
- `onSelect`: Callback function that is supplied a [SEEK JobCategorySuggestionChoice](https://developer.seek.com/schema/#/definitions/JobCategorySuggestionChoice) on job category selection.
- `showConfidence`: Boolean toggle that enables to the associated confidence score of the suggested job category to be displayed on selection. Defaults to `false`.

Extends:

- You may pass through various HTML input field props including: `id`, `name`, `label`

### Usage

#### Default usage

```javascript
import { JobCategorySuggest } from 'wingman-fe';

const positionProfile = {
  positionTitle: "Senior Developer"
}

// Higher component in tree wraps children in apollo provider
<JobCategorySuggest schemeId="seekAnz" positionProfile={positionProfile} />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from 'apollo-client';
import { JobCategorySuggest } from 'wingman-fe';

// cache and link set-up as required
const client = new ApolloClient({
  cache,
  link,
});

// Increasing the accuracy of results by supplying description
const positionProfile = {
  positionTitle: "Senior Developer"
  positionFormattedDescriptions: [
    {
      descriptionId: "AdvertisementDetails",
      content: "TypeScript, React, GraphQL skills required..."
    }
  ]
}

<JobCategorySuggest schemeId="seekAnz" client={client} positionProfile={positionProfile} />;
```

#### onSelect callback usage

```javascript
import React, { useState } from 'react';
import { JobCategorySuggest } from 'wingman-fe';

// client set-up as per the previous example
// position profile input per previous examples

const JobCategoryForm = () => {
  const [jobCategorySuggest, setJobCategorySuggest] = useState();
  return (
    <div>
      <JobCategorySuggest
        schemeId="seekAnz"
        client={client}
        onSelect={jobCategorySuggest}
        positionProfile={positionProfile}
      />
      <p>
        Your selected job category is: {jobCategorySuggest.JobCategory.name}
      </p>
      <p>
        The confidence score of this category is {jobCategorySuggest.confidence}
      </p>
    </div>
  );
};
```

#### react-hook-form (controlled form) usage

```javascript
import { useForm } from 'react-hook-form';
import { JobCategorySuggest } from 'wingman-fe';

// client set-up as per the previous example
// position profile input per previous examples

const JobCategoryForm = () => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    // submit logic here
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(handleFormSubmit)}>
      <JobCategorySuggest
        schemeId="seekAnz"
        client={client}
        id="jobCategorySuggest"
        name="jobCategorySuggest"
        label="Job category"
        positionProfile={positionProfile}
        ref={register({ required: true })}
      />
      <button type="submit">Submit job category</button>
    </form>
  );
};
```
