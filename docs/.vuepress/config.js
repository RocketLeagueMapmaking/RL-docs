module.exports = {
  title: 'RLMM',
  description: 'Guides, Resources, Maps, and More',
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
        title: 'Introduction',   
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
          '/guide/udk/01_csg',
          '/guide/udk/02_udk_basics',
          '/guide/udk/03_collidable_mesh',
          '/guide/udk/04_map_test',
          '/guide/udk/05_collidable_collisions',
          '/guide/udk/06_owl',
          '/guide/udk/07_materials',
          '/guide/udk/08_lighting',
          '/guide/udk/09_game_items',
          '/guide/udk/10_boost',
          '/guide/udk/11_details',
          '/guide/udk/12_interlude_next',
          
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
          '/guide/udk/14_dummy_assets',
          '/guide/udk/15_upgrading',
          '/guide/udk/16_custom_material',
          '/guide/udk/17_matinee',
          '/guide/udk/18_kactors',
          '/guide/udk/19_skeletal_mesh',
          '/guide/udk/20_extra_modes'
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
          '/guide/kismet/04_advanced'
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
        title: 'Multiplayer',   
        collapsable: true, 
        sidebarDepth: 1,    
        children: [
          '/guide/multiplayer/01_publishing',
          '/guide/multiplayer/02_playing'
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
            link: '/essential/index'
          },
          {
            text: 'FAQ',
            link: '/faq/index'
          },
          {
            text: 'Guides',
            link: '/guide/index'
          },
          {
            text: 'Cheatsheets',
            link: '/cheatsheet/index'
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
