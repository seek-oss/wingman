# wingman-fe

## 0.20.0

### Minor Changes

- 05a28e8: **deps:** Require Scoobie 7
- 05a28e8: **deps:** Require React 17
- 05a28e8: **deps:** Require Braid 30

## 0.19.6

### Patch Changes

- 22ecce3: **QuestionnaireBuilder:** Improve accessibility of preferred option checkbox
- 22ecce3: **deps:** Require Braid 29.32+

## 0.19.5

### Patch Changes

- 0e31cd6: **QuestionnaireBuilder:** Fix TypeScript mismatches

## 0.19.4

### Patch Changes

- ec391a6: **QuestionnaireBuilder:** Ensure question options are unique and non-empty
- bb2ed17: **QuestionnaireBuilder:** Align privacy consent validation messages
- bdce19a: **QuestionnaireBuilder:** Remove custom flexbox usage
- 27c9847: **QuestionnaireBuilder:** Validate question text and options
- 0a5c5eb: **QuestionnaireBuilder:** Autofocus option field after adding one

## 0.19.3

### Patch Changes

- 6841ee0: **deps:** runtypes ^6.3.0

## 0.19.2

### Patch Changes

- c6213f7: Run codegen for `AddressInput` changes

## 0.19.1

### Patch Changes

- be620ff: **QuestionnaireBuilder:** Render custom privacy consent prompt

## 0.19.0

### Minor Changes

- f701f01: **JobCategorySelect, JobCategorySuggest:** Clean up job category GraphQL queries

## 0.18.9

### Patch Changes

- a59f68d: **JobCategorySelect, JobCategorySuggest, LocationSuggest:** Improve error messagging
- a59f68d: **JobCategorySuggest:** Remove unintentional bottom spacing
- a59f68d: **LocationSuggest:** Fix detect button alignment

  This ensures the detect button stays aligned with the autosuggest field when the `message` or `reserveMessageSpace` prop is set.

- a59f68d: **JobCategorySelect, JobCategorySuggest, LocationSuggest:** Improve `message` and `reserveMessageSpace` alignment and handling

## 0.18.8

### Patch Changes

- 4ff7174: **JobCategorySelect, QuestionnaireBuilder:** Shorten form placeholders

## 0.18.7

### Patch Changes

- 5286f8c: Ensure props are not overwritten

## 0.18.6

### Patch Changes

- 0368a0d: Update schema codegen

## 0.18.5

### Patch Changes

- 61d0683: **QuestionnaireBuilder:** Require privacy consent description field

## 0.18.4

### Patch Changes

- 7e1e1b0: **deps:** react-hook-form ^7.0.0

## 0.18.3

### Patch Changes

- 730b9c6: **deps:** runtypes ^5.2.0

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
