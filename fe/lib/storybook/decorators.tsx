/**
 * `@storybook/addon-controls` is not currently usable in decorators.
 *
 * {@link https://github.com/storybookjs/storybook/issues/11984}
 */
import { select } from '@storybook/addon-knobs';
import { Box, BraidLoadableProvider, ContentBlock } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';
import { addDecorator } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../testing/ApolloMockProvider';

interface ProviderProps {
  children: ReactNode;
}

const BraidStorybookProvider = ({ children }: ProviderProps) => (
  <BraidLoadableProvider
    themeName={select(
      'BraidLoadableProvider.themeName',
      [
        'apac',
        'catho',
        'docs',
        'jobsDb',
        'jobStreet',
        'occ',
        'seekAnz',
        'seekBusiness',
        'wireframe',
      ],
      'apac',
    )}
  >
    {children}
  </BraidLoadableProvider>
);

type DecoratorFn = Parameters<typeof addDecorator>[0];

export const DesignDecorator: DecoratorFn = (story) => (
  <BraidStorybookProvider>
    <ContentBlock>
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </ContentBlock>
  </BraidStorybookProvider>
);

export const createApolloDecorator =
  (
    resolvers: ComponentProps<typeof ApolloMockProvider>['resolvers'],
  ): DecoratorFn =>
  (story) =>
    <ApolloMockProvider resolvers={resolvers}>{story()}</ApolloMockProvider>;
