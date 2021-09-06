import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms, vars } from 'braid-design-system/css';

export const coverImage = style({
  height: calc.multiply(vars.grid, 40),
  objectFit: 'cover',
});
export const missingCoverImage = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: calc.multiply(vars.grid, 40),
  backgroundImage:
    "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAF0lEQVQoz2NgQANXGlAhwwhRMFL9jQYAcVGqAVQXe6gAAAAASUVORK5CYII=')",
});

export const originalLogo = style({
  height: calc.multiply(vars.grid, 20),
  objectFit: 'contain',
  width: calc.multiply(vars.grid, 20),
});

export const selectedBrand = atoms({
  boxShadow: 'outlineFocus',
});

export const selectableBrands = style({
  ':hover': {
    boxShadow: `0 0 0 ${vars.borderWidth.large} ${vars.borderColor.focus}`,
  },
});
