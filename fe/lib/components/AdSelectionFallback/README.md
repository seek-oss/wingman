# AdSelectionFallback

A fallback component that allows a hirer to select an advertisement type when the Ad Selection Panel errors or times out.
Returns a [`CreatePostingInstruction.includeseekAnzAdvertisementType`] that can be supplied to a [SEEK API posting mutation].

See [Ad Selection Panel › Fallback] on the Developer Site for more details.

## Installation

```shell
$ yarn add wingman-fe
```

### Properties

Required

- `id`: The unique [`id` global attribute] of the input element in the HTML document.
- `onSelect`: The callback to handle the selected advertisement type.

### Usage

```tsx
import React, { useState } from 'react';
import { AdSelectionFallback } from 'wingman-fe';

const AdSelection = ({ onSelect }: Props) => {
  if (fallback) {
    return (
      <AdSelectionFallback id="seek-advertisement-type" onSelect={onSelect} />
    );
  }

  return (
    // Imagine this is defined elsewhere.
    <AdSelectionPanel id="seek-advertisement-type" onSelect={onSelect} />
  );
};
```

[`createpostinginstruction.includeseekanzadvertisementtype`]: https://developer.seek.com/schema/#/named-type/CreatePostingInstructionInput/field/seekAnzAdvertisementType
[`id` global attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
[ad selection panel › fallback]: https://developer.seek.com/use-cases/job-posting/ad-selection/panel#fallback
[seek api posting mutation]: https://developer.seek.com/use-cases/job-posting/managing-job-ads/posting-a-job-ad
