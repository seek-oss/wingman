import { style } from 'sku/treat';

export const fillViewportHeight = style({
  height: '100vh',
});

export const rightBorder = style((theme) => ({
  borderRightColor: theme.border.color.standard,
  borderRightStyle: 'solid',
  borderRightWidth: theme.border.width.standard,
}));
