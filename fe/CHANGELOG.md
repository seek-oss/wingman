# wingman-fe

## 4.6.0

### Minor Changes

- Add interactive salary component ([#611](https://github.com/seek-oss/wingman/pull/611))

### Patch Changes

- Add character limit to salary description ([#614](https://github.com/seek-oss/wingman/pull/614))

## 4.5.0

### Minor Changes

- **MockComponents:** Add GitHub links to mock component actions ([#609](https://github.com/seek-oss/wingman/pull/609))

  The existence of Wingman is still a bit mysterious. This adds an explicit link from our `MockComponentActions` to the relevant directory on GitHub.

## 4.4.0

### Minor Changes

- **JobCategorySuggest:** Auto-select first job category suggestion ([#602](https://github.com/seek-oss/wingman/pull/602))

## 4.3.1

### Patch Changes

- 1f9ca96: Fix linking line being hidden for job category suggest

## 4.3.0

### Minor Changes

- df4085c: Align job category select component to UX guide

### Patch Changes

- a236b31: **LocationSuggest:** Update detect location button copy to align with UX guide
- 208ffa9: **LocationSuggest:** Fix location suggest and nearest location error messages

## 4.2.0

### Minor Changes

- ca3d0a5: Update **BrandSelect** props

  - Change `onSelect` to optional
  - Add `onBrandingQueryResponse` callback to return SEEK API Response
  - Add `showCopyableOid` flag

## 4.1.1

### Patch Changes

- 8b6fb60: **BrandSelect:** Avoid FOUC when loading images in Firefox

## 4.1.0

### Minor Changes

- 470428c: **BrandSelect:** Add component

## 4.0.2

### Patch Changes

- 0b6826a: Work around type error in `react-hook-form` resolver

## 4.0.1

### Patch Changes

- 77f6e22: **QuestionnaireBuilder:** Make question choice input value non-null

  In the SEEK API `ApplicationQuestionChoiceInput.value` is non-null while `ApplicationQuestionChoice.value` is nullable.

  Our choice input Runtype had this as nullable which is incorrect.

## 4.0.0

### Major Changes

- df243ea: **apolloTypePolicies:**: Disable infinite scrolling opinions by default

  Our Apollo type policy was imported from an internal repository that consistently uses infinitely scrolled lists to display paginated data. However, this makes a number of assumptions about how the data is used:

  1. It assumes that the data should be flipped in reverse pagination so the oldest data appears first. When paginating forwards and backwards using a fixed page size this causes the data to flip when paginating backwards which is unexpected.

  2. It expects data to always be appended in the same direction which isn't true for page-based pagination.

  This turns `apolloTypePolicies` in to a function that now takes a `paginationPolicy` property. By default this is `conservative` which behaves the same way raw GraphQL queries would. This can be changed to `infinite-scroll` to opt-in to the previous behaviour.

## 3.0.1

### Patch Changes

- 4f47c07: **LocationSuggest:** Remove no-op client spreads
- 367d0ba: **apolloTypePolicies**: Add Apollo type policies for ontologies

  This enables safely caching locations & job categories when they're directly queried.

- f119f68: **apolloTypePolicies:** Add additional Apollo type policies

  This adds a policy for `ApplicationQuestionnaire` and objects that are only accessible with a partner token.

- 5d1ee4c: **JobCategorySelect, JobCategorySuggest, LocationSuggest:** Rationalise fetch policies

  This removes an explicit fetch policy except for the realtime suggestion queries.

  This can cause problems if you're not using an appropriate cache policy for the SEEK API.
  You can either use our `apolloTypePolicies` or set a default cache policy of `no-fetch` for the `client` you pass to the component.

## 3.0.0

### Major Changes

- b422dc0: **deps:** Move `graphql` to a peer dependency

  If your project does not already include `graphql@15` as a direct dependency it needs to be added.

## 2.3.0

### Minor Changes

- f5b3df1: **apolloTypePolicies:** Add experimental Apollo client type policies

  This should enable cached pagination to work correctly against the SEEK API.

## 2.2.0

### Minor Changes

- f5ffa36: **MockAdSelectionFallback:** Add component

### Patch Changes

- f5ffa36: **AdSelectionFallback:** Forward ref
- 3104e9c: **QuestionnaireQueryInput:** Fix rendering GraphQL query input validation errors

## 2.1.0

### Minor Changes

- 5292c07: **AdSelectionFallback:** Add component

## 2.0.1

### Patch Changes

- 8de368c: **QuestionnaireBuilder:** Remove divider between components

## 2.0.0

### Major Changes

- dfa8c0a: **QuestionnaireBuilder:** Remove width constraint

  This component no longer bundles its own width constraint. You can wrap it in a standard Braid [ContentBlock](https://seek-oss.github.io/braid-design-system/components/ContentBlock/) to restore the previous behaviour.

  ```diff
  + import { ContentBlock } from 'braid-design-system';

  + <ContentBlock>
      <QuestionnaireBuilder />
  + </ContentBlock>
  ```

- dfa8c0a: **QuestionnaireBuilder:** Remove Braid reset

  This component no longer imports the [Braid reset](https://github.com/seek-oss/braid-design-system#setup) itself, which was unintended behaviour. You should be importing this before [BraidProvider](https://seek-oss.github.io/braid-design-system/components/BraidProvider) in your app:

  ```diff
  + import 'braid-design-system/reset';

  import { BraidProvider } from 'braid-design-system';
  ```

- dfa8c0a: **QuestionnaireBuilder:** Add `wrapper` prop

  This component no longer renders a [Card](https://seek-oss.github.io/braid-design-system/components/Card/) wrapper around its children by default. This “unwrapped” default state can be useful when nested inside a component that manages its own space, like a [Dialog](https://seek-oss.github.io/braid-design-system/components/Dialog/) or [Drawer](https://seek-oss.github.io/braid-design-system/components/Drawer/).

  You can restore the previous behaviour by setting the prop to its built-in `card` preset, though note that this defaults to rounded corners:

  ```diff
  - <QuestionnaireBuilder />
  + <QuestionnaireBuilder wrapper="card" />
  ```

- 39c1907: **deps:** Require Braid 30.4+ and Scoobie 9+
- dfa8c0a: **QuestionnaireBuilder:** Default `showGraphqlOutput` to false

  You can restore the previous behaviour by setting the prop:

  ```diff
  - <QuestionnaireBuilder />
  + <QuestionnaireBuilder showGraphqlOutput />
  ```

### Minor Changes

- dfa8c0a: **QuestionnaireBuilder:** Make form preview more compact

  This more closely aligns with SEEK's native apply form in production.

## 1.0.0

### Major Changes

- 23d6e1d: **QuestionnaireCreateInput:** Remove type

  A similar type can be derived via component props:

  ```typescript
  import { ComponentProps } from 'react';
  import { QuestionnaireBuilder } from 'wingman-fe';

  type Input = ComponentProps<typeof QuestionnaireBuilder>['graphqlInput'];
  ```

- 23d6e1d: **FormBuilderQueryInput:** Rename to QuestionnaireQueryInput

  ```diff
  - import { FormBuilderQueryInput } from 'wingman-fe';
  + import { QuestionnaireQueryInput } from 'wingman-fe';
  ```

### Minor Changes

- 23d6e1d: **QuestionnaireQueryOutput:** Add component

  This can be used to provide the GraphQL mutation and variables corresponding to a built questionnaire.

- 7d0480b: **MockJobCategorySelect, MockJobCategorySuggest, MockLocationSuggest:** Add components

  These can be used to provide an interactive preview of each component without a live connection to the SEEK API.

- 7d0480b: **ApolloMockProvider:** Add component

  This can be used to supply custom GraphQL resolvers to a component. The provider is automatically seeded with the GraphQL `typeDefs` of the SEEK API.

- 191963f: **MockJobCategorySelect, MockJobCategorySuggest, MockLocationSuggest:** Add `showStorybookAction` prop

  This can be used to toggle a deep link into Storybook.

## 0.26.2

### Patch Changes

- ffedfbb: **JobCategorySelect:** Collapse columns on mobile
- ffedfbb: **QuestionnaireBuilder:** Sentence case headings
- ffedfbb: **QuestionnaireBuilder:** Collapse columns on mobile
- ffedfbb: **LocationSuggest:** Collapse columns on mobile
- 9163efa: **pkg:** Exclude test files
- 0200fc0: **deps:** Remove `content-disposition`
- 4dc8f49: **Example:** Remove placeholder component

## 0.26.1

### Patch Changes

- 4b8c216: **QuestionnaireBuilder:** Drop requirement for Node.js `Buffer` polyfill

## 0.26.0

### Minor Changes

- 034b907: **JobCategorySelectInput:** Support loading an initial category
- 9b8b8c4: **LocationSuggestInput:** Support loading an initial location

## 0.25.0

### Minor Changes

- 3072d56: **JobCategorySelect:** Require `label` prop

## 0.24.0

### Minor Changes

- 2ecd8d7: **QuestionnaireBuilder**: Make questionnaire builder's GraphQL dump optional

## 0.23.0

### Minor Changes

- 34f117b: Update for Braid 30.3

## 0.22.2

### Patch Changes

- 2ab6363: Update apollo client to 3.4.1

## 0.22.1

### Patch Changes

- 2aeb109: Remove `ssr` flag from graphql queries

## 0.22.0

### Minor Changes

- b439228: Add 'Other' as a suggested job category option which triggers the job category select list

## 0.21.1

### Patch Changes

- 261929c: Remove detect error messaging on successful location query

## 0.21.0

### Minor Changes

- 693f7e7: **JobCategorySelect**: Provide job category node type

  Job posting in ANZ requires a child category for both pricing & posting.

  Pass back the category node type (`parent` or `child`) so we can
  validate we have the right type of category. For example, we could block
  posting until the user has selected a `child`.

### Patch Changes

- c390fd2: **JobCategorySelect:** Don't select `parent` in `jobCategories` query

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
