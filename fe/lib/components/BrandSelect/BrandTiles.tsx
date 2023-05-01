import { Tiles } from 'braid-design-system';
import React from 'react';

import type {
  AdvertisementBrandingEdgeFieldsFragment,
  AdvertisementBrandingFieldsFragment,
} from '../../types/seekApi.graphql';

import { BrandTile } from './BrandTile';

interface Props {
  edges: AdvertisementBrandingEdgeFieldsFragment[];
  selectedBrandId?: string;
  onSelect?: (selectedBrand: AdvertisementBrandingFieldsFragment) => void;
  showCopyableOid?: boolean;
}

export const BrandTiles = ({
  edges,
  selectedBrandId,
  onSelect,
  showCopyableOid,
}: Props) => (
  <Tiles columns={[1, 2, 2]} space="small">
    {edges.map(({ node }) => (
      <BrandTile
        key={node.id.value}
        brand={node}
        isSelected={selectedBrandId === node.id.value}
        onSelect={onSelect}
        showCopyableOid={showCopyableOid}
      />
    ))}
  </Tiles>
);
