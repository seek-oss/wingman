import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'tsdown/config';

export default defineConfig({
  failOnWarn: true,
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  platform: 'browser',
  dts: true,
  publint: true,
  attw: true,
  unbundle: true,
  plugins: [
    vanillaExtractPlugin({
      unstable_injectFilescopes: true,
    }),
  ],
});
