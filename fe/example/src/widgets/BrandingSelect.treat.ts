import { style } from 'sku/treat';

export const image = style({
  height: '100%',
  objectFit: 'contain',
  width: '100%',
});

export const imageBox = style((theme) => ({
  height: theme.grid * theme.space.gutter * 4,
  width: theme.grid * theme.space.gutter * 8,
}));
