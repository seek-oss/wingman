import { style } from 'sku/treat';

export const ad = style((theme) => ({
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: theme.border.width.large,
}));

export const selectedAd = style((theme) => ({
  borderColor: theme.border.color.focus,
}));
