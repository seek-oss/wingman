import { Box, Stack, Text } from 'braid-design-system';
import React from 'react';

import { CopyableOid } from '../../CopyableOid';
import {
  AdvertisementBrandingFieldsFragment,
  AdvertisementBrandingImage,
} from '../../types/seekApi.graphql';

import * as styles from './styles.css';

const GREY_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

interface Props {
  brand: AdvertisementBrandingFieldsFragment;
  isSelected?: boolean;
  onSelect?: (selectedBrand: AdvertisementBrandingFieldsFragment) => void;
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
      borderRadius="large"
      className={styles.coverImage}
      component="img"
      display="block"
      src={image.url}
      width="full"
    />
  ) : (
    <Box width="full" className={styles.missingCoverImage}>
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
    src={image?.url ?? GREY_PIXEL}
    width="full"
  />
);

export const BrandTile = ({ brand, isSelected, onSelect }: Props) => (
  <Box
    borderRadius="large"
    boxShadow="small"
    cursor={onSelect ? 'pointer' : 'default'}
    className={{
      [styles.selectableBrands]: onSelect,
      [styles.selectedBrand]: isSelected,
    }}
    onClick={() => onSelect?.(brand)}
  >
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

        {!onSelect && <CopyableOid size="small">{brand.id.value}</CopyableOid>}
      </Stack>
    </Box>
  </Box>
);
