import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import head from './head'
import { buildEnd } from './hooks'
import nav from './navbar'
import createRewrites from './rewrites'
import sidebar from './sidebar'

const rewrites = createRewrites({
    base: 'docs/',
    regexp: /^(\d{2}_)/,
    folders: [
        'cheatsheet',
        { name: 'guide', nested: true },
        'essential',
    ],
})

export default defineConfigWithTheme<ThemeConfig>({
    title: 'RLMM',
    description: 'Guides, Resources, Maps, and more for making custom maps',
    head,

    sitemap: {
        hostname: 'https://rocketleaguemapmaking.com',
    },
    srcExclude: [
        '**/flowchart_questions/*.md',
    ],

    vite: {
        publicDir: '.vitepress/public',
    },

    // Routing
    // Enable rewrites and cleanUrls to have: /guide/udk/00_start.html -> /guide/udk/start

    // Removes file extensions from routes
    cleanUrls: true,
    // Removes numbered prefixes from routes
    // Does not redirect prefixed routes in builds
    rewrites,
    // Make sure this is always set to false to detect incorrect (internal) links!
    ignoreDeadLinks: false,

    // Page features
    appearance: true,
    lastUpdated: true,
    markdown: {
        headers: true,
    },

    // Hooks
    buildEnd,

    // Theme configuration
    themeConfig: {
        sidebar,
        nav,

        logo: {
            src: '/icons/logo_rlmm_round_144.png',
        },

        footer: {
            copyright: `2020 - ${new Date().getFullYear()}`,
            message: [
                'RLMM Guide',
                'Made by <a href="https://twitter.com/RH_MrSwaggles">Mr. Swaggles</a>',
            ].join(' | '),
        },

        // Links
        externalLinkIcon: true,
        editLink: {
            pattern: 'https://github.com/rocketleaguemapmaking/rl-docs/tree/master/docs/:path',
            text: 'View on GitHub',
        },
        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/PWu3ZWa' },
        ],

        router: {
            redirects: rewrites,
        },

        // Search
        search: {
            provider: 'algolia',
            options: {
                appId: 'L775MZSWZZ',
                apiKey: '64da7416b8e1c018d8c92161c85355ac',
                indexName: 'rocketleaguemapmaking',
                placeholder: 'Search...',
            }
        },
    }
})
