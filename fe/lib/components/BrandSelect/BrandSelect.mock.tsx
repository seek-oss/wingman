import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import type { AdvertisementBrandingsQueryVariables } from '../../types/seekApi.graphql';
import { createCursorConnection } from '../../utils/createCursorConnection';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { BrandSelect, type BrandSelectProps } from './BrandSelect';
import { mockBrands } from './__fixtures__/brands';

interface Props extends BrandSelectProps {
  showStorybookAction?: boolean;
  pageSize?: number;
  variant?: 'multiple-brands' | 'no-brands';
}

export const MockBrandSelect = ({
  client: _client,
  showStorybookAction,
  pageSize,
  variant = 'multiple-brands',
  ...props
}: Props) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        advertisementBrandings: (
          _root,
          args: AdvertisementBrandingsQueryVariables,
        ) =>
          createCursorConnection(
            variant === 'multiple-brands' ? mockBrands : [],
            args,
          ),
      },
    }}
  >
    <MockComponentActions
      space="medium"
      showStorybookAction={showStorybookAction}
      storybookPath={`/story/job-posting-branding-brandselect--${variant}`}
      sourcePath="lib/components/BrandSelect"
    >
      <BrandSelect {...props} pageSize={pageSize} />
    </MockComponentActions>
  </ApolloMockProvider>
);
