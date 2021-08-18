# LocationSuggest

A Location component that can match on full words and substrings or detect the device's current location to resolve a SEEK location. Returns a Location with object identifier on location selection.

## Installation

```shell
yarn add wingman-fe
```

## Location Suggest Widget

### Autosuggest

The Location suggest widget abstracts the `locationSuggestions` query on SEEK API and provides an autosuggest input that returns a SEEK location. Read more about underlying [`locationSuggestions` query](https://developer.seek.com/schema/#operation-locationSuggestions).

### Location Detection

The Location suggest widget abstracts the `nearestLocations` query on SEEK API to resolve a SEEK location using the device's current location. Read more about underlying [`nearestLocations` query](https://developer.seek.com/schema/#operation-nearestLocations).

### Properties

Required

- `schemeId`: The scheme for the location dataset to query.

Optional:

- `client`: An `ApolloClient` instance. By default locationSuggest uses the client passed down via context, but a different client can be passed in.
- `usageTypeCode`: The context that the location suggestions will be used for. Defaults to `PositionPosting`.
- `hirerId`: The hirer identifier; enables tailored suggestions.
- `first`: A non-negative limit to the number of locations to return.
- `debounceDelay`: The delay in milliseconds between location suggest calls to reduce overhead. Defaults to `250`.
- `onSelect`: Callback function that is supplied a [SEEK location](https://developer.seek.com/schema/#definition-Location) on auto suggest selection.

Extends:

- You may pass through various HTML input field props including: `id`, `name`, `label`

### Usage

#### Default usage

```javascript
import { LocationSuggest } from 'wingman-fe';
import { useApolloClient } from '@apollo/client';

const client = useApolloClient();

// Higher component in tree wraps children in apollo provider
<LocationSuggest schemeId="seekAnz" client={client} />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from '@apollo/client';
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

// client set-up as per the previous example

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
import { Controller, useForm } from 'react-hook-form';
import { LocationSuggest } from 'wingman-fe';

// client set-up as per the previous example

const LocationForm = () => {
  const { control, handleSubmit, setValue } = useForm();

  const handleLocationSubmit = (formData) => {
    // submit logic here
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(handleLocationSubmit)}>
      <Controller
        control={control}
        name="locationSuggest"
        render={({ field }) => (
          <LocationSuggest
            {...field}
            client={client}
            id="locationSuggest"
            label="Job location"
            onSelect={(location) =>
              location &&
              setValue('locationId', location.id.value, {
                shouldValidate: true,
              })
            }
            schemeId="seekAnz"
          />
        )}
        rules={{ required: true }}
      />
      <button type="submit">Submit Location</button>
    </form>
  );
};
```
