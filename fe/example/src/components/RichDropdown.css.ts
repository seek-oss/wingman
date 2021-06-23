import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const selectionHover = style({
  ':hover': {
    background: vars.backgroundColor.selection,
  },
});
