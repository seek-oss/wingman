module.exports = {
  clientEntry: 'example/src/client.tsx',
  renderEntry: 'example/src/render.tsx',
  srcPaths: ['example/src', 'lib'],

  publicPath: '/',
  sites: [{ name: 'seekUnifiedBeta', host: 'dev.seekunifiedbeta.com' }],

  orderImports: true,

  dangerouslySetESLintConfig: (skuEslintConfig) => ({
    ...skuEslintConfig,

    rules: {
      ...skuEslintConfig.rules,

      '@typescript-eslint/explicit-module-boundary-types': 'off',

      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
    },
  }),
};
