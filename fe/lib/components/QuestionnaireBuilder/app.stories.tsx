import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { QuestionnaireBuilder } from './QuestionnaireBuilder/QuestionnaireBuilder';

storiesOf('App', module)
  .add('seekAnz', () => <QuestionnaireBuilder />)
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="seekAnz">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ));
