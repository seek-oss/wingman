import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { Example } from './Example';

storiesOf('Example', module)
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="apac">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ))
  .add('Default', () => <Example />)
  .add('Custom message', () => (
    <Example message={`${text('message', 'Hello There.')}`} />
  ));
