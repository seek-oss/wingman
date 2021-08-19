import 'braid-design-system/reset';

import { boolean } from '@storybook/addon-knobs';
import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { QuestionnaireBuilder } from './QuestionnaireBuilder/QuestionnaireBuilder';

storiesOf('QuestionnaireBuilder', module)
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="apac">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ))
  .add('QuestionnaireBuilder', () => (
    <QuestionnaireBuilder
      hirerId="seekAnzPublicTest:organization:seek:93WyyF1h"
      showGraphqlOutput={boolean('showGraphqlOutput', true)}
    />
  ));
