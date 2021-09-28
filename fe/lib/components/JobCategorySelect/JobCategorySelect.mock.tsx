import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { JobCategorySelect, JobCategorySelectProps } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

interface Props extends JobCategorySelectProps {
  showStorybookAction?: boolean;
}

export const MockJobCategorySelect = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, showStorybookAction, ...props }, ref) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          jobCategories: () => mockJobCategories,
        },
      }}
    >
      <MockComponentActions
        space="medium"
        storybookPath={
          showStorybookAction
            ? '/story/job-posting-job-categories-jobcategoryselect--job-category-select'
            : undefined
        }
        sourcePath="lib/components/JobCategorySelect"
      >
        <JobCategorySelect {...props} ref={ref} />
      </MockComponentActions>
    </ApolloMockProvider>
  ),
);
