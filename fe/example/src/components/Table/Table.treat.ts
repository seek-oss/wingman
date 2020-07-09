import { style } from 'sku/treat';

export const head = style((theme) => ({
  borderBottomColor: theme.border.color.standard,
  borderBottomStyle: 'solid',
  borderBottomWidth: theme.border.width.standard,
}));

export const row = style((theme) => ({
  selectors: {
    '&:not(:last-child)': {
      borderBottomColor: theme.border.color.standard,
      borderBottomStyle: 'dotted',
      borderBottomWidth: theme.border.width.large,
    },
  },
}));

export const table = style({
  minWidth: '100%',
});
