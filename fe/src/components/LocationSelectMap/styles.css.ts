import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

import { colorModeStyleWithSelector } from '../../utils/colorMode';

export const card = style([
  {
    transition: 'background-color 0.2s ease-out',
  },
  colorModeStyleWithSelector('&:hover', {
    darkMode: { backgroundColor: vars.backgroundColor.neutralHover },
    lightMode: { backgroundColor: vars.backgroundColor.neutralSoftHover },
  }),
  colorModeStyleWithSelector('&:active', {
    darkMode: { backgroundColor: vars.backgroundColor.neutralActive },
    lightMode: { backgroundColor: vars.backgroundColor.neutralSoftActive },
  }),
]);
