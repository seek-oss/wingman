import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

const coverImageProps = style({
  borderTopLeftRadius: vars.borderRadius.large,
  borderTopRightRadius: vars.borderRadius.large,
  height: calc.multiply(vars.grid, 40),
  paddingLeft: vars.borderWidth.large,
  paddingRight: vars.borderWidth.large,
  paddingTop: vars.borderWidth.large,
});

export const coverImage = style([
  coverImageProps,
  {
    objectFit: 'cover',
  },
]);

export const missingCoverImage = style([
  coverImageProps,
  {
    backgroundImage:
      "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAF0lEQVQoz2NgQANXGlAhwwhRMFL9jQYAcVGqAVQXe6gAAAAASUVORK5CYII=')",
  },
]);

export const originalLogo = style({
  height: calc.multiply(vars.grid, 20),
  objectFit: 'contain',
  width: calc.multiply(vars.grid, 20),
});

export const brand = style({
  /**
   * {@link https://github.com/seek-oss/braid-design-system/blob/v30.4.2/lib/css/atoms/atomicProperties.ts#L13}
   */
  boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.standard}`,
});

export const selectableBrand = style({
  ':hover': {
    /**
     * {@link https://github.com/seek-oss/braid-design-system/blob/v30.4.2/lib/css/atoms/atomicProperties.ts#L13}
     */
    boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.field}`,
  },
});
