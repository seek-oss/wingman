import React, { forwardRef } from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import { JobCategoryQueryVariables } from '../../types/seekApi.graphql';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import { JobCategoryLookup, JobCategoryLookupProps } from './JobCategoryLookup';
import { mockJobCategory } from './__fixtures__/jobCategory';

interface Props extends JobCategoryLookupProps {
  showStorybookAction?: boolean;
}

export const MockJobCategoryLookup = forwardRef<HTMLInputElement, Props>(
  ({ client: _client, showStorybookAction, ...props }, ref) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          jobCategory: (_root, args: JobCategoryQueryVariables) =>
            args.id === 'seekAnz:jobCategory:seek:CTriSTrf'
              ? mockJobCategory
              : undefined,
        },
      }}
    >
      <MockComponentActions
        space="medium"
        showStorybookAction={showStorybookAction}
        storybookPath="/story/job-posting-job-categories-jobcategorylookup--job-category-lookup"
        sourcePath="lib/components/JobCategoryLookup"
      >
        <JobCategoryLookup {...props} ref={ref} />
      </MockComponentActions>
    </ApolloMockProvider>
  ),
);
