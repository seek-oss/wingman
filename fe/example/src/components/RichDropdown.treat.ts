import { style } from 'sku/treat';

export const selectionHover = style((theme) => ({
  ':hover': {
    background: theme.color.background.selection,
  },
}));
