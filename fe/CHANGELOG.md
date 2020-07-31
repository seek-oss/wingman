# wingman-fe

## 0.13.1

### Patch Changes

- b950182: Fixes JobCategorySuggest radio checklist's ID being overwritten. This would prevent a user from clicking the radio label to change their selection.

## 0.13.0

### Minor Changes

- 6791783: Type LocationSuggest queries and variables and fix bugs while getting nearest locations

## 0.12.0

### Minor Changes

- 7a0cc51: Adds the ability to use geolocation while suggesting locations using `LocationSuggest`

## 0.11.0

### Minor Changes

- 7595986: Export questionnaire builder components

## 0.10.2

### Patch Changes

- 63ea27f: Fix questionnaire builder mutation variables

## 0.10.1

### Patch Changes

- 6c8578e: JobCategorySuggest: `tone` and `message` props are now optional

## 0.10.0

### Minor Changes

- fdcf4d7: Enable `name`, `message` and `tone` to be passed in as props for JobCategorySuggest

## 0.9.1

### Patch Changes

- 3113dd2: JobCategorySuggest: Resolve module imports using relative paths to fix consumer errors

## 0.9.0

### Minor Changes

- dd07791: Adds JobCategorySuggest component

  - Abstracts the `jobCategorySuggestions` query on SEEK API and provides a list of suggested job categories for a position profile input.

### Patch Changes

- fda1d1e: Add repository info to package.json files

## 0.8.0

### Minor Changes

- bcb0b8d: Add Job Category Select component

## 0.7.0

### Minor Changes

- 95268da: Fixes type resolution error in consumers. Now resolves SEEK types via relative path

## 0.6.0

### Minor Changes

- 8a6a69d: Remove enforced typing on client (ApolloClient) for LocationSuggest

## 0.5.0

### Minor Changes

- f3b6f7d: Adds LocationSuggest component

## 0.4.0

### Minor Changes

- 4581e81: Bundles SEEK types directly within fe/lib

## 0.3.0

### Minor Changes

- b307e2f: Exports SEEK graphql types for consumer use

## 0.2.0

### Minor Changes

- 2008f11: Adds storybook with Example component structure

## 0.1.0

### Minor Changes

- ef648a2: Initial version
