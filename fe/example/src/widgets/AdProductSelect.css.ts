import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const productCard = style({
  borderColor: vars.borderColor.field,
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.standard,

  ':hover': {
    borderColor: vars.borderColor.formAccent,
  },
});
