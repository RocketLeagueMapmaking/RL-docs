module.exports = {
<<<<<<< HEAD
  title: 'DOCS',
  description: 'Rocket league maps with documentation. The biggest website for Rocket League map making.',
=======
  title: 'RLMM',
  description: 'Guides, Resources, Maps, and More',
>>>>>>> swaggles-revisions
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
     repo: 'RocketLeagueMapmaking/RL-docs/',
     // Customising the header label
     // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
     repoLabel: 'Github',
     docsDir:'docs',
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
      ['link', {rel: 'icon', type: 'image/png', href: '/logo_rlmm_round_1440.png'}],
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
    sidebar:{
      '/beginner/':
    [
      // {
      //   title: 'Introduction',   // required
      //   // path: '/beginner/',      // optional, link of the title, which should be an absolute path and must exist
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //   ''
     
      // ]},
      {
        title: 'Beginning',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'ready',
          'udk',
          'windows',
        ]
      },{
        title: 'Installing UDK',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'quickinstall',
        'installing',
        'dummyclasses',
        ]
      },{
        title: 'Exploring UDK',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'projectsetup',
        'udk_intro',
        'udk_editor',
        'content_browser',
        'sticky-walls'
        ]
      }
    ],'/guide/':[
      {
        title: 'Information',  
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
          'request',
        ]
      },
      {
        title: 'UDK Basics',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'udk-basics',
          'collideable_mesh',
          'rapid_test',
          'collideable_collisions',
          'owl',
          'materials',
          'lighting',
          'game_items',
          'boost',
          'details',
          'what_next',
          
        ]
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
          'assets'
        ]
      },
      {
        title: 'Finishing',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'publishing',
           'playing'
        ]
      }
    ],'/kismet/':[
      {
        title: 'Kismet',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
           'kismet',
           'project',
           'trigger',
           'advanced'
        ]
      }
    ],'/modeling/':[
      {
        title: 'Other sources',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'csg',
           'other',
           
        ]
      },
      {
        title: 'Blender Basics',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
           'intro',
           'setup',
           'modeling',
           'fbx',
           'uv',
           'unwrapping',
           'texels',
           'resolution',
           'mipmaps'
        ]
      },
      {
        title: 'Blender Advanced',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'animation',
           'modifiers',
           'curves'
        ]
      }
    ],'/textures/':[
      {
        title: 'Other sources',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
           'maps',
           'custom'
        ]
      }
    ],
    '/more/':[
      {
        title: 'More Information',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
           'about',
           'roadmap',
           'contribute',
           'psyonix'
        ]
      }
    ]
  },

    nav: [
      {
        text: 'Documentation',
        link: '/guide/',
        items: [
          {
            text: 'Essential',
            link: '/beginner/ready'
          },
          {
            text: 'FAQ',
            link: '/beginner/ready'
          },
          {
            text: 'Guides',
            link: '/beginner/ready'
          },
          {
            text: 'Cheatsheets',
            link: '/cheatsheet/'
          }
        ]
      },

      {
        text: 'Resources',
        link: '/resources/',
        items: [
          {
            text: 'Downloads',
            link: '/menu/downloads'
          },
          {
            text: 'FAQ',
            link: '/menu/faq'
          },
          {
            text: 'References',
            link: '/menu/downloads'
          },
          {
            text: 'Modding Network',
            link: '/resources/moddingnetwork'
          }
        ]
      },

      {
        text: 'More',
        link: '/more/',
        items: [
          {
            text: 'About',
            link: '/more/about'
          },
          {
            text: 'Roadmap',
            link: '/more/roadmap'
          },
          {
            text: 'Contribute',
            link: '/more/contribute'
          },
          {
            text: 'Psyonix Links',
            link: '/more/psyonix'
          }
        ]
      }
    ],

    plugins: [
      '@vuepress/active-header-links',
      '@vuepress/last-updated',
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ]
  }
};
