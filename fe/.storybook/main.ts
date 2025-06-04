import type { StorybookConfig } from '@storybook/react-webpack5';
import { babel, webpackFinal } from 'sku/config/storybook';

export default {
  stories: ['../lib/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
      },
    },
  },
  addons: ['@storybook/addon-webpack5-compiler-babel'],
  babel,
  webpackFinal,
} satisfies StorybookConfig;
