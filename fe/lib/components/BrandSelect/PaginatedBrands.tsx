import { Notice, Text } from 'braid-design-system';
import React from 'react';
import { SmartTextLink } from 'scoobie';

import {
  AdvertisementBrandingFieldsFragment,
  AdvertisementBrandingsQuery,
} from '../../types/seekApi.graphql';
import { ConnectionPagination, OnClickHandler } from '../ConnectionPagination';

import { BrandGrid } from './BrandGrid';

interface Props {
  data: AdvertisementBrandingsQuery;
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
  const hasAtLeastOneBrand = data.advertisementBrandings?.edges.length > 0;

  if (!hasAtLeastOneBrand) {
    return (
      <Notice tone="info">
        <Text>
          You have no brands. Create a new one in the{' '}
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
        <BrandGrid
          edges={edges}
          selectedBrandId={selectedBrandId}
          onSelect={onSelect}
        />
      )}
    </ConnectionPagination>
  );
};
