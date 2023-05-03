// Sidebar item:
// ------------
// title (required)
// collapsable (optional, defaults to true)
// sidebarDepth (optional, defaults to 1)
// children

module.exports = {
    '/essential/': [
        {
            title: 'Mapmaking Essentials',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
                '01_flowchart',
                '02_clarifications'
            ]
        },

        {
            title: 'Installing UDK',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '03_installing',
                '04_dummy_classes',
                '05_project_setup'
            ]
        },

        {
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
    ],

    '/guide/blender': [
        {
            title: 'Blender Basics',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/blender/01_blender',
                '/guide/blender/02_intro',
                '/guide/blender/03_setup',
                '/guide/blender/04_modeling',
                '/guide/blender/06_uv',
                '/guide/blender/07_unwrapping',
                '/guide/blender/08_resolution',
                '/guide/blender/09_mipmaps',
                '/guide/blender/10_interlude_other'
            ]
        },

        {
            title: 'Exporting to UDK',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/blender/05_fbx',
            ]
        },

        {
            title: 'Blender Advanced',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/blender/11_animation',
                '/guide/blender/12_modifiers',
                '/guide/blender/13_curves'
            ]
        }
    ],

    '/guide/': [
        {
            title: 'UDK Basics',
            collapsable: false,
            // sidebarDepth: 1,
            children: [
                '/guide/udk/00_start',
                '/guide/udk/01_csg',
                '/guide/udk/02_starting_a_map',
                '/guide/udk/03_collidable_mesh',
                '/guide/udk/04_map_test',
                '/guide/udk/05_collidable_collisions',
                '/guide/udk/06_owl',
                '/guide/udk/07_materials',
                '/guide/udk/08_lighting',
                '/guide/udk/09_game_items',
                '/guide/udk/10_map_settings',
                '/guide/udk/11_volumes',
                '/guide/udk/12_interlude_next',
                '/guide/udk/13_interlude_test'
            ]
        },

        {
            title: 'UDK Advanced',
            collapsable: false,
            children: [
                '/guide/udk/14_dummy_assets',
                '/guide/udk/15_archetypes',
                '/guide/udk/16_udk_meshes',
                '/guide/udk/17_custom_material',
                '/guide/udk/18_lightmaps',
                '/guide/udk/19_boost',
                '/guide/udk/20_kactors',
                '/guide/udk/21_matinee',
                '/guide/udk/22_skeletal_mesh',
                '/guide/udk/23_extra_modes'
            ]
        },

        {
            title: 'Kismet',
            collapsable: false,
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
            title: 'Textures',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/textures/01_textures',
                '/guide/textures/02_custom',
                '/guide/textures/03_painting'
            ]
        },

        {
            title: 'Multiplayer',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/multiplayer/01_multiplayer',
                '/guide/multiplayer/02_publishing',
                '/guide/multiplayer/03_playing'
            ]
        },

        {
            title: 'Decryption',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/decryption/',
                '/guide/decryption/01_assets',
                '/guide/decryption/02_classes',
                '/guide/decryption/03_sound',
                '/guide/decryption/04_packages'
            ]
        },

        {
            title: 'Miscellaneous',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/guide/misc/01_misc',
                '/guide/misc/02_grass',
                '/guide/misc/03_weather',
                '/guide/misc/04_stacked_transparency',
                '/guide/misc/05_geometry_editor',
                '/guide/misc/06_bots',
                '/guide/misc/07_ghostplugin',
                '/guide/misc/08_custom_udk'
            ]
        }
    ],

    '/more/': [
        {
            title: 'More Information',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'about',
                'contact',
                'roadmap',
                'contribute'
            ]
        }
    ],

    '/cheatsheet/': [
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
    ],

    '/resources/references/': [
        {
            title: 'References',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'guide',
                'psyonix',
                'ue5',
            ]
        },
        {
            title: 'Kismet references',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'kismet/nodes',
                'kismet/player'
            ]
        }
    ],

    '/ue5/': [
        {
            title: 'UE5',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
                'comparison'
            ]
        }
    ],
}
