const { merge } = require('webpack-merge');

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

module.exports = {
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
    '/positions/brandings',
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
};
