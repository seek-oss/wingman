import { style } from 'sku/treat';

import { useMenuWidth } from '../styles';

export const activeLink = style({});

export const link = style({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
});

export const linkContainer = style((theme) => ({
  transition: theme.transitions.touchable,

  selectors: {
    [`${activeLink} &`]: {
      background: theme.color.background.infoLight,
    },

    [`${link}:not(${activeLink}):hover &`]: {
      background: theme.color.background.selection,
    },

    [`${link}:active &`]: {
      transform: 'translateY(1px)',
    },
  },
}));

export const sidebar = style((theme) => ({
  height: '100vh',
  width: useMenuWidth(theme),

  top: 0,

  position: 'sticky',

  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  overscrollBehaviorY: 'contain',
}));
