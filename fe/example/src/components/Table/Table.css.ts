import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const head = style({
  borderBottomColor: vars.borderColor.standard,
  borderBottomStyle: 'solid',
  borderBottomWidth: vars.borderWidth.standard,
});

export const row = style({
  selectors: {
    '&:not(:last-child)': {
      borderBottomColor: vars.borderColor.standard,
      borderBottomStyle: 'dotted',
      borderBottomWidth: vars.borderWidth.large,
    },
  },
});

export const table = style({
  minWidth: '100%',
});
