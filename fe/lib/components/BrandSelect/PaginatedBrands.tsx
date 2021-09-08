import { Notice, Text } from 'braid-design-system';
import React from 'react';
import { SmartTextLink } from 'scoobie';

import {
  ConnectionPagination,
  OnClickHandler,
} from '../../private/ConnectionPagination';
import {
  AdvertisementBrandingFieldsFragment,
  AdvertisementBrandingsQuery,
} from '../../types/seekApi.graphql';

import { BrandTiles } from './BrandTiles';

interface Props {
  data: AdvertisementBrandingsQuery | undefined;
  pageSize: number;
  selectedBrandId?: string;
  onPagination: OnClickHandler;
  onSelect?: (selectedBrand: AdvertisementBrandingFieldsFragment) => void;
}

export const PaginatedBrands = ({
  data,
  pageSize,
  selectedBrandId,
  onPagination,
  onSelect,
}: Props) => {
  const brands = data?.advertisementBrandings?.edges || [];
  const hasAtLeastOneBrand = data && brands.length > 0;

  if (!hasAtLeastOneBrand) {
    return (
      <Notice tone="info">
        <Text>
          You have no brand. Create a new one in the{' '}
          <SmartTextLink href="https://talent.seek.com.au/account/branding">
            SEEK AdCentre
          </SmartTextLink>
          .
        </Text>
      </Notice>
    );
  }

  return (
    <ConnectionPagination
      connection={data.advertisementBrandings}
      onPagination={onPagination}
      pageSize={pageSize}
    >
      {(edges) => (
        <BrandTiles
          edges={edges}
          selectedBrandId={selectedBrandId}
          onSelect={onSelect}
        />
      )}
    </ConnectionPagination>
  );
};
