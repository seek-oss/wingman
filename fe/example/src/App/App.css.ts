import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const rightBorder = style({
  borderRightColor: vars.borderColor.neutralLight,
  borderRightStyle: 'solid',
  borderRightWidth: vars.borderWidth.standard,
});
