# Contributing

Hi there, thanks for checking out our repo!

Wingman serves as a practical reference for third-party developers integrating with the SEEK API,
and complements the detailed documentation on our [developer site].
While third-party contributions are certainly welcome,
this project is primarily driven by our internal priorities.

SEEKers: this repo is public,
so don't commit or post anything that isn't ready for the entire world to see.

## Table of contents

- [Getting started](#getting-started)
  - [I want to discuss or report something](#i-want-to-discuss-or-report-something)
  - [I want to contribute a change](#i-want-to-contribute-a-change)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Git workflow](#git-workflow)
  - [Testing](#testing)
  - [Running locally](#running-locally)
- [Releases](#releases)
  - [Creating a changeset](#creating-a-changeset)
  - [Publishing a release](#publishing-a-release)
  - [Publishing a prerelease](#publishing-a-prerelease)

## Getting started

Wingman is documented through its [README](/README.md).
We maintain changelogs and [release notes] on GitHub,
and distribute underlying components as npm packages ([wingman-fe]).

Frontend components can be previewed through a [Storybook].
We plan to host the Wingman example stack publicly at some point ([#3](https://github.com/seek-oss/wingman/issues/3)).

See the [README design section] for more details on the repository structure.

### I want to discuss or report something

[Submit an issue] if you have a question, feature request or bug report.

If you work at SEEK, [#indirect] is your friend.

### I want to contribute a change

Feel free to [create a pull request] for trivial fixes and improvements.

For more substantial features, please [submit an issue] first.
This lets us evaluate whether the feature fits the direction of the project and discuss possible approaches.

## Development

### Prerequisites

We depend on upstream tooling like **[sku]** that are predominantly tested on macOS and Linux.
If you're on Windows, we recommend the [Windows Subsystem for Linux].

First, some JavaScript tooling:

- Node.js LTS
- pnpm as per `package.json#packageManager`

Next, install npm dependencies:

```shell
pnpm install
```

### Git workflow

We use [GitHub flow](https://guides.github.com/introduction/flow/).

Create a new branch off of the latest commit on master:

```shell
git fetch origin
git switch --create your-branch-name origin/master
```

Develop, [test](#testing) and commit your changes on this branch.
(Make sure to include the appropriate [changeset](#creating-a-changeset).)

```shell
git add --all
git commit
```

Finally, push your branch to GitHub and [create a pull request]:

```shell
git push --set-upstream origin your-branch-name
```

If you don't have push access,
you may need to [fork the repo] and push there instead:

```shell
git remote add fork git@github.com:your-username/wingman.git
git push --set-upstream fork your-branch-name
```

A maintainer will get to your pull request and review the changes.
If all is well, they will merge your pull request into master.

### Testing

You may find it easier to develop alongside unit tests:

```shell
pnpm fe test --watch
```

Format your code once you're happy with it:

```shell
pnpm format
```

We run linting and testing in CI,
but consider running these commands locally for a faster feedback loop:

```shell
pnpm lint
pnpm test
```

### Running locally

Start local development servers:

```shell
pnpm fe start
```

## Releases

### Creating a changeset

We use [Changesets] to manage package releases.
You'll see a 🦋 bot gliding around pull requests.

You should write a changeset if you are changing the public Wingman interface,
which includes:

- Package code under [fe/lib](/fe/lib)
- npm dependencies

On the other hand,
a changeset is not necessary for:

- Documentation like the [README](/README.md)
- Example code under [fe/example](/fe/example)
- Internal refactoring that preserves the existing interface
- npm dev dependencies

```shell
pnpm changeset
```

The Changesets CLI is interactive and follows [semantic versioning]:

- Patch release `0.0.X`: fixes or tweaks to existing functionality
- Minor release `0.X.0`: new, backwards-compatible functionality
- Major release `X.0.0`: backwards-incompatible modification

The Changesets CLI will generate a Markdown file under [.changeset](/.changeset),
which you should include in your pull request.
It doesn't need to be part of the same commit as the rest of your changes.
Feel free to manually edit this file to include more details about your change.

### Publishing a release

When a pull request with a changeset is merged,
our CI workflow will create a new `Version Packages` PR.
The changesets are used to infer the next semantic version and to update the changelogs.

This PR may be left open to collate multiple changes into the next version.
A maintainer will merge it once ready,
and our [release](/.github/workflows/release.yml) GitHub Actions workflow will publish the associated GitHub release and npm package version.

### Publishing a prerelease

We currently have limited support for prereleases on the `beta` [dist-tag].
This can only be performed by a maintainer.

```shell
# revert beta branch to match master
git fetch origin
git switch beta
git reset --hard origin/master

# stage a beta release
pnpm changeset pre enter beta
pnpm changeset version
```

If previous betas have been released under the same semantic version,
you will need to manually bump the version suffixes in the package.json(s):

```diff
- "version": "4.0.0-beta.1",
+ "version": "4.0.0-beta.2",
```

Then, commit and push your changes:

```shell
git add --all
git commit --message 'Publish v4.0.0-beta.2'
git push --set-upstream origin beta
```

[#indirect]: https://seekchat.slack.com/channels/indirect
[changesets]: https://github.com/atlassian/changesets
[create a pull request]: https://github.com/seek-oss/wingman/compare
[developer site]: https://developer.seek.com
[dist-tag]: https://docs.npmjs.com/cli/dist-tag
[fork the repo]: https://github.com/seek-oss/wingman/fork
[readme design section]: https://github.com/seek-oss/wingman#design
[release notes]: https://github.com/seek-oss/wingman/releases
[seek api]: https://developer.seek.com/introduction
[semantic versioning]: https://semver.org/
[sku]: https://github.com/seek-oss/sku
[storybook]: https://seek-oss.github.io/wingman/
[submit an issue]: https://github.com/seek-oss/wingman/issues/new/choose
[windows subsystem for linux]: https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux
[wingman-fe]: https://www.npmjs.com/package/wingman-fe
