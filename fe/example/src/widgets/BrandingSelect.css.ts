import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const image = style({
  height: '100%',
  objectFit: 'contain',
  width: '100%',
});

export const imageBox = style({
  height: calc.multiply(vars.space.gutter, 4),
  width: calc.multiply(vars.space.gutter, 8),
});
