import type { DefaultTheme } from 'vitepress'

import {
    GITHUB_DEFAULT_BRANCH,
    GITHUB_REPOSITORY_URL,
} from './shared'

export default <DefaultTheme.NavItem[]>[
    {
        text: 'Essentials',
        activeMatch: '/essential/',
        link: '/essential/'
    },

    {
        text: 'Guide',
        activeMatch: '/guide/',
        items: [
            {
                text: 'UDK',
                items: [
                    {
                        text: 'Editor',
                        activeMatch: '/guide/udk/',
                        link: '/guide/udk/start'
                    },
                    {
                        text: 'Kismet',
                        activeMatch: '/guide/kismet/',
                        link: '/guide/kismet/kismet'
                    },
                    {
                        text: 'Textures',
                        activeMatch: '/guide/textures/',
                        link: '/guide/textures/textures'
                    },
                    {
                        text: 'Multiplayer',
                        activeMatch: '/guide/multiplayer/',
                        link: '/guide/multiplayer/multiplayer'
                    },
                    {
                        text: 'Decryption',
                        activeMatch: '/guide/decryption/',
                        link: '/guide/decryption/'
                    },
                    {
                        text: 'Miscellaneous',
                        activeMatch: '/guide/misc/',
                        link: '/guide/misc/misc'
                    }
                ]
            },
            {
                text: 'Blender',
                items: [
                    {
                        text: 'Guide',
                        activeMatch: '/blender/(?!fbx)',
                        link: '/guide/blender/blender'
                    },
                    {
                        text: 'Exporting to UDK',
                        link: '/guide/blender/fbx'
                    },
                ]
            }
        ]
    },

    {
        text: 'Resources',
        activeMatch: '/(cheatsheet|faq|tipstricks|resources)/',
        items: [
            {
                text: 'Cheatsheets',
                activeMatch: '/cheatsheet/',
                link: '/cheatsheet/'
            },
            {
                text: 'Downloads',
                link: '/resources/downloads'
            },
            {
                text: 'FAQ',
                activeMatch: '/faq/',
                link: '/faq/'
            },
            {
                text: 'References',
                activeMatch: '/resources/references/',
                link: '/resources/references/guide'
            },
            {
                text: 'Tips and Tricks',
                activeMatch: '/tipstricks/',
                link: '/tipstricks/'
            },
            {
                text: 'Community',
                items: [
                    {
                        text: 'Guides',
                        link: '/resources/guides'
                    },
                    {
                        text: 'Network',
                        link: '/resources/modding_network'
                    },
                    {
                        text: 'Tools',
                        link: '/resources/tools'
                    },
                    {
                        text: 'Steam workshop',
                        link: 'https://steamcommunity.com/app/252950/workshop/'
                    }
                ]
            }
        ]
    },

    {
        text: 'More',
        activeMatch: '/more/',
        items: [
            {
                text: 'About',
                link: '/more/about'
            },
            {
                text: 'Contact',
                link: '/more/contact'
            },
            {
                text: 'Events',
                link: '/more/events',
            },
            {
                text: 'Roadmap',
                link: '/more/roadmap'
            },
            {
                text: 'UE5',
                link: '/more/ue5'
            },
            {
                text: 'Contribute',
                items: [
                    {
                        text: 'Contributing guide',
                        link: `${GITHUB_REPOSITORY_URL}/blob/${GITHUB_DEFAULT_BRANCH}/CONTRIBUTING.md`
                    },
                    {
                        text: 'GitHub',
                        link: GITHUB_REPOSITORY_URL
                    },
                    {
                        text: 'Patreon',
                        link: 'https://www.patreon.com/rocketleaguemapmaking'
                    }
                ]
            }
        ]
    },

    {
        component: 'SettingsNav',
        props: {
            link: '/settings',
            icon: 'fa6-solid:gear',
            label: 'Guide settings',
        },
    },
]
