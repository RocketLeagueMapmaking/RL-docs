import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import cms, { getCollectionItemEditLink } from './cms/'
import head from './head'
import { buildEnd } from './hooks'
import nav from './navbar'
import createRewrites from './rewrites'
import sidebar from './sidebar'
import {
    DISCORD_INVITE,
    WEBSITE_LOGO_PATH,
} from './shared'

import config from './data/config.json'

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
    title: config.title,
    description: config.description,
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
            message: config.footer.message,
        },

        // Links
        externalLinkIcon: true,
        editLink: {
            pattern: getCollectionItemEditLink,
            text: config.editLinkText,
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
