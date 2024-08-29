import { defineConfigWithTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import { frontmatterKeys, homeFrontmatterKeys } from '../theme/data'

import { getCollectionItemEditLink } from './cms/'
import head from './head'
import createHooks from './hooks'
import nav from './navbar'
import sidebar from './sidebar'
import {
    DISCORD_INVITE,
    WEBSITE_LOGO_PATH,
    WEBSITE_URL,
} from './shared'
import vite from './vite'

import config from './data/config.json'

import createRewrites from './util/rewrites'

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
    title: config.title,
    description: config.description,
    head,

    sitemap: {
        hostname: WEBSITE_URL,
    },
    srcExclude: [
        '**/flowchart_questions/*.md',
    ],

    vite,

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
    ...createHooks({
        frontmatterValidation: {
            required: [
                {
                    path: 'title',
                    ignore: [
                        '/essential/flowchart_questions/',
                    ],
                }
            ],
            using: [
                { keys: frontmatterKeys },
                { keys: homeFrontmatterKeys, valid: ['/'] },
                { keys: ['teams'], valid: ['/more/about'] },
                // Custom features
                {
                    keys: ['collision_types', 'next_actions'],
                    valid: ['/guide/udk/04_map_test', '/guide/udk/06_owl'],
                },
            ],
        }
    }),

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
            // Function must be exported in head since this is run client-side
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
