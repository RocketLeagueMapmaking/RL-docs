import type { HeadConfig } from 'vitepress'

import { WEBSITE_LOGO_PATH } from './shared'

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
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }
    ],
    ['meta',
        {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }
    ],
    ['link',
        {
            rel: 'apple-touch-icon',
            href: '/icons/apple-touch-icon-152x152.png'
        }
    ],
    ['link',
        {
            rel: 'mask-icon',
            href: '/icons/safari-pinned-tab.svg',
            color: '#3eaf7c'
        }
    ],
    ['meta',
        {
            name: 'msapplication-TileImage',
            content: '/icons/msapplication-icon-144x144.png'
        }
    ],
    ['meta',
        {
            name: 'msapplication-TileColor',
            content: '#000000'
        }
    ],
]
