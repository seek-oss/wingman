import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { JobCategorySelect } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

storiesOf('JobCategories', module)
  .add('Job Category Select', () => (
    <JobCategorySelect id="jobCategories" schemeId="seekAnz" />
  ))
  .addDecorator((story) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          jobCategories: () => mockJobCategories,
        },
      }}
    >
      <BraidLoadableProvider themeName="apac">
        <Box paddingX="gutter" paddingY="large">
          {story()}
        </Box>
      </BraidLoadableProvider>
    </ApolloMockProvider>
  ));
