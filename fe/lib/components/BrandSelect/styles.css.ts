import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { colorModeStyle, vars } from 'braid-design-system/css';

import { colorModeStyleWithSelector } from '../../utils/colorMode';

export const coverContainer = style({
  paddingLeft: vars.borderWidth.large,
  paddingRight: vars.borderWidth.large,
  paddingTop: vars.borderWidth.large,
});

const coverImageProps = style({
  borderTopLeftRadius: vars.borderRadius.large,
  borderTopRightRadius: vars.borderRadius.large,
  height: calc.multiply(vars.grid, 40),
  selectors: {
    // Firefox has a flash of unstyled alt text while loading images as of v93.
    '&:-moz-loading': {
      visibility: 'hidden',
    },
  },
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
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 0, 10px -10px, 0 10px',
  },
  colorModeStyle({
    darkMode: {
      backgroundImage: `
        linear-gradient(45deg, ${vars.backgroundColor.neutral} 26%, transparent 26%), 
        linear-gradient(135deg, ${vars.backgroundColor.neutral} 26%, transparent 26%),
        linear-gradient(45deg, transparent 75%, ${vars.backgroundColor.neutral} 75%),
        linear-gradient(135deg, transparent 75%, ${vars.backgroundColor.neutral} 75%)
      `,
    },
    lightMode: {
      backgroundImage: `
        linear-gradient(45deg, ${vars.backgroundColor.brandAccent} 26%, transparent 26%), 
        linear-gradient(135deg, ${vars.backgroundColor.brandAccent} 26%, transparent 26%),
        linear-gradient(45deg, transparent 75%, ${vars.backgroundColor.brandAccent} 75%),
        linear-gradient(135deg, transparent 75%, ${vars.backgroundColor.brandAccent} 75%)
      `,
    },
  }),
]);

export const originalLogo = style({
  height: calc.multiply(vars.grid, 20),
  objectFit: 'contain',
  width: calc.multiply(vars.grid, 20),
  selectors: {
    // Firefox has a flash of unstyled alt text while loading images as of v93.
    '&:-moz-loading': {
      visibility: 'hidden',
    },
  },
});

export const brand = style([
  {
    transition: 'box-shadow 0.2s ease-out',
  },
  colorModeStyle({
    darkMode: {
      /**
       * {@link https://github.com/seek-oss/braid-design-system/blob/v30.4.2/lib/css/atoms/atomicProperties.ts#L13}
       */
      boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.neutral}`,
    },
    lightMode: {
      /**
       * {@link https://github.com/seek-oss/braid-design-system/blob/v30.4.2/lib/css/atoms/atomicProperties.ts#L13}
       */
      boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.neutralLight}`,
    },
  }),
]);

const hoverStyle = {
  /**
   * {@link https://github.com/seek-oss/braid-design-system/blob/v30.4.2/lib/css/atoms/atomicProperties.ts#L13}
   */
  boxShadow: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.field}`,
};

export const selectableBrand = style(
  colorModeStyleWithSelector('&:hover', {
    darkMode: hoverStyle,
    lightMode: hoverStyle,
  }),
);
