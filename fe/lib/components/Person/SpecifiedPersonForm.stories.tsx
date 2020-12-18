import 'braid-design-system/reset';

import { Box, BraidLoadableProvider, Stack, Text } from 'braid-design-system';
import React, { useState } from 'react';
import { CodeBlock, InlineCode } from 'scoobie';
import { storiesOf } from 'sku/@storybook/react';

import { SpecifiedPersonForm } from './SpecifiedPersonForm';

storiesOf('SpecifiedPerson', module)
  .add('SpecifiedPersonForm', () => {
    const [count, setCount] = useState(0);
    const [json, setJson] = useState('');

    return (
      <Stack space="large">
        <SpecifiedPersonForm
          onCreate={(values) => {
            setCount((c) => c + 1);
            setJson(JSON.stringify(values, null, 2));
          }}
        />

        <Text>
          <InlineCode>onCreate</InlineCode>: {String(count)}
        </Text>

        <CodeBlock language="json">{json}</CodeBlock>
      </Stack>
    );
  })
  .addDecorator((story) => (
    <BraidLoadableProvider themeName="apac">
      <Box paddingX="gutter" paddingY="large">
        {story()}
      </Box>
    </BraidLoadableProvider>
  ));
