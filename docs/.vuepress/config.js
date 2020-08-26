module.exports = {
  title: 'DOCS',
  description: 'This is your landing page description.',
  themeConfig: {
    logo: '/logo_rlmm_round_1440.png',
    lastUpdated: 'Last updated',
    searchPlaceholder: 'Search...',
    smoothScroll: true,
    base: '/rl-docs/',
    sidebar:{
      '/beginner/':
    [
      {
        title: 'Introduction',   // required
        // path: '/beginner/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
        ''
     
      ]},{
        title: 'Beginning',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'ready',
          'udk',
          'windows',
        ]
      },{
        title: 'Installing UDK',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'quickinstall',
        'installing',
        'dummyclasses',
        ]
      },{
        title: 'Exploring UDK',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'projectsetup',
        'udk_intro',
        'udk_editor',
        'content_browser'
        ]
      }
    ],'/guide/':[
      {
        title: 'Information',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '',
          'request',
        ]
      },
      {
        title: 'UDK Basics',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'udk-basics',
          'collideable_mesh',
          'collideable_collisions',
          'owl',
          'materials',
          'lighting',
          'game_items',
          'details',
          'what_next',
          'rapid_test',
        ]
      },
      {
        title: 'UDK Advanced',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'dummy_assets',
          'upgrading',
          'custom_material',
          'matinee',
          'KActors',
          'skeletal_mesh',
        ]
      },
      {
        title: 'Finishing',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'publishing',
           'playing'
        ]
      }
    ]
  },
    nav: [
      {
        text: 'Home',
        link: 'https://rlmaps.netlify.app/'
      },
      {
        text: 'Starting',
        link: '/beginner/#section-introduction'
      },
      {
        text: 'Documentation',
        link: '/guide/#section-introduction'
      },
      
      {
        text: 'More',
        items: [
           {
            text: 'Guides',
            items: [
              {
                text:'3D modelling',
                link:'/modelling/'
              },{
                text:'Multiplayer',
                link:'/multiplayer/'
              },{
                text:'Kismet',
                link:'/kismet/'
              },
              {
                text:'Textures',
                link:'/textures/'
              },
              {
                text:'old guide',
                link:'https://docs.google.com/document/d/166A68CLxWk0LxMZ4B9vsuBmIgbphLIMbRB0BCn3ezsc/edit#'
              },
              {
                text:'Other guides',
                link:'/guides'
              }
            ]
          },
        {
          text:'recources',
          items:[
            {
              text:'downloads',
              link:'/downloads'
            }, {
              text:'cheat sheets',
              link:'/cheats'
            },{
              text:'assets',
              link:'/assets'
            }, {
              text:'communities',
              link:'/communities'
            }
          ]
        },{
          text:'other',
          items:[
            {
              text: 'how to contribute',
              link: '/contribute'
            },{
              text: 'Special thanks',
              link: '/credits'
            },
            {
              text: 'FAQ',
              link: '/faq'
            },
          ]
        }
          
         
        ]
      }
    ],
    plugins: ['@vuepress/active-header-links','@vuepress/last-updated']
  }
};
