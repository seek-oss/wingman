# 🛩 Wingman

![GitHub Validate](https://github.com/seek-oss/wingman/workflows/Validate/badge.svg?branch=master)

Reference implementation of a SEEK-integrated recruitment system.

## Table of contents

- [Design](#design)
  - [Overview](#overview)
  - [Structure](#structure)
  - [Disclaimers](#disclaimers)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Run](#run)
- [Meta](#meta)
  - [Related SEEK OSS](#related-seek-oss)

## Design

### Overview

Wingman is a mock recruitment system that integrates with the [SEEK API] to post job ads and screen applicants.
It comprises:

- A frontend React application
- A backend Node.js GraphQL server

Wingman serves as a practical reference for third-party developers integrating with the SEEK API,
and complements the detailed documentation on our [developer site].
We hope to extend it to provide UX guidance in future.

Internally, we maintain a private implementation to [dogfood] additions and changes to the SEEK API.

### Structure

```shell
├── be
│   ├── example
│   ├── src
│   └── ...
├── fe
│   ├── example
│   ├── lib
│   └── ...
├── ...
└── README.md <- you are here
```

Wingman is developed in a monorepo.
This makes it easier for us to release changes across the frontend and backend.

The frontend and backend contain components (under [/fe/lib](/fe/lib) and [/be/src](/be/src) respectively) that are packaged and published to npm.
This allows us to share code between the public implementation of Wingman in this repo and SEEK’s own private implementation.

### Disclaimers

#### Wingman packages are not for production use

While we publish Wingman components as packages on the public npm registry,
they are not considered part of the public SEEK API and we don’t recommend their use in third-party production systems.

The primary goal of these packages is to maximise code reuse between SEEK-maintained implementations.
We’re not aiming for a stable interface here, so expect frequent breaking changes.

If you’re looking to integrate SEEK-specific features into your recruitment software without building an interface from scratch,
we offer embeddable, themed _panels_ for certain features like [ad selection].

#### Wingman is not a substitute for documentation

Wingman is meant to complement the documentation on our [developer site].
The developer site is more comprehensive and should be considered the source of truth.

Wingman may occasionally implement experimental features of the SEEK API that are not quite ready for third-party usage.
Always double-check our [developer site] and contact our partner team before building onto a new feature.

If there’s something in Wingman that doesn’t seem to match the documentation on the developer site, please [raise an issue].

#### Wingman is not a production system

Wingman’s focus is on demonstrating the integration layer between a recruitment system and the SEEK API.
It is cut down in several aspects:

- It’s light on error handling 💥

- It’s light on testing 🤠

- It’s coupled to the SEEK API’s data structures.

  A third-party recruitment system is expected to model its own domain concepts.

- It runs almost entirely with partner-wide privileges.

  A third-party recruitment system is expected to limit privileges to the currently logged-in hirer.

[ad selection]: https://developer.seek.com/use-cases/ad-selection#about-the-ad-selection-panel

## Usage

### Prerequisites

We depend on upstream tooling like [sku] that are predominantly tested on macOS and Linux.
If you’re on Windows, we recommend the [Windows Subsystem for Linux].

First, some JavaScript tooling:

- Node.js 12+
- Yarn 1.x

Next, install npm dependencies:

```shell
yarn install
```

### Run

Start local development servers:

```shell
yarn be start
yarn fe start
```

## Meta

### Related SEEK OSS

Wingman is built on a bunch of other stuff that we’ve open sourced:

- [Braid], a ~~component library~~ design system
- [Scoobie], a Braid component library
- [sku](https://github.com/seek-oss/sku), a frontend development toolkit
- [skuba], a backend development toolkit

[braid]: https://github.com/seek-oss/braid-design-system
[developer site]: https://developer.seek.com
[dogfood]: https://en.wikipedia.org/wiki/Eating_your_own_dog_food
[raise an issue]: https://github.com/seek-oss/wingman/issues/new/choose
[scoobie]: https://github.com/seek-oss/scoobie
[seek api]: https://developer.seek.com/introduction
[sku]: https://github.com/seek-oss/sku
[skuba]: https://github.com/seek-oss/skuba
[windows subsystem for linux]: https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux
[yarn workspaces]: https://classic.yarnpkg.com/en/docs/workspaces/
