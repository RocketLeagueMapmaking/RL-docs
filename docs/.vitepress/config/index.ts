import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import head from './head'
import { buildEnd } from './hooks'
import nav from './navbar'
import rewrites from './rewrites'
import sidebar from './sidebar'

export default defineConfigWithTheme<ThemeConfig>({
    title: 'RLMM',
    description: 'Guides, Resources, Maps, and more for making custom maps',
    head,

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
    rewrites: rewrites({
        base: 'docs/',
        regexp: /^(\d{2}_)/,
        nestedFolders: [
            { name: 'docs/guide/', prefix: 'guide/' },
        ],
        folders: [
            'cheatsheet',
            'essential',
        ],
    }),

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
