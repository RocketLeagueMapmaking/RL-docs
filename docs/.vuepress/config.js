module.exports = {
  title: 'DOCS',
  description: 'Rocket league maps with documentation. The biggest website for Rocket League map making',
  theme: 'default-prefers-color-scheme',
  icon: '/logo_rlmm_round_1440.png',
  // Only target browsers currently popular, avoiding polyfills and speeding up build time.
  // Disable if we want ES5 transpilation for IE.
  evergreen: true,
  themeConfig: {
    logo: '/logo_rlmm_round_1440.png',
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search...',
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'webbuildlucas/RL-docs/',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'GitHub',
    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    //  docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Edit this page on Github',
    head: [
      ['link', {
        rel: 'icon', type: "image/png",
        href: 'https://cdn.discordapp.com/attachments/713071168331972699/746411613791453274/logo_rlmm_round_1440.png',
      }],
      // ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', {name: 'theme-color', content: '#3eaf7c'}],
      ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
      ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
      ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
      ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
      ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
      ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
    ],
    smoothScroll: true,
    base: '/rl-docs/',
    sidebar: {
      '/beginner/': [
        // {
        //   title: 'Introduction',   // required
        //   // path: '/beginner/',      // optional, link of the title, which should be an absolute path and must
        // exist collapsable: false, // optional, defaults to true sidebarDepth: 1,    // optional, defaults to 1
        // children: [
        //   '' // This will load whatever file is named index.md within $ROOT/docs/beginner
        // ]},
        {
          title: 'Beginning',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '',
            'udk',
            'windows',
          ],
        }, {
          title: 'Installing UDK',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'quick_install',
            'installing',
            'dummy_classes',
          ],
        }, {
          title: 'Exploring UDK',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'project_setup',
            'udk_intro',
            'udk_editor',
            'content_browser',
            'sticky_walls',
          ],
        },
      ],
      '/guide/': [
        {
          title: 'Information',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '',
            'request',
          ],
        },
        {
          title: 'UDK Basics',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'udk_basics',
            'collidable_mesh',
            'rapid_test',
            'collidable_collisions',
            'owl',
            'materials',
            'lighting',
            'game_items',
            'boost',
            'details',
            'what_next',
          ],
        },
        {
          title: 'UDK Advanced',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'dummy_assets',
            'upgrading',
            'custom_material',
            'matinee',
            'KActors',
            'skeletal_mesh',
            'assets',
          ],
        },
        {
          title: 'Finishing',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'publishing',
            'playing',
          ],
        },
      ],
      '/kismet/': [
        {
          title: 'Kismet',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '',
            'kismet',
            'project',
            'trigger',
            'advanced',
          ],
        },
      ],
      '/modeling/': [
        {
          title: 'Other sources',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '',
            'other',
          ],
        },
        {
          title: 'Blender Basics',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'blender',
            'intro',
            'setup',
            'modeling',
            'fbx',
            'uv',
            'unwrapping',
            'texels',
            'resolution',
            'mipmaps',
          ],
        },
        {
          title: 'Blender Advanced',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            'animation',
            'modifiers',
            'curves',
          ],
        },
      ],
      '/textures/': [
        {
          title: 'Other sources',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '',
            'maps',
            'custom',
          ],
        },
      ],
    },
    nav: [
      // {
      //   text: 'Home',
      //   link: 'http://rocketleaguemapmaking.com/',
      //   rel:false,
      //   target:'_self'
      // },
      {
        text: 'Documentation',
        link: '/guide/',
      },
      {
        text: 'Guides',
        items: [
          {
            text: 'Starting',
            link: '/beginner/ready',
          },
          {
            text: '3D modeling',
            link: '/modeling/',
          }, {

            text: 'Kismet',
            link: '/kismet/',
          },
          {
            text: 'Textures',
            link: '/textures/',

          },

          {
            text: 'Play maps',
            link: '/guide/playing',
          },
          {
            text: 'Old guide',
            link: 'https://docs.google.com/document/d/166A68CLxWk0LxMZ4B9vsuBmIgbphLIMbRB0BCn3ezsc/edit#',
          },
          {
            text: 'Other guides',
            link: '/menu/guides',
          },
        ],
      },
      {
        text: 'More',
        items: [
          {
            text: 'Recources',
            items: [
              {
                text: 'Downloads',
                link: '/menu/downloads',
                // }, {
                //   text:'cheat sheets',
                //   link:'/menu/cheats'
              },
              {
                text: 'Kismet snippets',
                link: 'https://github.com/RocketLeagueMapmaking/Kismet',
              },
              {
                text: 'Communities',
                link: '/menu/communities',
              },
            ],
          }, {
            text: 'Other',
            items: [
              {
                text: 'How to contribute',
                link: '/menu/contribute',
              },
              {
                text: 'Special thanks',
                link: '/index.html#special-thanks',
              },
              {
                text: 'Contact us',
                link: '/menu/contact',
              },
              {
                text: 'FAQ',
                link: '/menu/faq',
              },
            ],
          }, {
            text: 'Versions',
            items: [
              {
                text: 'UDK 2013/2015',
                link: '/guide/',
              },
              {
                text: 'V2',
                link: '/v2/',
              },
            ],
          },
        ],
      },
    ],
    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/last-updated',
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
    ],
  },
};
