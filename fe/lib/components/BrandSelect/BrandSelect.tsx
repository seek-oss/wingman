import { ApolloClient, useQuery } from '@apollo/client';
import {
  FieldMessage,
  Heading,
  Inline,
  Loader,
  Secondary,
  Stack,
  Text,
} from 'braid-design-system';
import React, { useState } from 'react';

import {
  AdvertisementBrandingFieldsFragment,
  AdvertisementBrandingsQuery,
  AdvertisementBrandingsQueryVariables,
} from '../../types/seekApi.graphql';

import { PaginatedBrands } from './PaginatedBrands';
import { ADVERTISEMENT_BRANDINGS } from './queries';

export interface BrandSelectProps {
  client?: ApolloClient<unknown>;
  hirerId: string;
  errorMessage?: string;
  initialBrandId?: string;
  /**
   * Type definition from the `Controller` component that's provided by `react-hook-form`.
   */
  onChange: (...event: any[]) => void;
}

export const BrandSelect = ({
  client,
  hirerId,
  errorMessage,
  onChange,
  initialBrandId,
}: BrandSelectProps) => {
  const PAGE_SIZE = 4;

  const [variables, setVariables] =
    useState<AdvertisementBrandingsQueryVariables>({
      hirerId,
      first: PAGE_SIZE,
    });

  const { data, previousData, loading } = useQuery<
    AdvertisementBrandingsQuery,
    AdvertisementBrandingsQueryVariables
  >(ADVERTISEMENT_BRANDINGS, {
    client,
    variables,
  });

  const [selectedBrandId, setSelectedBrandId] = useState(initialBrandId);

  const handleBrandSelect = (brand: AdvertisementBrandingFieldsFragment) => {
    const nextBrandId =
      // Allow unselecting a brand by clicking it again
      brand.id.value === selectedBrandId ? undefined : brand.id.value;

    if (onChange) {
      onChange(nextBrandId);
    }

    setSelectedBrandId(nextBrandId);
  };

  // Show the previous page while fetching new brands
  // Otherwise, we change size to show the loader which is jarring
  const renderedData = data ?? previousData;

  const brands = renderedData?.advertisementBrandings?.edges || [];

  if (loading && !renderedData) {
    return (
      <Inline space="small">
        <Text>Loading brands</Text>
        <Loader size="xsmall" />
      </Inline>
    );
  }

  return renderedData && brands.length >= 1 ? (
    <Stack space="medium">
      <Heading level="4" weight={'regular'}>
        Brand <Secondary>(optional)</Secondary>
      </Heading>

      <PaginatedBrands
        data={renderedData}
        pageSize={PAGE_SIZE}
        selectedBrandId={selectedBrandId}
        onPagination={(args) => {
          setVariables({ hirerId, ...args });
        }}
        onSelect={handleBrandSelect}
      />

      {errorMessage ? (
        <FieldMessage
          id="brandsErrorMessage"
          message={errorMessage}
          tone="critical"
        />
      ) : null}
    </Stack>
  ) : (
    <FieldMessage
      id="noBrandsMesssage"
      message="You have no brands to add to your job ad"
      tone="neutral"
    />
  );
};
