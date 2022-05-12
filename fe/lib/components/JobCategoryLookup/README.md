# JobCategoryLookup

A JobCategory lookup component that returns a job category (parent or child) with an object identifier on lookup.

## Installation

```shell
yarn add wingman-fe
```

## Job Category Lookup Widget

The JobCategoryLookup widget abstracts the `jobCategory` query on SEEK API and provides a text input that returns a SEEK job category.
Read more about underlying [`jobCategory` query](https://developer.seek.com/schema/#/query/jobCategory).

### Properties

Required

- `schemeId`: The scheme for the location dataset to query.

Optional:

- `client`: An `ApolloClient` instance. By default JobCategoryLookup uses the client passed down via context, but a different client can be passed in.

- `debounceDelay`: The delay in milliseconds between job category lookup calls to reduce overhead. Defaults to `250ms`.

- `initialJobCategoryId`: The ID of a job category to look up in the component - for example 'seekAnz:jobCategory:seek:CTriSTrf'. This is useful when looking up an existing entity with a saved job category that has been loaded from a data store.

### Usage

#### Default usage

```javascript
import { JobCategoryLookup } from 'wingman-fe';

// Higher component in tree wraps children in apollo provider
<JobCategoryLookup schemeId="seekAnz" />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from '@apollo/client';
import { JobCategoryLookup } from 'wingman-fe';

// cache and link set-up as required

const client = new ApolloClient({
  cache,
  link,
});

<JobCategoryLookup schemeId="seekAnz" client={client} />;
```
