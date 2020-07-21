import { style } from 'sku/treat';

export const fieldBorder = style((theme) => ({
  borderColor: theme.border.color.field,
  borderWidth: theme.border.width.standard,
  borderStyle: 'solid',

  ':hover': {
    borderColor: theme.border.color.formHover,
  },
}));
