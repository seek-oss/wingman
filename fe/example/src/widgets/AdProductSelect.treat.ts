import { style } from 'sku/treat';

export const productCard = style((theme) => ({
  borderColor: theme.border.color.field,
  borderStyle: 'solid',
  borderWidth: theme.border.width.standard,

  ':hover': {
    borderColor: theme.border.color.formHover,
  },
}));
