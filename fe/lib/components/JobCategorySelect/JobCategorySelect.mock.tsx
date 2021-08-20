import React, { forwardRef } from 'react';

import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { JobCategorySelect, JobCategorySelectProps } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

export const MockJobCategorySelect = forwardRef<
  HTMLInputElement,
  JobCategorySelectProps
>(({ client: _client, ...props }, ref) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        jobCategories: () => mockJobCategories,
      },
    }}
  >
    <JobCategorySelect {...props} ref={ref} />
  </ApolloMockProvider>
));
