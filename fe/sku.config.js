module.exports = {
  clientEntry: 'example/src/client.tsx',
  renderEntry: 'example/src/render.tsx',
  srcPaths: ['example/src', 'lib'],

  publicPath: '/',
  routes: [
    '/',
    '/accounts',
    '/admin',
    '/candidates/$id',
    '/candidates',
    '/candidates/new',
    '/notifications',
    '/positions/$id',
    '/positions',
    '/positions/branding',
    '/positions/new',
    '/positions/questions',
  ],
  sites: [{ name: 'seekUnifiedBeta', host: 'dev.seekunifiedbeta.com' }],

  compilePackages: ['scoobie'],
  orderImports: true,

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
};
