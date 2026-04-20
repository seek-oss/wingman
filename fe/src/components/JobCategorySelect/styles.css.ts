import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const categoryLink = style({
  position: 'absolute',
  width: vars.space.xlarge,
  marginLeft: vars.space.large,
  top: 0,
  borderLeftStyle: 'solid',
  borderLeftWidth: vars.borderWidth.standard,
  borderLeftColor: vars.borderColor.field,
  borderBottomWidth: vars.borderWidth.standard,
  borderBottomStyle: 'solid',
  borderBottomColor: vars.borderColor.field,
  borderBottomLeftRadius: vars.borderRadius.standard,
});

export const childCategoryStyling = style({
  paddingLeft: calc.add(vars.space.xlarge, vars.space.large),
});
