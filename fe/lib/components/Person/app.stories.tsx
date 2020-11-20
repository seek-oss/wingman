import 'braid-design-system/reset';

import { Box, BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { SpecifiedPersonForm } from './SpecifiedPersonForm';

storiesOf('SpecifiedPerson', module)
  .add('SpecifiedPersonForm', () => <SpecifiedPersonForm onCreate={() => {}} />)
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="apac">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ));
