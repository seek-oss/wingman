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
}

export const MockBrandSelect = ({
  client: _client,
  showStorybookAction,
  mockHasNextPage,
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
            return mockPaginatedBrandsOnlyOnePage;
          }

          if (
            args.after === endCursorPaginatedBrandsFirstPage ||
            args.before === startCursorPaginatedBrandsLastPage
          ) {
            return mockPaginatedBrandsSecondPage;
          }
          if (args.after === endCursorPaginatedBrandsSecondPage) {
            return mockPaginatedBrandsLastPage;
          }

          if (
            args.before ||
            args.before === startCursorPaginatedBrandsSecondPage
          ) {
            return mockPaginatedBrandsFirstPage;
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
      <BrandSelect {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
