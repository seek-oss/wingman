import { style } from 'sku/treat';

export const rightBorder = style((theme) => ({
  borderRightColor: theme.border.color.standard,
  borderRightStyle: 'solid',
  borderRightWidth: theme.border.width.standard,
}));
