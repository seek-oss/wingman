import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { Example } from './Example';

storiesOf('Example', module)
  .add('Default', () => <Example />)
  .add('Custom message', () => (
    <Example message={`${text('message', 'Hello There.')}`} />
  ))
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="seekAnz">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ));
