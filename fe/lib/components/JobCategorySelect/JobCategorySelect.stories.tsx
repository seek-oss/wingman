import 'braid-design-system/reset';

import { boolean, select } from '@storybook/addon-knobs';
import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../../testing/ApolloMockProvider';

import { JobCategorySelect } from './JobCategorySelect';
import { mockJobCategories } from './__fixtures__/jobCategories';

storiesOf('JobCategorySelect', module)
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
  ))
  .add('JobCategorySelect', () => {
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
      <JobCategorySelect
        id="jobCategories"
        label="Category"
        message={message}
        schemeId="seekAnz"
        reserveMessageSpace={boolean('reserveMessageSpace', false)}
        tone={tone}
      />
    );
  });
