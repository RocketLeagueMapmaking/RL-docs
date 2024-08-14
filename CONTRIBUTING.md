# Overview

Contribution should be performed through a number of simple steps:

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

- Always proofread your submissions. PRs that contain spelling mistakes or incorrect grammar will be requested for changes.
- All checks must pass before the pull request can be merged.
- When adding folders:
  - use lowercase for folder naming conventions.
  - add an `index.md` file is present in all new `/docs/` folders, if this is needed. Usually you would describe the content in this folder or some general content that does not need a separate file.
- When naming your files:
  - use [snake_case](https://en.wikipedia.org/wiki/Snake_case) for file naming conventions. Only use lowercase for TypeScript files.
  - If you are adding markdown files in the `docs` folder:
    - use `\d{2}_([a-z_])*.md` for naming all other files in the `/cheatsheet/`, `/essential/` and `/guide/**/` folders.
    - add the following frontmatter to new files:
      - `title` (`string`): The topic of the current page.
      - `advanced` (`boolean`): Whether this page is an advanced guide. Only needed on pages when a folder has an advanced section (`/guide/blender/` and `/guide/udk/`).
- If you are changing / adding content related to UDK, check your changes in UDK (only follow the content you have written and not your own knowledge). Any PR with changes in UDK should be reviewed.
- If you are adding image resources:
  - pay attention to their file size: images above 1MB will fail the tests and should be reviewed. Use an online compressor tool or [Windows PowerToys' Image resizer](https://learn.microsoft.com/en-us/windows/powertoys/image-resizer) to make sure that the file size is below the limit.
  - Images should be added in `/docs/.vitepress/public/images/{section}/` and icons in `/docs/.vitepress/public/icons`.
  - Images and icons should have relevant file names to their content and be named in snake_case. Icons should also be prefixed by `logo_`.
  - Images are not allowed directly in `/images/`, `/images/blender/` and `/images/udk/`, only the subdirectories of those folders.
  - Image references in markdown should [have a good alt text](https://supercooldesign.co.uk/blog/how-to-write-good-alt-text). They can also have [a title](https://www.markdownguide.org/basic-syntax/#images-1) with a comment or small joke.
- [Create an issue](https://github.com/rocketleaguemapmaking/RL-docs/issues/new/choose) for small contributions (such as fixing typos or broken links).

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
2. Log into the RLMM / your own Cloudflare account with `npx wrangler login` and complete the oauth2 flow.
3. Execute `npm run docs:build`
4. Execute `npx wrangler pages deploy ./docs/.vitepress/dist/ --project-name=rocketleaguemapmaking --branch=<branch>`.
Replace `<branch>` with the name of the current branch.

## Theme

This guide uses a custom guide theme. The theme [`theme-rlmm`](https://theme-rlmm.pages.dev) is built on [VitePress](https://vitepress.dev) with Vue.js 3 and Vite.

- Any theme modification should be in `docs/.vitepress/theme/`
- Feature requests and issues with the theme (components) should be opened in the [theme repository](https://github.com/rocketleaguemapmaking/theme-rlmm)
