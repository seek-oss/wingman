import { style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

export const linkRef = style({});

export const link = style({
  textDecoration: 'none',

  ':hover': {
    color: vars.foregroundColor.linkHover,
    textDecoration: 'underline',
  },
});

export const linkBox = style([
  atoms({
    transition: 'touchable',
  }),
  style({
    selectors: {
      [`${linkRef}:active &`]: {
        transform: 'translateY(1px)',
      },
    },
  }),
]);
