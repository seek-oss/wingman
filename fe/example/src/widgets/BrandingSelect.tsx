import { Box, IconImage, Inline, Text } from 'braid-design-system';
import React from 'react';

import { RichDropdown } from '../components/RichDropdown';
import { BRANDINGS, Branding } from '../data/brandings';

import * as styles from './BrandingSelect.css';

interface Props {
  onChange?: (branding: Branding | undefined) => void;
}

export const BrandingSelect = ({ onChange }: Props) => (
  <RichDropdown onChange={onChange} values={BRANDINGS}>
    {(branding) => (
      <Inline alignY="center" space="gutter">
        {branding ? (
          <Box className={styles.imageBox}>
            <Box className={styles.image} component="img" src={branding.url} />
          </Box>
        ) : (
          <Box
            background="infoLight"
            className={styles.imageBox}
            padding="gutter"
          >
            <IconImage size="fill" />
          </Box>
        )}

        <Text>{branding?.name ?? 'Select...'}</Text>
      </Inline>
    )}
  </RichDropdown>
);
