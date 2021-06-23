import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const preview = style({
  height: calc.multiply(vars.grid, 235),
});
