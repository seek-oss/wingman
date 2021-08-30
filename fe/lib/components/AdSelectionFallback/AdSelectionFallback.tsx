import { Dropdown } from 'braid-design-system';
import React, { forwardRef, useState } from 'react';

type AdvertisementType = 'Classic' | 'StandOut' | 'Premium';

export interface AdSelectionFallbackProps {
  hideLabel?: boolean;
  id: string;
  onSelect: (type: AdvertisementType) => void;
}

export const AdSelectionFallback = forwardRef<
  HTMLSelectElement,
  AdSelectionFallbackProps
>(({ hideLabel, id, onSelect }, ref) => {
  const [advertisementType, setAdvertisementType] =
    useState<AdvertisementType>();

  return (
    <Dropdown
      aria-label="Ad type"
      id={id}
      label={hideLabel ? undefined : 'Ad type'}
      onChange={(event) => {
        const selection = event.currentTarget.value as AdvertisementType;
        setAdvertisementType(selection);
        onSelect(selection);
      }}
      ref={ref}
      placeholder="Select an ad type"
      value={advertisementType ?? ''}
    >
      <option>Classic</option>
      <option>StandOut</option>
      <option>Premium</option>
    </Dropdown>
  );
});
