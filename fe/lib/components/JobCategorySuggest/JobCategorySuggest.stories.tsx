import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import { createMockClient } from 'mock-apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { storiesOf } from 'sku/@storybook/react';

import { JobCategorySuggest } from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';
import { JOB_CATEGORY_SUGGESTION } from './queries';

const mockClient = createMockClient();

mockClient.setRequestHandler(JOB_CATEGORY_SUGGESTION, () =>
  Promise.resolve({ data: mockJobCategorySuggest }),
);

storiesOf('JobCategories', module)
  .add('Job Category Suggest', () => (
    <JobCategorySuggest
      schemeId="seekAnz"
      positionProfile={{
        positionTitle: `Senior Developer`,
      }}
    />
  ))
  .addDecorator(story => (
    <ApolloProvider client={mockClient}>
      <BraidLoadableProvider themeName="seekUnifiedBeta">
        <Box paddingX="gutter" paddingY="large">
          {story()}
        </Box>
      </BraidLoadableProvider>
    </ApolloProvider>
  ));
