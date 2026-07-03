---
'wingman-fe': patch
---

Migrate build and test tooling to ESM with Vite and Vitest

The package now bundles with Vite and tests with Vitest instead of webpack and Jest. The browser bundle no longer relies on `path-browserify` or `webpack-merge`, and dev dependencies (`react-router`, `scoobie`, `content-disposition`) have been bumped. There is no change to the published API.
