import { style } from 'sku/treat';

export const fillHeight = style({
  alignItems: 'stretch',
});

export const productCard = style((theme) => ({
  borderColor: theme.border.color.field,
  borderStyle: 'solid',
  borderWidth: theme.border.width.standard,

  ':hover': {
    borderColor: theme.border.color.formHover,
  },

  selectors: {
    '&:not(:last-child)': {
      marginRight: theme.grid * theme.space.gutter,
    },
  },
}));
