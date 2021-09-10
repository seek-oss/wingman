import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { AdvertisementBrandingsQueryVariables } from '../../types/seekApi.graphql';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { BrandSelect, BrandSelectProps } from './BrandSelect';
import {
  endCursorPaginatedBrandsFirstPage,
  endCursorPaginatedBrandsSecondPage,
  mockPaginatedBrandsFirstPage,
  mockPaginatedBrandsLastPage,
  mockPaginatedBrandsOnlyOnePage,
  mockPaginatedBrandsSecondPage,
  startCursorPaginatedBrandsLastPage,
  startCursorPaginatedBrandsSecondPage,
} from './__fixtures__/brands';

interface Props extends BrandSelectProps {
  showStorybookAction?: boolean;
  mockHasNextPage?: boolean;
  pageSize?: number;
}

export const MockBrandSelect = ({
  client: _client,
  showStorybookAction,
  mockHasNextPage,
  pageSize = 4,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        advertisementBrandings: (
          root,
          args: AdvertisementBrandingsQueryVariables,
        ) => {
          if (!mockHasNextPage) {
            return mockPaginatedBrandsOnlyOnePage(pageSize);
          }
          if (
            args.after === endCursorPaginatedBrandsFirstPage ||
            args.before === startCursorPaginatedBrandsLastPage
          ) {
            return mockPaginatedBrandsSecondPage(pageSize);
          }
          if (args.after === endCursorPaginatedBrandsSecondPage) {
            return mockPaginatedBrandsLastPage(pageSize);
          }

          if (
            !args.before ||
            args.before === startCursorPaginatedBrandsSecondPage
          ) {
            return mockPaginatedBrandsFirstPage(pageSize);
          }
        },
      },
    }}
  >
    <MockComponentActions
      space="medium"
      storybookPath={
        showStorybookAction
          ? '/story/job-posting-branding-brandselect--brand-select'
          : undefined
      }
    >
      <BrandSelect {...props} pageSize={pageSize} />
    </MockComponentActions>
  </ApolloMockProvider>
);
