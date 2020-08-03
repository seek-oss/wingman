import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { JobCategorySuggest } from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

storiesOf('JobCategories', module)
  .add('Job Category Suggest', () => (
    <JobCategorySuggest
      schemeId="seekAnz"
      positionProfile={{
        positionTitle: `Senior Developer`,
        positionLocation: ['seekAnzPublicTest:location:seek:2FqwWaaMV'],
      }}
      message={text('message', 'Select a job category')}
      tone={select('tone', ['neutral', 'critical'], undefined)}
    />
  ))
  .addDecorator((story) => (
    <ApolloMockProvider
      resolvers={{
        Query: {
          jobCategorySuggestions: () => mockJobCategorySuggest,
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
