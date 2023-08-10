import type { SkuConfig } from 'sku';
import { merge } from 'webpack-merge';

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

const config: SkuConfig = {
  clientEntry: './example/src/client.tsx',
  renderEntry: './example/src/render.tsx',
  srcPaths: ['./example/src', './lib'],

  publicPath: isGitHubPages ? '/wingman/static/' : '/',
  routes: [
    '/',
    '/accounts',
    '/admin',
    '/candidates/detail/$id',
    '/candidates',
    '/positions/detail/$id',
    '/positions',
    '/positions/new',
    '/positions/questionnaires',
  ],
  sites: [{ name: 'apac', host: 'dev.seek.com' }],

  compilePackages: ['scoobie'],
  orderImports: true,
  rootResolution: false,
  storybookAddons: ['@storybook/addon-essentials'],

  dangerouslySetESLintConfig: (skuEslintConfig) => ({
    ...skuEslintConfig,

    rules: {
      ...skuEslintConfig.rules,

      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'no-use-before-define': 'off',
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  }),

  dangerouslySetWebpackConfig: (skuWebpackConfig) =>
    merge(skuWebpackConfig, {
      resolve: {
        fallback: {
          /**
           * We don't have a reasonable browser-compatible package for parsing
           * `Content-Disposition` headers 😞.
           *
           * {@link https://github.com/jshttp/content-disposition}
           */
          path: require.resolve('path-browserify'),
        },
      },
    }),
  dangerouslySetTSConfig: (tsConfig) => ({
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      // We need to set this as use-debounce exports its type declarations
      // under `browser` in package.json
      customConditions: ['browser'],
    },
  }),
};

export default config;
