import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle, vars } from 'braid-design-system/css';

export const fieldHeight = style(
  responsiveStyle({
    desktop: {
      height: calc.multiply(vars.grid, 11),
    },
  }),
);
