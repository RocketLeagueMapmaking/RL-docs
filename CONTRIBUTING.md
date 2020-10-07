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
- Always proofread your submissions. PRs that contain spelling mistakes or incorrect grammar will be denied.
- When naming your readme files and folders, use [snake_case](https://en.wikipedia.org/wiki/Snake_case) for file naming 
conventions.
- If you are adding image resources, pay attention to their file size. 
  - Images above 1MB will not be accepted, and anything above 500KB should be reviewed.

# Development and local testing
The project utilises `vuepress` in order to create pages for our documentation, running on a Node backend.

## Dependencies
1. Install [Node v10+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (or later).
  - `node --version` should show at least `v10.15.3`. Lower versions have not been tested but may also work.
  - `npm --version` should show at least `6.9.0`. Lower versions have not been tested but may also work.
2. Clone the repository to your machine.
3. Execute `npm install` from the root of the repository.

## Execution
1. Execute `npm run docs:dev`.
2. Open the URL specified within the output of that command.
