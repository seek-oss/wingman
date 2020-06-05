module.exports = {
  /* eslint-disable-next-line import/no-unresolved */
  ...require('skuba/config/jest'),

  coveragePathIgnorePatterns: ['src/testing'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
};
