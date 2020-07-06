import { globalStyle } from 'sku/treat';

globalStyle('body', {
  height: '100vh',
});

globalStyle('#app, #app > div, #app > div > div', {
  height: 'inherit',
});
