import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { AdvertisementBrandingsQueryVariables } from '../../types/seekApi.graphql';
import { createCursorConnection } from '../../utils/createCursorConnection';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { BrandSelect, BrandSelectProps } from './BrandSelect';
import { mockBrands } from './__fixtures__/brands';

interface Props extends BrandSelectProps {
  showStorybookAction?: boolean;
  pageSize?: number;
}

export const MockBrandSelect = ({
  client: _client,
  showStorybookAction,
  pageSize,
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        advertisementBrandings: (
          _root,
          args: AdvertisementBrandingsQueryVariables,
        ) => createCursorConnection(mockBrands, args),
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
