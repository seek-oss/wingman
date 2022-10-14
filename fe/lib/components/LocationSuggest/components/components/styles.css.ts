import { style } from '@vanilla-extract/css';
import { responsiveStyle, vars } from 'braid-design-system/css';

export const responsiveBorder = style(
  responsiveStyle({
    mobile: {
      borderBottomColor: vars.borderColor.neutralLight,
      borderBottomStyle: 'solid',
      borderBottomWidth: vars.borderWidth.standard,
      borderTopColor: vars.borderColor.neutralLight,
      borderTopStyle: 'solid',
      borderTopWidth: vars.borderWidth.standard,
    },
    desktop: {
      borderBottomWidth: 0,
      borderTopWidth: 0,
      boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.neutralLight}`,
    },
  }),
);
