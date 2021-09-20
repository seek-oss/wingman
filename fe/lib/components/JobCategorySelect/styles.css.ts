import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const wrapper = style({
  position: 'absolute',
  marginLeft: vars.space.large,
  top: vars.space.xsmall,
  left: 0,
  zIndex: -1,
  borderLeftStyle: 'solid',
  borderLeftWidth: vars.borderWidth.standard,
  borderBottomStyle: 'solid',
  borderBottomWidth: vars.borderWidth.standard,
  borderRadius: vars.borderRadius.standard,
});
