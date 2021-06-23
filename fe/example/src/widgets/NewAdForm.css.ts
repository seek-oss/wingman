import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const fieldBorder = style({
  borderColor: vars.borderColor.field,
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',

  ':hover': {
    borderColor: vars.borderColor.formHover,
  },
});
