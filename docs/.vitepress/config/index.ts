import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import cms from './cms/'
import head from './head'
import { buildEnd } from './hooks'
import nav from './navbar'
import createRewrites from './rewrites'
import sidebar from './sidebar'
import {
    DISCORD_INVITE,
    WEBSITE_LOGO_PATH,
} from './shared'

const rewrites = createRewrites({
    base: 'docs/',
    regexp: /^(\d{2}_)/,
    nestedFolders: [
        { name: 'docs/guide/', prefix: 'guide/' },
    ],
    folders: [
        'cheatsheet',
        'essential',
    ],
})

export default defineConfigWithTheme<ThemeConfig>({
    title: 'RLMM',
    description: 'Guides, Resources, Maps, and more for making custom maps',
    head,

    srcExclude: [
        '**/flowchart_questions/*.md',
    ],
    vite: {
        publicDir: '.vitepress/public',
        plugins: [
            cms,
            {
                name: 'make-edit-link-external',
                enforce: 'pre',
                transform: (code, id) => {
                    if (id.endsWith('VPDocFooter.vue')) {
                        const link = '<VPLink class="edit-link-button"'
                        return code.replace(link, link + ' target="_self"')
                    }
                },
            }
        ],
    },

    // Routing
    // Enable rewrites and cleanUrls to have: /guide/udk/00_start.html -> /guide/udk/start

    // Removes file extensions from routes
    cleanUrls: true,
    // Removes numbered prefixes from routes
    // Does not redirect prefixed routes in builds
    rewrites,

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
            src: WEBSITE_LOGO_PATH,
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
            pattern: (page) => {
                const parts = page.filePath.slice(0, -'.md'.length).split('/')
                const collectionName = parts.at(-2) + (page.frontmatter.advanced ? '_advanced' : ''), entryName = parts.at(-1)

                return `/admin/index.html#/edit/${collectionName}/${entryName}`
            },
            text: 'Edit this page',
        },
        socialLinks: [
            { icon: 'discord', link: DISCORD_INVITE },
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
