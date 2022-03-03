import { ApolloClient, useQuery } from '@apollo/client';
import {
  FieldMessage,
  Heading,
  Inline,
  Loader,
  Stack,
  Text,
} from 'braid-design-system';
import React, { useEffect, useState } from 'react';

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
  initialBrandId?: string;
  pageSize?: number;
  showCopyableOid?: boolean;
  onSelect?: (brandId?: string) => void;
  onBrandingQueryResponse?: (responseData: AdvertisementBrandingsQuery) => void;
}

export const BrandSelect = ({
  client,
  hirerId,
  initialBrandId,
  showCopyableOid = false,
  onSelect,
  onBrandingQueryResponse,
  pageSize = 4,
}: BrandSelectProps) => {
  const [variables, setVariables] =
    useState<AdvertisementBrandingsQueryVariables>({
      hirerId,
      first: pageSize,
    });

  const [hasPreselected, setHasPreselected] = useState(false);

  useEffect(
    () =>
      setVariables({
        hirerId,
        first: pageSize,
      }),
    [hirerId, pageSize],
  );

  const { data, previousData, loading, error } = useQuery<
    AdvertisementBrandingsQuery,
    AdvertisementBrandingsQueryVariables
  >(ADVERTISEMENT_BRANDINGS, {
    ...(client && { client }),
    variables,
  });

  const [selectedBrandId, setSelectedBrandId] = useState(initialBrandId);

  useEffect(() => {
    if (initialBrandId) {
      setHasPreselected(true);
    }

    setSelectedBrandId(initialBrandId);
  }, [initialBrandId]);

  const firstBrandId = data?.advertisementBrandings.edges[0]?.node.id.value;

  useEffect(() => {
    if (firstBrandId && !hasPreselected) {
      setHasPreselected(true);

      // Preselect the first brand from the query.
      setSelectedBrandId(firstBrandId);
    }
  }, [firstBrandId, hasPreselected]);

  const handleBrandSelect = (brand: AdvertisementBrandingFieldsFragment) => {
    const nextBrandId =
      // Allow unselecting a brand by clicking it again
      brand.id.value === selectedBrandId ? undefined : brand.id.value;

    if (onSelect) {
      onSelect(nextBrandId);
    }

    setSelectedBrandId(nextBrandId);
  };

  // Show the previous page while fetching new brands
  // Otherwise, we change size to show the loader which is jarring
  const renderedData = data ?? previousData;

  if (renderedData && onBrandingQueryResponse) {
    onBrandingQueryResponse(renderedData);
  }

  if (loading && !renderedData) {
    return (
      <Inline space="small">
        <Text>Loading brands</Text>
        <Loader size="xsmall" />
      </Inline>
    );
  }

  return (
    <Stack space="medium">
      <Heading level="4">Branding</Heading>

      <PaginatedBrands
        data={renderedData}
        pageSize={pageSize}
        selectedBrandId={selectedBrandId}
        onPagination={(args) => {
          setVariables({ ...args, hirerId });
        }}
        onSelect={handleBrandSelect}
        showCopyableOid={showCopyableOid}
      />

      {error && (
        <FieldMessage
          id="brandingSelectError"
          message="Sorry, we couldn’t fetch brands. Please try again."
          tone="critical"
        />
      )}
    </Stack>
  );
};
