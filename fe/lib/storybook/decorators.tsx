import { Box, BraidProvider, ContentBlock } from 'braid-design-system';
import React, { ReactNode } from 'react';
import loadable from 'sku/@loadable/component';

import { BraidThemeOptions } from './controls';

interface ProviderProps {
  braidThemeName: string;
  children: ReactNode;
}

const BraidTheme = loadable.lib(
  (props: { themeName: BraidThemeOptions }) =>
    import(`braid-design-system/themes/${props.themeName}`),
);

export const BraidStorybookProvider = ({
  braidThemeName,
  children,
}: ProviderProps) => (
  <BraidTheme themeName={braidThemeName}>
    {({
      default: theme,
    }: {
      default: React.ComponentProps<typeof BraidProvider>['theme'];
    }) => (
      <BraidProvider theme={theme}>
        <ContentBlock>
          <Box paddingX="gutter" paddingY="large">
            {children}
          </Box>
        </ContentBlock>
      </BraidProvider>
    )}
  </BraidTheme>
);
