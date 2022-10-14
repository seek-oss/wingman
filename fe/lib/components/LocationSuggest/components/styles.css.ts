import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const card = style({
  transition: ['background-color', 'filter']
    .map((prop) => `${prop} 0.2s ease-out`)
    .join(', '),
  ':hover': {
    backgroundColor: vars.backgroundColor.formAccentSoft,
  },
  ':active': {
    backgroundColor: vars.backgroundColor.formAccentSoft,
    filter: 'brightness(95%)',
  },
});
