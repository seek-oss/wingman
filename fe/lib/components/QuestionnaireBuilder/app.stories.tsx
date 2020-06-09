import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { QuestionnaireBuilder } from './QuestionnaireBuilder/QuestionnaireBuilder';

storiesOf('QuestionnaireBuilder', module)
  .add('Builder', () => <QuestionnaireBuilder />)
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="seekUnifiedBeta">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ));
