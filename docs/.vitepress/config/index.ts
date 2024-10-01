import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { type ThemeConfig } from '@rocketleaguemapmaking/theme-rlmm'

import { getCollectionItemEditLink } from './cms/'
import head from './head'
import createHooks from './hooks'
import nav from './navbar'
import sidebar from './sidebar'
import {
    WEBSITE_LOGO_PATH,
    WEBSITE_URL,
} from './shared'
import vite from './vite'

import config from './data/config.json'
import frontmatterValidation from './data/frontmatter'
import { banners, notifications } from './data/notifications.json'

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
    srcExclude: config.srcExclude,

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
        image: {
            lazyLoading: true,
        },
    },

    // Hooks
    ...createHooks({
        imageCaptions: {
            enabled: true,
            className: 'custom-img-caption',
        },
        frontmatterValidation,
    }),

    // Theme configuration
    themeConfig: {
        sidebar,
        nav,

        logo: {
            src: WEBSITE_LOGO_PATH,
        },

        footer: config.footer,

        // Links
        externalLinkIcon: true,
        editLink: {
            // Function must be exported in head since this is run client-side
            pattern: getCollectionItemEditLink,
            text: config.editLinkText,
        },
        socialLinks: <DefaultTheme.SocialLink[]>config.socialLinks,

        // Theme-rlmm options
        router: {
            redirects: rewrites,
        },

        banner: {
            data: banners,
        },

        notifications: {
            data: notifications,
        },

        storage: {
            pageClasses: {
                'image-captions': 'use-custom-image-captions',
            },
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
