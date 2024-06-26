import { style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

import { menuWidth } from '../styles.css';

export const activeLink = style({});

export const link = style({
  textDecoration: 'none',
  whiteSpace: 'nowrap',
});

export const linkContainer = style([
  atoms({
    transition: 'touchable',
  }),
  style({
    selectors: {
      [`${activeLink} &`]: {
        background: vars.backgroundColor.infoLight,
      },

      [`${link}:not(${activeLink}):hover &`]: {
        background: vars.backgroundColor.formAccentSoft,
      },

      [`${link}:active &`]: {
        transform: 'translateY(1px)',
      },
    },
  }),
]);

export const sidebar = style({
  height: '100vh',
  width: menuWidth,

  top: 0,

  position: 'sticky',

  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  overscrollBehaviorY: 'contain',
});
