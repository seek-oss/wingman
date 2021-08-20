import React, { forwardRef } from 'react';

import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';
import { mockJobCategories } from '../JobCategorySelect/__fixtures__/jobCategories';

import {
  JobCategorySuggest,
  JobCategorySuggestProps,
} from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

export const MockJobCategorySuggest = forwardRef<
  HTMLInputElement,
  JobCategorySuggestProps
>(({ client: _client, ...props }, ref) => (
  <ApolloMockProvider
    resolvers={{
      Query: {
        jobCategorySuggestions: () => mockJobCategorySuggest,
        jobCategories: () => mockJobCategories,
      },
    }}
  >
    <JobCategorySuggest {...props} ref={ref} />
  </ApolloMockProvider>
));
