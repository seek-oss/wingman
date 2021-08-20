import { Box, BraidLoadableProvider, ContentBlock } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';
import { addDecorator } from 'sku/@storybook/react';

import { ApolloMockProvider } from '../testing/ApolloMockProvider';

interface ProviderProps {
  braidThemeName: string;
  children: ReactNode;
}

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidLoadableProvider themeName={braidThemeName}>
    <ContentBlock>
      <Box paddingX="gutter" paddingY="large">
        {children}
      </Box>
    </ContentBlock>
  </BraidLoadableProvider>
);

type DecoratorFn = Parameters<typeof addDecorator>[0];

export const createWithApolloProvider =
  (
    resolvers: ComponentProps<typeof ApolloMockProvider>['resolvers'],
  ): DecoratorFn =>
  (story) =>
    <ApolloMockProvider resolvers={resolvers}>{story()}</ApolloMockProvider>;
