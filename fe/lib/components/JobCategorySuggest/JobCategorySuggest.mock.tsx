import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';
import { mockJobCategories } from '../JobCategorySelect/__fixtures__/jobCategories';

import {
  JobCategorySuggest,
  JobCategorySuggestProps,
} from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

interface Props extends JobCategorySuggestProps {
  showStorybookAction?: boolean;
}

export const MockJobCategorySuggest = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, showStorybookAction, ...props }, ref) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          jobCategorySuggestions: () => mockJobCategorySuggest,
          jobCategories: () => mockJobCategories,
        },
      }}
    >
      <MockComponentActions
        space="medium"
        storybookPath={
          showStorybookAction
            ? '/story/job-posting-job-categories-jobcategorysuggest--job-category-suggest'
            : undefined
        }
        sourcePath="lib/components/JobCategorySuggest"
      >
        <JobCategorySuggest {...props} ref={ref} />
      </MockComponentActions>
    </ApolloMockProvider>
  ),
);
