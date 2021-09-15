# BrandSelect

A BrandSelect component that provides a paginated selection of brands associated with the specified hirer.

## Installation

```shell
yarn add wingman-fe
```

## Brand Select Widget

The BrandSelect widget abstracts the `advertisementBrandings` query on SEEK API and provides a select input that returns a paginated list of advertisement brandings associated with the specified hirer.
Read more about underlying [`advertisementBrandings` query](https://developer.seek.com/schema/#/query/advertisementBrandings).

### Properties

Required

- `hirerId`: The identifier for the [HiringOrganization](https://developer.seek.com/schema/#/named-type/HiringOrganization).

Optional:

- `client`: An `ApolloClient` instance. By default BrandSelect uses the client passed down via context, but a different client can be passed in.
- `pageSize`: The number of brands per page.

- `initialBrandId`: An initial [AdvertisementBranding identifier] to be selected in the paginated list of brands.

- `onSelect`: Callback function that is supplied an [AdvertisementBranding identifier] when the user selects a brand.

- `showCopyableOid`: A flag to show a "Copy OID" button on each brand tile.
  This is intended for developer use and should not appear in a production job posting flow.

- `onBrandingQueryResponse`: Callback function that is supplied an [AdvertisementBrandingsConnection] on the [advertisementBrandings query] response.
  This can be used to render or log the SEEK API response for debugging.

[advertisementbranding identifier]: https://developer.seek.com/schema/#/named-type/AdvertisementBranding/field/id
[advertisementbrandingsconnection]: https://developer.seek.com/schema/#/named-type/AdvertisementBrandingsConnection
[advertisementbrandings query]: https://developer.seek.com/schema/#/query/advertisementBrandings

### Usage

#### Default usage

```javascript
import { BrandSelect } from 'wingman-fe';

// Higher component in tree wraps children in apollo provider
<BrandSelect hirerId="seekAnz:organization:seek:kLDHs7W7" />;
```

#### Default usage with Apollo Client

```javascript
import { ApolloClient } from '@apollo/client';
import { BrandSelect } from 'wingman-fe';

// cache and link set-up as required

const client = new ApolloClient({
  cache,
  link,
});

<BrandSelect hirerId="seekAnz:organization:seek:kLDHs7W7" client={client} />;
```

#### onSelect callback usage

```javascript
import React, { useState } from 'react';
import { BrandSelect } from 'wingman-fe';

// client set-up as per the previous example

const BrandingForm = () => {
  const [brandingId, setBrandingId] = useState();
  return (
    <div>
      <BrandSelect onSelect={setBrandingId} />
      Your selected branding id is: {brandingId}
    </div>
  );
};
```

#### onBrandingQueryResponse callback usage

```javascript
import React, { useState } from 'react';
import { BrandSelect } from 'wingman-fe';

// client set-up as per the previous example

const BrandingForm = () => {
  const [brandingQueryResponse, setBrandingQueryResponse] = useState();
  return (
    <div>
      <BrandSelect onBrandingQueryResponse={setBrandingQueryResponse} />
      SEEK API Response is: {brandingQueryResponse}
    </div>
  );
};
```

#### react-hook-form (controlled form) usage

```javascript
import { Controller, useForm } from 'react-hook-form';
import { BrandSelect } from 'wingman-fe';

// client set-up as per the previous example

const BrandingForm = () => {
  const { control, handleSubmit, setValue } = useForm();

  const handleFormSubmit = (formData) => {
    // submit logic here
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        control={control}
        name="brandingId"
        render={({ field }) => (
          <BrandSelect
            {...field}
            onSelect={(selectedBrandId) =>
              setValue('brandingId', selectedBrandId)
            }
            hirerId="seekAnz:organization:seek:kLDHs7W7"
          />
        )}
      />
      <button type="submit">Submit branding</button>
    </form>
  );
};
```
