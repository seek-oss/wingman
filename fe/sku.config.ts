import type { SkuConfig } from 'sku';

const isGitHubPages = Boolean(process.env.IS_GITHUB_PAGES);

const config: SkuConfig = {
  bundler: 'vite',
  testRunner: 'vitest',

  clientEntry: './example/src/client.tsx',
  renderEntry: './example/src/render.tsx',
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
  __UNSAFE_EXPERIMENTAL__cjsInteropDependencies: ['use-query-params'],

  dangerouslySetESLintConfig: (skuEslintConfig) => [
    ...skuEslintConfig,
    {
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
      },
    },
  ],

  dangerouslySetTSConfig: (tsConfig) => ({
    ...tsConfig,
    compilerOptions: {
      ...tsConfig.compilerOptions,
      // We need to set this as use-debounce exports its type declarations
      // under `browser` in package.json
      customConditions: ['browser'],
    },
    include: ['**/*', '.storybook/*'],
  }),

  eslintIgnore: [
    '**/*.less.d.ts',
    '.storybook/main.js',
    '**/dist-storybook/',
    'lib/**',
  ],
};

export default config;
