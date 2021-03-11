# wingman-fe

## 0.18.2

### Patch Changes

- eb90de5: fix: use-debounce ^6.0.0

## 0.18.1

### Patch Changes

- 439412b: **deps:** Drop `@hookform/resolvers`, `@types/yup`, `yup`

  `@hookform/resolvers` has broken imports and types on the latest channel. We can save some heartache and bytes by replacing all of these dependencies with around 20 lines of code. This fixes these mysterious build errors:

  ```text
  ERROR in Cannot use import statement outside a module
  ```

## 0.18.0

### Minor Changes

- a4c4694: **deps:** Require Braid v29.26
- a4c4694: **deps:** Require Scoobie v5

### Patch Changes

- a4c4694: **LocationSuggest, QuestionnaireBuilder:** Use new Braid button variants

## 0.17.2

### Patch Changes

- 75dea5a: **QuestionnaireBuilder:** Use Braid's TextLinkButton

## 0.17.1

### Patch Changes

- f095054: **JobCategorySuggest:** Forward `name` prop

## 0.17.0

### Minor Changes

- f967597: SpecifiedPersonForm: Accept initial values and require email address

## 0.16.12

### Patch Changes

- 0dfa5b3: **JobCategorySuggest:** Pass through `name` prop
- 0dfa5b3: **JobCategorySelect:** Pass through `name` prop

## 0.16.11

### Patch Changes

- c68f8fd: Remove userForm hook from SpecifiedPersonForm

## 0.16.10

### Patch Changes

- 87ef14b: Fix SpecifiedPersonForm event handling

## 0.16.9

### Patch Changes

- 9415b92: Prevent default SpecifiedPersonForm form submission

## 0.16.8

### Patch Changes

- c532880: feat(SpecifiedPersonForm): Add component

## 0.16.7

### Patch Changes

- b3d9f56: **deps:** yup ^0.30.0

## 0.16.6

### Patch Changes

- 26c015c: **deps:** Support React 17

## 0.16.5

### Patch Changes

- 9c84c86: JobCategorySuggest: Use ID as RadioItem value

  This releases #243.

## 0.16.4

### Patch Changes

- ed472eb: fix(JobCategorySuggest): set current value of managed radio group

## 0.16.3

### Patch Changes

- 080ee2d: Handle Braid 29.13.1 `onChange` changes

## 0.16.2

### Patch Changes

- c27a8f0: Migrate to RadioGroup

## 0.16.1

### Patch Changes

- da4e51e: **deps:** @hookform/resolvers ^1.0.0

## 0.16.0

### Minor Changes

- ef8b000: Align Privacy Consent render with candidate
- 41d63fc: Remove hirer ID from questionnaire builder

  - Consumers must now supply a `hirerId` prop to `<QuestionnaireBuilder/>`
  - `graphqlInput` is now takes an array of components

### Patch Changes

- c1a0aa4: **deps:** Bundle `@types/content-disposition`

## 0.15.1

### Patch Changes

- 92a5f91: Unnest GraphQL input component

## 0.15.0

### Minor Changes

- fb2968b: Render questionnaire form from GraphQL mutation

## 0.14.1

### Patch Changes

- 9109456: **deps:** require braid-design-system@29
- 9109456: **deps:** require scoobie@4

## 0.14.0

### Minor Changes

- d89e63e: **deps:** Apollo Client 3

  Breaking: widgets require an Apollo Client 3 instance to be passed in.

### Patch Changes

- d89e63e: Avoid GraphQL queries during SSR

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
