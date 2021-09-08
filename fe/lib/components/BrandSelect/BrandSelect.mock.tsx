import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { BrandSelect, BrandSelectProps } from './BrandSelect';
import { mockPaginatedBrands } from './__fixtures__/brands';

interface Props extends BrandSelectProps {
  showStorybookAction?: boolean;
}

export const MockBrandSelect = ({
  client: _client,
  showStorybookAction,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        advertisementBrandings: () => mockPaginatedBrands,
      },
    }}
  >
    <MockComponentActions
      space="medium"
      storybookPath={
        showStorybookAction
          ? '/story/job-posting-brand-brandselect--brand-select'
          : undefined
      }
    >
      <BrandSelect {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
