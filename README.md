# Turborepo nuxt starter

[![CI/CD](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/actions/workflows/ci.yaml/badge.svg)](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/actions/workflows/ci.yaml)
[![App](https://img.shields.io/badge/App-Preview-blue?logo=netlify&logoColor=white)](https://turborepo-nuxt-boilerplate-web-main.netlify.app/)
[![UI](https://img.shields.io/badge/UI(Histoire)-Preview-blue?logo=netlify&logoColor=white)](https://turborepo-nuxt-boilerplate-ui-main.netlify.app/)
[![Docs](https://img.shields.io/badge/Docs(Vitepress)-Preview-blue?logo=netlify&logoColor=white)](https://turborepo-nuxt-boilerplate-docs-main.netlify.app/)

This is a monorepo with Nuxt, Histoire, Vitest & VitePress as a starter for any project that can be easily extended.
You can also find additional branches:
- [TailwindCSS](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/tailwind)
- [TailwindCSS + TailwindUI](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/tailwindui)
- [Unocss](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss)
- [Unocss + Anu](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss-anu)
- [Unocss + Vuetify](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/unocss-vuetify)
- [AdonisJS](https://github.com/gurvan-guss/turborepo-nuxt-boilerplate/tree/adonis)

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: a [Nuxt.js](https://nuxtjs.org) app
- `docs`: a [VitePress](https://vitepress.vuejs.org/) app
- `ui`: a stub Nuxt component library with [Histoire](https://histoire.dev/)
- `config`: `eslint` configuration (using [@antfu/eslint-config](https://github.com/antfu/eslint-config))
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting

### Setup

To install all dependencies, run the following command:

```
pnpm install
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

### Lint

To check & fix linter through all apps and packages, run the following command:

```
pnpm run lint
pnpm run lint:fix
```

### Test

To run tests through all apps and packages, run the following command:

```
pnpm run test
```

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
pnpm dlx turbo link
```

Use a custom remote cache server [turbo-remote-cache](https://github.com/ducktors/turborepo-remote-cache)

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
