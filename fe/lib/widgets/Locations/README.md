# Locations

Locations includes the following widgets:

- `LocationSuggest`: A Location autocomplete component that can match on full words and substrings resolving a SEEK location. Returns a Location object identifier on select.

## Installation

```shell
$ yarn add wingman-fe
```

## Location Suggest Widget

The Location suggest widget abstracts the `locationSuggestions` query on SEEK API and provides an autosuggest input that returns a SEEK location. Read more about underlying [`locationSuggestions` query](https://developer.seek.com/schema/#operation-locationSuggestions).

### Properties

Required

- `client`: An ApolloClient instance.
- `schemeId`: The scheme for the location dataset to query.

Optional:

- `usageTypeCode`: The context that the location suggestions will be used for. Defaults to `PositionPosting`.
- `hirerId`: The hirer identifier for relevant locations result.
- `first`: A non-negative limit to the number of locations to return.
- `debounceDelay`: The delay in milliseconds between location suggest calls to reduce overhead. Defaults to `250`.
- `onSelect`: Callback function that is supplied a [SEEK location](https://developer.seek.com/schema/#definition-Location) on auto suggest selection.

Extends:

- You may pass through various HTML input field props including: `id`, `name`, `label`

### Usage

#### Default usage

```javascript
import { ApolloClient } from 'apollo-client';
import { LocationSuggest } from 'wingman-fe';

// cache and link set-up as required

const client = new ApolloClient({
  cache,
  link,
});

<LocationSuggest schemeId="seekAnz" client={client} />;
```

#### onSelect callback usage

```javascript
import React, { useState } from 'react';
import { LocationSuggest } from 'wingman-fe';

// client set-up as per rpevious example

const LocationForm = () => {
  const [location, setLocation] = useState();
  return (
    <div>
      <LocationSuggest
        schemeId="seekAnz"
        client={client}
        onSelect={setLocation}
      />
      Your selected location is: {location.name}
    </div>
  );
};
```

#### react-hook-form (controlled form) usage

```javascript
import { useForm } from 'react-hook-form';
import { LocationSuggest } from 'wingman-fe';

// client set-up as per rpevious example

const LocationForm = () => {
  const { register, setValue, handleSubmit } = useForm();

  const handleLocationSubmit = formData => {
    // Logic here
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(handleLocationSubmit)}>
      <LocationSuggest
        schemeId="seekAnz"
        client={client}
        onSelect={setLocation}
        id="categorySuggestLocation"
        name="categorySuggestLocation"
        label="Job location"
        ref={register({ required: true })}
      />
      <button type="submit">Submit Location</button>
    </form>
  );
};
```
