import { style } from 'sku/treat';

export const linkRef = style({});

export const link = style((theme) => ({
  textDecoration: 'none',

  ':hover': {
    color: theme.color.foreground.linkHover,
    textDecoration: 'underline',
  },
}));

export const linkBox = style((theme) => ({
  transition: theme.transitions.touchable,

  selectors: {
    [`${linkRef}:active &`]: {
      transform: 'translateY(1px)',
    },
  },
}));
