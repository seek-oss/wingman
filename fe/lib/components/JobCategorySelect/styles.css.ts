import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const categoryLink = style({
  position: 'absolute',
  marginLeft: vars.space.large,
  top: vars.space.xsmall, // Parent dropdown has a `paddingTop` of xsmall
  zIndex: -1,
  borderLeftStyle: 'solid',
  borderLeftWidth: vars.borderWidth.standard,
  borderLeftColor: vars.borderColor.field,
  borderBottomWidth: vars.borderWidth.standard,
  borderBottomStyle: 'solid',
  borderBottomColor: vars.borderColor.field,
  borderRadius: vars.borderRadius.standard,
});

export const childCategoryStyling = style({
  paddingLeft: calc.add(vars.space.xlarge, vars.space.large),
});
