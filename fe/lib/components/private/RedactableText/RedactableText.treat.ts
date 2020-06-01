import { globalStyle, style } from 'sku/treat';

export const redact = style({
  backgroundColor: 'black',
  color: 'black',
  userSelect: 'none',
});

globalStyle(`${redact} > a`, {
  color: 'black',
});
