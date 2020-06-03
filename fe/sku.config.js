module.exports = {
  clientEntry: 'site/src/client.tsx',
  renderEntry: 'site/src/render.tsx',
  srcPaths: ['lib', 'site/src'],

  publicPath: '/',
  sites: [{ name: 'seekUnifiedBeta', host: 'dev.seekunifiedbeta.com' }],

  orderImports: true,

  dangerouslySetESLintConfig: (skuEslintConfig) => ({
    ...skuEslintConfig,
    rules: {
      ...skuEslintConfig.rules,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  }),
};
