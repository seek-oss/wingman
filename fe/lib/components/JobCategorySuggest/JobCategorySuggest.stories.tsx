import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { boolean, select } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { JobCategorySuggest } from './JobCategorySuggest';
import { mockJobCategorySuggest } from './__fixtures__/jobCategorySuggest';

storiesOf('JobCategories', module)
  .add('Job Category Suggest', () => {
    const requiredValidation = 'Please select a category.';

    const message = select(
      'message',
      {
        undefined,
        requiredValidation,
      },
      undefined,
    );

    const tone = select(
      'tone',
      {
        undefined,
        critical: 'critical',
        neutral: 'neutral',
        positive: 'positive',
      },
      undefined,
    );

    return (
      <JobCategorySuggest
        message={message}
        positionProfile={{
          positionTitle: `Senior Developer`,
          positionLocation: ['seekAnzPublicTest:location:seek:2FqwWaaMV'],
        }}
        schemeId="seekAnz"
        reserveMessageSpace={boolean('reserveMessageSpace', false)}
        tone={tone}
      />
    );
  })
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
