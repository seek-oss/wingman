import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import { createMockClient } from 'mock-apollo-client';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { storiesOf } from 'sku/@storybook/react';

import { JobCategorySelect } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';
import { JOB_CATEGORIES } from './queries';

const mockClient = createMockClient();

mockClient.setRequestHandler(JOB_CATEGORIES, () =>
  Promise.resolve({ data: mockJobCategories }),
);

storiesOf('JobCategories', module)
  .add('Job Category Select', () => (
    <JobCategorySelect id="jobCategories" schemeId="seekAnz" />
  ))
  .addDecorator((story) => (
    <ApolloProvider client={mockClient}>
      <BraidLoadableProvider themeName="apac">
        <Box paddingX="gutter" paddingY="large">
          {story()}
        </Box>
      </BraidLoadableProvider>
    </ApolloProvider>
  ));
