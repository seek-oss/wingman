# LocationLookup

A Location lookup component that returns a location (parent or child) with an object identifier on lookup.

## Installation

```shell
yarn add wingman-fe
```

## Location Lookup Widget

The LocationLookup widget abstracts the `location` query on SEEK API and provides a select input that returns a SEEK location.
Read more about underlying [`location` query](https://developer.seek.com/schema/#/query/location).

### Properties

Required

- `schemeId`: The scheme for the location dataset to query.

Optional:

- `client`: An `ApolloClient` instance. By default LocationLookup uses the client passed down via context, but a different client can be passed in.

- `debounceDelay`: The delay in milliseconds between location lookup calls to reduce overhead. Defaults to `250ms`.

- `initialLocationId`: The ID of a location to look up in the component - for example 'seekAnz:location:seek:2FqwWaaMV'. This is useful when looking up an existing entity with a saved location that has been loaded from a data store.

### Usage

#### Default usage

```javascript
import { LocationLookup } from 'wingman-fe';

// Higher component in tree wraps children in apollo provider
<LocationLookup schemeId="seekAnz" />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from '@apollo/client';
import { LocationLookup } from 'wingman-fe';

// cache and link set-up as required

const client = new ApolloClient({
  cache,
  link,
});

<LocationLookup schemeId="seekAnz" client={client} />;
```
