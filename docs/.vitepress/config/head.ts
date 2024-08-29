import type { HeadConfig } from 'vitepress'

import { getCollectionItemEditLink } from './cms'
import { WEBSITE_LOGO_PATH, WEBSITE_URL } from './shared'

import config from './data/config.json'

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
            href: WEBSITE_LOGO_PATH,
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
    ['script',
        {},
        `const ${getCollectionItemEditLink.name} = ${getCollectionItemEditLink}`
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
            content: WEBSITE_URL,
        }
    ],
    ['meta',
        {
            property: 'og:title',
            content: config.title,
        }
    ],
    ['meta',
        {
            property: 'og:description',
            content: config.description,
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
