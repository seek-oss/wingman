import React from 'react';

import { MockComponentActions } from '../../private/MockComponentActions/MockComponentActions';
import type { JobCategoryQueryVariables } from '../../types/seekApi.graphql';
import { ApolloMockProvider } from '../ApolloMockProvider/ApolloMockProvider';

import {
  JobCategoryLookup,
  type JobCategoryLookupProps,
} from './JobCategoryLookup';
import { mockJobCategory } from './__fixtures__/jobCategory';

interface Props extends JobCategoryLookupProps {
  showStorybookAction?: boolean;
}

export const MockJobCategoryLookup = ({
  client: _client,
  showStorybookAction,
  ...props
}: Props) => (
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
      <JobCategoryLookup {...props} />
    </MockComponentActions>
  </ApolloMockProvider>
);
