import {
  Box,
  FieldLabel,
  RadioGroup,
  RadioItem,
  Stack,
  Text,
  Tiles,
} from 'braid-design-system';
import React, { useState } from 'react';

import { AD_PRODUCTS, type AdProductName } from '../data/adProducts';

import * as styles from './AdProductSelect.css';

interface Props {
  onChange: (name: AdProductName) => void;
}

export const AdProductSelect = ({ onChange }: Props) => {
  const [selection, setSelection] = useState<AdProductName>();

  const changeProduct = (name: AdProductName) => {
    setSelection(name);
    onChange(name);
  };

  return (
    <Stack space="xsmall">
      <FieldLabel htmlFor={false} label="Ad product" />

      <Tiles columns={[1, 3]} space={['xsmall', 'gutter']}>
        {AD_PRODUCTS.map((product) => (
          <Box
            background={
              product.name === 'Premium' ? 'promoteLight' : 'infoLight'
            }
            borderRadius="standard"
            className={styles.productCard}
            cursor="pointer"
            flexGrow={1}
            height="full"
            key={product.name}
            onClick={() => changeProduct(product.name)}
            padding="gutter"
          >
            <Stack space="gutter">
              <RadioGroup
                aria-label="Ad product"
                id={`adProduct${product.name}`}
                onChange={() => changeProduct(product.name)}
                value={selection ?? ''}
              >
                {[
                  <RadioItem
                    key="MaliciousCompliance"
                    label={product.name}
                    value={product.name}
                  />,
                ]}
              </RadioGroup>

              <Text size="small">{product.description}</Text>
            </Stack>
          </Box>
        ))}
      </Tiles>
    </Stack>
  );
};
