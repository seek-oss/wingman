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
  showCopyableOid?: boolean;
}

export const PaginatedBrands = ({
  data,
  pageSize,
  selectedBrandId,
  onPagination,
  onSelect,
  showCopyableOid,
}: Props) => {
  const hasAtLeastOneBrand = data?.advertisementBrandings?.edges.length;

  if (!hasAtLeastOneBrand) {
    return (
      <Notice tone="info">
        <Text>
          You have no brands. Upload a new brand on the{' '}
          <SmartTextLink href="https://talent.seek.com.au/account/branding">
            SEEK employer website
          </SmartTextLink>{' '}
          or contact SEEK.
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
          showCopyableOid={showCopyableOid}
        />
      )}
    </ConnectionPagination>
  );
};
