import { Box, FieldLabel, Radio, Stack, Text } from 'braid-design-system';
import React, { useState } from 'react';
import { useStyles } from 'sku/react-treat';

import { AD_PRODUCTS, AdProductName } from '../data/adProducts';

import * as styleRefs from './AdProductSelect.treat';

interface Props {
  onChange: (name: AdProductName) => void;
}

export const AdProductSelect = ({ onChange }: Props) => {
  const styles = useStyles(styleRefs);

  const [selection, setSelection] = useState<AdProductName>();

  const changeProduct = (name: AdProductName) => {
    setSelection(name);
    onChange(name);
  };

  return (
    <Stack space="xsmall">
      <FieldLabel htmlFor={false} label="Ad product" />

      <Box className={styles.fillHeight} display="flex">
        {AD_PRODUCTS.map((product) => (
          <Box
            background={
              product.name === 'Premium' ? 'promoteLight' : 'infoLight'
            }
            borderRadius="standard"
            className={styles.productCard}
            cursor="pointer"
            flexGrow={1}
            key={product.name}
            onClick={() => changeProduct(product.name)}
            padding="gutter"
          >
            <Stack space="gutter">
              <Radio
                checked={product.name === selection}
                id={`adProduct${product.name}`}
                label={product.name}
                onChange={() => changeProduct(product.name)}
              />

              <Text size="small">{product.description}</Text>
            </Stack>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};
