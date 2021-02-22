module.exports = {
  title: 'RLMM',
  description: 'Guides, Resources, Maps, and More',
  theme: 'default-prefers-color-scheme',
  icon: '/icons/logo_rlmm_round_144.png',
  // Only target browsers currently popular, avoiding polyfills and speeding up build time.
  // Disable if we want ES5 transpilation for IE.
  evergreen: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/docs/.vuepress/public/images/',
        '@icons': '/docs/.vuepress/public/icons/'
      }
    }
  },
  head: [
    ['meta',{name:"viewport", content:"width=device-width,initial-scale=1,maximum-scale=5,minimal-ui"}],
    ['link', {rel: 'icon', href: '/icons/logo_rlmm_round_144.png'}],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
    ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ],
  themeConfig: {
    defaultTheme: 'dark',
    logo: '/icons/logo_rlmm_round_144.png',
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search...',
     // Assumes GitHub. Can also be a full GitLab url.
     repo: 'RocketLeagueMapmaking/RL-docs/',
     // Customising the header label
     // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
     repoLabel: 'GitHub',
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
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,
    base: '/rl-docs/',
    sidebar:{
      '/essential/':
    [
      // {
      //   title: 'Introduction',   // required
      //   // path: '/essential/',      // optional, link of the title, which should be an absolute path and must exist
      //   collapsable: false, // optional, defaults to true
      //   sidebarDepth: 1,    // optional, defaults to 1
      //   children: [
      //   ''
     
      // ]},
      {
        title: 'Mapmaking Essentials',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
          '01_flowchart',
          '02_clarifications'
        ]
      },{
        title: 'Installing UDK',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '03_installing',
          '04_dummy_classes',
          '05_project_setup'
        ]
      },{
        title: 'Exploring UDK',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '06_udk_intro',
          '07_udk_editor',
          '08_content_browser',
          '09_sticky_walls'
        ]
      }
    ],'/guide/':[
      {
        title: 'Information',  
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          ''
        ]
      },

      {
        title: 'UDK Basics',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/udk/00_start',
          '/guide/udk/01_csg',
          '/guide/udk/02_udk_basics',
          '/guide/udk/03_collidable_mesh',
          '/guide/udk/04_map_test',
          '/guide/udk/05_collidable_collisions',
          '/guide/udk/06_owl',
          '/guide/udk/07_materials',
          '/guide/udk/08_lighting',
          '/guide/udk/09_game_items',
          '/guide/udk/10_map_settings',
          '/guide/udk/11_volumes',
          '/guide/udk/12_boost',
          '/guide/udk/13_interlude_next',
          '/guide/udk/14_interlude_test'
          
        ]
      },

      {
        title: 'Blender Basics',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/blender/01_blender',
          '/guide/blender/02_intro',
          '/guide/blender/03_setup',
          '/guide/blender/04_modeling',
          '/guide/blender/05_fbx',
          '/guide/blender/06_uv',
          '/guide/blender/07_unwrapping',
          '/guide/blender/08_resolution',
          '/guide/blender/09_mipmaps',
          '/guide/blender/10_interlude_other',
        ]
      },

      {
        title: 'UDK Advanced',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/udk/15_dummy_assets',
          '/guide/udk/16_upgrading',
          '/guide/udk/17_custom_material',
          '/guide/udk/18_matinee',
          '/guide/udk/19_kactors',
          '/guide/udk/20_skeletal_mesh',
          '/guide/udk/21_extra_modes',
          '/guide/udk/22_fxactors',
          '/guide/udk/23_interfaces',
          '/guide/udk/24_physics',
          '/guide/udk/25_particles',
          '/guide/udk/26_crowds'
        ]
      },

      {
        title: 'Kismet',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/kismet/01_kismet',
          '/guide/kismet/02_project',
          '/guide/kismet/03_trigger',
          '/guide/kismet/04_tagame',
          '/guide/kismet/05_sound',
          '/guide/kismet/06_advanced'
        ]
      },

      {
        title: 'Blender Advanced',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/blender/11_animation',
          '/guide/blender/12_modifiers',
          '/guide/blender/13_curves'
        ]
      },

      {
        title: 'Textures',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/textures/01_textures',
          '/guide/textures/02_custom',
          '/guide/textures/03_painting'
        ]
      },

      {
        title: 'Multiplayer',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/multiplayer/01_multiplayer',
          '/guide/multiplayer/02_publishing',
          '/guide/multiplayer/03_playing'
        ]
      },

      {
        title: 'Decryption',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/decryption/01_decryption'
        ]
      },

      {
        title: 'Miscellaneous',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/misc/01_misc',
          '/guide/misc/02_grass',
          '/guide/misc/03_weather',
          '/guide/misc/04_stacked_transparency',
          '/guide/misc/05_geometry_editor',
          '/guide/misc/06_bots',
          '/guide/misc/07_ghostplugin',
          '/guide/misc/08_custom_udk',
          '/guide/misc/09_custom_rl'
        ]
      }
    ],

    '/more/':[
      {
        title: 'More Information',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          'contact',
          'about',
          'roadmap',
          'contribute',
          'psyonix'
        ]
      }
    ],

    '/cheatsheet/':[
      {
        title: 'Cheat Sheets',   
        collapsable: false, 
        sidebarDepth: 1,    
        children: [
          '',
          '01_stickywalls',
          '02_dummyassets',
          '03_collisions',
          '04_materials',
          '05_boost',
          '06_quick_testing',
          '07_kactors',
          '08_lighting',
          '09_map_models',
          '10_multiplayer',
          '11_soccar',
          '12_uvmaps'
        ]
      }
    ]
  },

    nav: [
      {
        text: 'Documentation',
        items: [
          {
            text: 'Essential',
            link: '/essential/index'
          },
          {
            text: 'FAQ',
            link: '/faq/index'
          },
          {
            text: 'Cheatsheets',
            link: '/cheatsheet/index'
          },
          {
            text: 'Guides',
            items: [
              {
                text: 'Information',
                link: '/guide/index'
              },
              {
                text: 'UDK Basics',
                link: '/guide/udk/00_start'
              },
              {
                text: 'Blender Basics',
                link: '/guide/blender/01_blender'
              },
              {
                text: 'UDK Advanced',
                link: '/guide/udk/15_dummy_assets'
              },
              {
                text: 'Kismet',
                link: '/guide/kismet/01_kismet'
              },
              {
                text: 'Blender Advanced',
                link: '/guide/blender/11_animation'
              },
              {
                text: 'Textures',
                link: '/guide/textures/01_textures'
              },
              {
                text: 'Multiplayer',
                link: '/guide/multiplayer/01_multiplayer'
              },
              {
                text: 'Decryption',
                link: '/guide/decryption/01_decryption'
              },
              {
                text: 'Miscellaneous',
                link: '/guide/misc/01_misc'
              }
            ]
          }
        ]
      },

      {
        text: 'Resources',
        items: [
          {
            text: 'Downloads',
            link: '/resources/downloads'
          },
          {
            text: 'Kismet Library',
            link: 'https://github.com/RocketLeagueMapmaking/Kismet'
          },
          {
            text: 'Other Guides',
            link: '/resources/guides'
          },
          {
            text: 'References',
            link: '/resources/references'
          },
          {
            text: 'Modding Network',
            link: '/resources/modding_network'
          }
        ]
      },

      {
        text: 'More',
        items: [
          {
            text: 'Contact',
            link: '/more/contact'
          },
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

  
  },  plugins: {
    '@vuepress/active-header-links':{},
    '@vuepress/last-updated':{},
    'seo':{},
    '@vuepress/pwa':{
        serviceWorker: true,
        updatePopup: true
      }
  }
};
