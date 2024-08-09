# Workflow

Hi, we (as [guide maintainers](./README.md)) are really exited that you are interested in contributing to this guide. Before contributing, decide what type of contribution you are looking to make:

- [Writing guide pages](#content-editing).
- Writing code. Before starting make sure to read:
  - [The development workflow](#development)
  - [The project guidelines](#guidelines)
  - [Development setup guide](#development-and-local-testing)
- Becoming a team member: send a message to Mr. Swaggles or ghostrider-05 on Discord

## Content editing

To make changes to the content of the guide, we recommend to use the CMS ([Content Management System](https://en.wikipedia.org/wiki/Content_management_system)), available on [`/admin/`](https://rocketleaguemapmaking.com/admin/) or by clicking the `Edit this page` link on a guide page, to make your contributions through the following steps:

1. [Create a GitHub account](https://github.com/join)
2. Log in using your GitHub account on the [guide CMS](https://rocketleaguemapmaking.com/admin/).
3. Write guide pages while following [the guidelines](#guidelines).
4. When finished, go to [the workflow UI](https://rocketleaguemapmaking.com/admin/#/workflow) and move your changes to the `In Review` column.
5. A maintainer will review your changes and merge the pull request on GitHub.

## Development

Code contributions should be performed through the following steps:

1. Find an issue to fix.
2. Fork the repository.
3. Create a branch for your issue.
4. Make the necessary changes to the repository.
5. Commit and publish your changes.
6. Create a pull request into the main repository from your fork.
7. Address any comments.
8. Branch will hopefully be accepted and merged.

# Guidelines

We have some minor style requirements for documentation additions:

- Always proofread your submissions. PRs that contain spelling mistakes or incorrect grammar will be denied.
- When naming your readme files and folders, use [snake_case](https://en.wikipedia.org/wiki/Snake_case) for file naming conventions.
- If you are changing / adding content related to UDK, check your changes in UDK (only follow the content you have written and not your own knowledge). Any PR with changes in UDK should be reviewed.
- If you are adding image resources:
  - pay attention to their file size: images above 5MB will not be accepted, and anything above 1MB should be reviewed.
  - Images should be added in `/docs/.vitepress/public/images` and icons in `/docs/.vitepress/public/icons`
- [Create an issue](https://github.com/rocketleaguemapmaking/RL-docs/issues/new/choose) for small contributions (such as fixing typos or broken links)

# Development and local testing

The project utilises `vitepress` in order to create pages for our documentation, running on a Node backend.

## Dependencies

1. Install [Node v18+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (or later). You can use [nvm](https://github.com/nvm-sh/nvm) to easily update Node.

- `node --version` should show at least `v18.19.0`. Lower versions have not been tested but may also work.
- `npm --version` should show at least `10.2.3`. Lower versions have not been tested but may also work.

2. Clone the repository to your machine.
3. Execute `npm install` from the root of the repository.

## Execution

1. Execute `npm run docs:dev`.
2. Open the URL specified within the output of the command.

> [!NOTE]
> To preview the built website:
>
> 1. Execute `npm run docs:build` and `npm run docs:preview`.
> 2. Open the URL specified within the output of the command.

## Sharing local snapshot

To share a local build of the current branch:

1. Execute `npm install` from the root of the repository.
2. Log into the rlmm / your own Cloudflare account with `npx wrangler login` and complete the oauth2 flow.
3. Execute `npm run docs:build`
4. Execute `npx wrangler pages publish ./docs/.vitepress/dist/ --project-name=rocketleaguemapmaking --branch=<branch>`.
Replace `<branch>` with the name of the current branch.

## Theme

This guide uses a custom guide theme. The theme [`theme-rlmm`](https://theme-rlmm.pages.dev) is built on [VitePress](https://vitepress.dev) with Vue.js 3 and Vite.

- Style theme modifications should be in `docs/.vitepress/theme/`. The theme should be only exported from the `@rocketleaguemapmaking/theme-rlmm` package!
  - Any component, code or other changes should be in the [theme repository](https://github.com/rocketleaguemapmaking/theme-rlmm)
- Feature requests and issues with the theme (components) should be opened in the [theme repository](https://github.com/rocketleaguemapmaking/theme-rlmm)
