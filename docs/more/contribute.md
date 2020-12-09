---
title: Contribute
tags:
  - contribute
  - info
---

# Contribute

Thank you for helping us to try to create a complete guide for Rocket League Mapmaking. Contribute enough, and you will secure a place in the [special thanks](../more/about).

If you have ideas for the website, you can reach us [here](../more/contact) or on [github discussions](https://github.com/RocketLeagueMapmaking/RL-docs/discussions)

## Financial Contribution

You can help us by donating via:
- [PayPal]() (eventually)

If you want to add that money to a prize pool for a contest, say it in the description and it's done!

## This Guide

You may contribute by editing a page or suggesting new content.

:::tip Looking for volunteers
Do you want to help improve this guide? Contact me on discord (ghostrider-05#8461) and we can make some awesome features! (Experience with `Vue.js` is a plus)
:::

:::warning Bounty Board
These are some of the great unsolved mysteries of Rocket League Mapmaking. Contact us if you think you have cracked one of these mysteries:
* Non-kismet code
* Unlimited map size (in multiplayer)
* Truly custom materials (not MIC)

Have you discovered a new mystery? Share it and it can go up here!
:::

### Edit Existing Content

To edit an existing page, click the link in the footer: `Edit this page on GitHub`.  
Follow all instructions in the section [Add new content](./contribute.html#add-new-content) to make sure your changes are accepted.

### Suggest New Content

Requests may be as simple as "add a section about a special mode", or "add a page about a specific kismet node". We'll do our best to fulfill all requests, as long as they're reasonable. Github discussions can also be used for more general questions and/or suggestions. 

1. Make sure that you've looked at the [faq](../faq/), [guides](../guide/guides), [future content](../../more/roadmap.html#upcoming-content) and [bounty board](./contribute.html#this-guide) before making a request. It might already exist!
2. Make a request; go to [the repo's issue tracker](https://github.com/webbuildlucas/RL-docs/issues) and [create a new issue.](https://github.com/webbuildlucas/RL-docs/issues)
3. Title it appropriately, and let us know exactly what you mean inside the issue description. 

### Add new content

Contribution should be performed through a number of simple steps:
1. Find an issue to fix.
2. Fork the repository.
3. Create a branch for your issue.
4. Make the necessary changes to the repository.
5. Commit and publish your changes.
6. Create a pull request into the main repository from your fork.
7. Address any comments.
8. Branch will hopefully be accepted and merged.

:::details Guidelines
We have some minor style requirements for documentation additions:
- Always proofread your submissions. PRs that contain spelling mistakes or incorrect grammar will be denied.
- When naming your readme files and folders, use [snake_case](https://en.wikipedia.org/wiki/Snake_case) for file naming 
conventions.
- If you are adding image resources, pay attention to their file size. 
  - Images above 1MB will not be accepted, and anything above 500KB should be reviewed.
:::

:::details Development and local testing
The project utilises `vuepress` in order to create pages for our documentation, running on a Node backend.

## Dependencies
1. Install [Node v10+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (or later).
  - `node --version` should show at least `v10.15.3`. Lower versions have not been tested but may also work.
  - `npm --version` should show at least `6.9.0`. Lower versions have not been tested but may also work.
2. Clone the repository to your machine.
3. Execute `npm install` from the root of the repository.

## Execution
1. Execute `npm run docs:dev`.
2. Open the URL specified within the output of the command.

## Components
Vuepress makes use of [Vue components](https://vuepress.vuejs.org/guide/using-vue.html#using-components). Vue components are registered inside `/docs/.vuepress/components/`. Make sure that the name of the file matches the component's name. 

Example: `MyComponent.vue` can be called with `<Mycomponent/>` 
:::

### Add your Kismet code

Visit [the Kismet Snippet Library](https://github.com/RocketLeagueMapmaking/Kismet) and add your own snippet.









