import { Box, Stack, Text } from 'braid-design-system';
import React from 'react';

import { CopyableOid } from '../../private/CopyableOid';
import type {
  AdvertisementBrandingFieldsFragment,
  AdvertisementBrandingImage,
} from '../../types/seekApi.graphql';

import * as styles from './styles.css';

interface Props {
  brand: AdvertisementBrandingFieldsFragment;
  isSelected?: boolean;
  onSelect?: (selectedBrand: AdvertisementBrandingFieldsFragment) => void;
  showCopyableOid?: boolean;
}

const CoverImage = ({
  image,
  brandName,
}: {
  image?: AdvertisementBrandingImage;
  brandName: string;
}) =>
  image?.url ? (
    <Box
      alt={`${brandName} cover image`}
      className={styles.coverImage}
      component="img"
      display="block"
      src={image.url}
      width="full"
    />
  ) : (
    <Box
      alignItems="center"
      className={styles.missingCoverImage}
      display="flex"
      justifyContent="center"
    >
      <Text>No cover image</Text>
    </Box>
  );

const OriginalLogo = ({
  image,
  brandName,
}: {
  image?: AdvertisementBrandingImage;
  brandName: string;
}) => (
  <Box
    alt={`${brandName} original logo`}
    className={styles.originalLogo}
    component="img"
    display="block"
    src={image?.url}
    width="full"
  />
);

export const BrandTile = ({
  brand,
  isSelected,
  onSelect,
  showCopyableOid,
}: Props) => (
  <Box position="relative">
    <CoverImage
      image={brand.images.find((image) => image.typeCode === 'CoverImage')}
      brandName={brand.name}
    />
    <Box padding="medium">
      <Stack space="medium">
        <OriginalLogo
          image={brand.images.find(
            (image) => image.typeCode === 'OriginalLogo',
          )}
          brandName={brand.name}
        />
        <Text>{brand.name}</Text>

        {showCopyableOid && (
          <CopyableOid size="small">{brand.id.value}</CopyableOid>
        )}
      </Stack>
    </Box>

    <Box
      borderRadius="large"
      boxShadow={isSelected ? 'borderFormAccentLarge' : undefined}
      className={{
        [styles.brandBase]: true,
        [styles.brand]: !isSelected,
        [styles.selectableBrand]: onSelect && !isSelected,
      }}
      cursor={onSelect ? 'pointer' : 'default'}
      onClick={() => onSelect?.(brand)}
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
    />
  </Box>
);
