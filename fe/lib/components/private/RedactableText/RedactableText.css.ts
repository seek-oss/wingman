import { globalStyle, style } from '@vanilla-extract/css';

export const redact = style({
  backgroundColor: 'black',
  color: 'black',
  userSelect: 'none',
});

globalStyle(`${redact} > a`, {
  color: 'black',
});
