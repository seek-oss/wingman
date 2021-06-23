import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const ad = style({
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: vars.borderWidth.large,
});

export const selectedAd = style({
  borderColor: vars.borderColor.focus,
});
