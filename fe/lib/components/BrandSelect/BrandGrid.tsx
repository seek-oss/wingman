import { Tiles } from 'braid-design-system';
import React from 'react';

import {
  AdvertisementBrandingEdgeFieldsFragment,
  AdvertisementBrandingFieldsFragment,
} from 'src/types/seek.graphql';

import { BrandTile } from './BrandTile';

interface Props {
  edges: AdvertisementBrandingEdgeFieldsFragment[];
  selectedBrandId?: string;
  onSelect?: (selectedBrand: AdvertisementBrandingFieldsFragment) => void;
}

export const BrandGrid = ({ edges, selectedBrandId, onSelect }: Props) => (
  <Tiles columns={[1, 2, 2]} space="small">
    {edges.map(({ node }) => (
      <BrandTile
        key={node.id.value}
        brand={node}
        isSelected={selectedBrandId === node.id.value}
        onSelect={onSelect}
      />
    ))}
  </Tiles>
);
