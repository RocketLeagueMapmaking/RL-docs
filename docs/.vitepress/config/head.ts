import type { HeadConfig } from 'vitepress'

export default <HeadConfig[]>[
    ['meta',
        {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,maximum-scale=5,minimal-ui'
        }
    ],
    ['link',
        {
            rel: 'icon',
            href: '/icons/logo_rlmm_round_144.png'
        }
    ],
    ['link',
        {
            rel: 'manifest',
            href: '/manifest.json'
        }
    ],
    ['meta',
        {
            name: 'theme-color',
            content: '#3eaf7c'
        }
    ],
    ['meta',
        {
            name: 'mobile-web-app-capable',
            content: 'yes'
        }
    ],
    ['meta',
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }
    ],

    // OG links
    // Not including the special Twitter links, because X...

    ['meta',
        {
            property: 'og:type',
            content: 'website',
        }
    ],
    ['meta',
        {
            property: 'og:url',
            content: 'https://rocketleaguemapmaking.com/',
        }
    ],
    ['meta',
        {
            property: 'og:title',
            content: 'RLMM',
        }
    ],
    ['meta',
        {
            property: 'og:description',
            content: '',
        }
    ],
    // TODO: create a preview image
    // ['meta',
    //     {
    //         property: 'og:image',
    //         content: '',
    //     }
    // ],
]
