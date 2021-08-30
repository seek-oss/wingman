import { Dropdown } from 'braid-design-system';
import React, { useState } from 'react';

type AdvertisementType = 'Classic' | 'StandOut' | 'Premium';

interface Props {
  hideLabel?: boolean;
  id: string;
  onSelect: (type: AdvertisementType) => void;
}

export const AdSelectionFallback = ({ hideLabel, id, onSelect }: Props) => {
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
      placeholder="Select an ad type"
      value={advertisementType ?? ''}
    >
      <option>Classic</option>
      <option>StandOut</option>
      <option>Premium</option>
    </Dropdown>
  );
};
