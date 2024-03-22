import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import head from './head'
import sidebar from './sidebar'
import nav from './navbar'

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

    cleanUrls: true,
    appearance: true,
    lastUpdated: true,
    markdown: {
        headers: true,
    },

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
            text: 'View this page on GitHub',
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
