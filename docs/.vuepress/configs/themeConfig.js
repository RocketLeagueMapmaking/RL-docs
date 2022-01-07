const nav = require('./navbar.js')
const sidebar = require('./sidebar.js')

module.exports = {
    overrideTheme: 'dark',
    logo: '/icons/logo_rlmm_round_144.png',
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search...',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'RocketLeagueMapmaking/RL-docs/',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',
    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    //  docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,

    sidebar,
    nav
}
