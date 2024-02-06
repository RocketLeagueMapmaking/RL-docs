import type { DefaultTheme } from "vitepress";

function createGroupWithBase(path: string, items: DefaultTheme.SidebarItem[]) {
    return {
        [path]: {
            base: path,
            items,
        }
    } satisfies DefaultTheme.Sidebar
}

const sidebar: DefaultTheme.Sidebar = {
    ...createGroupWithBase('/essential/', [
        {
            text: 'Mapmaking Essentials',
            collapsed: false,
            items: [
                {
                    text: 'Essentials',
                    link: '',
                },
                {
                    text: 'Introduction',
                    link: '01_flowchart',
                },
                {
                    text: 'Clarifications',
                    link: '02_clarifications',
                },
            ],
        },
        {
            text: 'Installing UDK',
            collapsed: false,
            items: [
                {
                    text: 'Installing',
                    link: '03_installing',
                },
                {
                    text: 'Dummy Classes',
                    link: '04_dummy_classes',
                },
                {
                    text: 'Project setup',
                    link: '05_project_setup',
                },
            ],
        },
        {
            text: 'Exploring UDK',
            collapsed: false,
            items: [
                {
                    text: 'UDK introduction',
                    link: '06_udk_intro',
                },
                {
                    text: 'UDK Editor',
                    link: '07_udk_editor',
                },
                {
                    text: 'Content Browser',
                    link: '08_content_browser',
                },
                {
                    text: 'Sticky Walls',
                    link: '09_sticky_walls',
                },
            ],
        },
    ]),

    ...createGroupWithBase('/guide/blender/', [
        {
            text: 'Blender Basics',
            collapsed: false,
            items: [
                {
                    text: 'Hello blender',
                    link: '01_blender',
                },
                {
                    text: 'Introduction',
                    link: '02_intro',
                },
                {
                    text: 'Blender Window',
                    link: '03_setup',
                },
                {
                    text: 'Modeling',
                    link: '04_modeling',
                },
                {
                    text: 'UV Maps and Materials',
                    link: '06_uv',
                },
                {
                    text: 'UV Unwrapping',
                    link: '07_unwrapping',
                },
                {
                    text: 'Mipmaps and LOD',
                    link: '08_resolution',
                },
                {
                    text: 'Other sources',
                    link: '10_interlude_other',
                },
            ],
        },
        {
            text: 'Exporting to UDK',
            collapsed: false,
            items: [
                {
                    text: 'FBX Export',
                    link: '05_fbx',
                },
            ],
        },
        {
            text: 'Blender Advanced',
            collapsed: false,
            items: [
                {
                    text: 'Armatures and Animation',
                    link: '11_animation',
                },
                {
                    text: 'Modifiers',
                    link: '12_modifiers',
                },
                {
                    text: 'Curve modeling',
                    link: '13_curves',
                },
            ]
        }
    ]),

    ...createGroupWithBase('/guide/', [
        {
            text: 'UDK',
            base: '/guide/udk/',
            collapsed: false,
            items: [
                {
                    text: 'Hello Guide',
                    link: '00_start',
                },
                {
                    text: 'CSG',
                    link: '01_csg',
                },
                {
                    text: 'Starting a map',
                    link: '02_starting_a_map',
                },
                {
                    text: 'Collidable Meshes',
                    link: '03_collidable_mesh',
                },
                {
                    text: 'Testing',
                    link: '04_map_test',
                },
                {
                    text: 'Collidable Collisions',
                    link: '05_collidable_collisions',
                },
                {
                    text: 'The Owl',
                    link: '06_owl',
                },
                {
                    text: 'Materials',
                    link: '07_materials',
                },
                {
                    text: 'Lighting',
                    link: '08_lighting',
                },
                {
                    text: 'Rocket League Match Items',
                    link: '09_game_items',
                },
                {
                    text: 'Map Settings',
                    link: '10_map_settings',
                },
                {
                    text: 'Volumes',
                    link: '11_volumes',
                },
                {
                    text: 'Next',
                    link: '12_interlude_next',
                },
                {
                    text: 'Interlude - Rapid Testing',
                    link: '13_interlude_test',
                },
                {
                    text: 'Advanced',
                    collapsed: true,
                    items: [
                        {
                            text: 'Dummy Assets',
                            link: '14_dummy_assets',
                        },
                        {
                            text: 'Archetypes',
                            link: '15_archetypes',
                        },
                        {
                            text: 'Meshes in UDK',
                            link: '16_udk_meshes',
                        },
                        {
                            text: 'Custom Materials',
                            link: '17_custom_materials',
                        },
                        {
                            text: 'Lightmaps',
                            link: '18_lightmaps',
                        },
                        {
                            text: 'Boost',
                            link: '19_boost',
                        },
                        {
                            text: 'KActors',
                            link: '20_kactors',
                        },
                        {
                            text: 'Matinee',
                            link: '21_matinee',
                        },
                        {
                            text: 'Skeletal Mesh',
                            link: '22_skeletal_mesh',
                        },
                        {
                            text: 'Extra Modes',
                            link: '23_extra_modes',
                        },
                    ]
                }
            ]
        },
        {
            text: 'Kismet',
            base: '/guide/kismet/',
            collapsed: false,
            items: [
                {
                    text: 'Kismet',
                    link: '01_kismet',
                },
                {
                    text: 'Adding Kismet',
                    link: '02_project',
                },
                {
                    text: 'TriggerVolumes',
                    link: '03_trigger',
                },
                {
                    text: 'References',
                    link: '04_tagame',
                },
                {
                    text: 'Sound',
                    link: '05_sound',
                },
                {
                    text: 'Advanced Kismet',
                    link: '06_advanced',
                },
            ],
        },
        {
            text: 'Textures',
            base: '/guide/textures/',
            collapsed: false,
            items: [
                {
                    text: 'Hello Textures',
                    link: '01_textures',
                },
                {
                    text: 'Custom Textures',
                    link: '02_custom',
                },
                {
                    text: 'Texture Painting',
                    link: '03_painting',
                },
            ],
        },
        {
            text: 'Multiplayer',
            base: '/guide/multiplayer/',
            collapsed: false,
            items: [
                {
                    text: 'Multiplayer',
                    link: '01_multiplayer',
                },
                {
                    text: 'Publishing',
                    link: '02_publishing',
                },
                {
                    text: 'Playing Maps',
                    link: '03_playing',
                },
            ],
        },
        {
            text: 'Decryption',
            base: '/guide/decryption/',
            collapsed: false,
            items: [
                {
                    text: 'Introduction',
                    link: '/',
                },
                {
                    text: 'Assets',
                    link: '01_assets',
                },
                {
                    text: 'Classes',
                    link: '02_classes',
                },
                {
                    text: 'Sound',
                    link: '03_sound',
                },
                {
                    text: 'Packages',
                    link: '04_packages',
                },
            ],
        },
        {
            text: 'Miscellaneous',
            base: '/guide/misc/',
            collapsed: false,
            items: [
                {
                    text: 'Miscellaneous',
                    link: '01_misc',
                },
                {
                    text: 'Grass',
                    link: '02_grass',
                },
                {
                    text: 'Weather',
                    link: '03_weather',
                },
                {
                    text: 'Stacked Transparency',
                    link: '04_stacked_transparency',
                },
                {
                    text: 'Geometry Editor',
                    link: '05_geometry_editor',
                },
                {
                    text: 'Bots',
                    link: '06_bots',
                },
                {
                    text: 'Ghost Plugin',
                    link: '07_ghostplugin',
                },
                {
                    text: 'Customize UDK',
                    link: '08_custom_udk',
                },
            ],
        },
    ]),

    ...createGroupWithBase('/cheatsheet/', [
        {
            text: 'Cheat Sheets',
            collapsed: false,
            items: [
                {
                    text: 'Cheat Sheets',
                    link: '/',
                },
                {
                    text: 'Sticky Walls',
                    link: '01_stickywalls',
                },
                {
                    text: 'Dummy assets',
                    link: '02_dummyassets',
                },
                {
                    text: 'Collisions',
                    link: '03_collisions',
                },
                {
                    text: 'Materials',
                    link: '04_materials',
                },
                {
                    text: 'Boost',
                    link: '05_boost',
                },
                {
                    text: 'Quick Testing',
                    link: '06_quick_testing',
                },
                {
                    text: 'KActors',
                    link: '07_kactors',
                },
                {
                    text: 'Lighting',
                    link: '08_lighting',
                },
                {
                    text: 'Map Models',
                    link: '09_map_models',
                },
                {
                    text: 'Playing Multiplayer',
                    link: '10_multiplayer',
                },
                {
                    text: 'Soccar Setup',
                    link: '11_soccar',
                },
                {
                    text: 'UV Maps',
                    link: '12_uvmaps',
                },
            ],
        },
    ]),

    ...createGroupWithBase('/resources/references/', [
        {
            text: 'References',
            collapsed: false,
            items: [
                {
                    text: 'Guide',
                    link: 'guide',
                },
                {
                    text: 'Psyonix Links',
                    link: 'psyonix',
                },
                {
                    text: 'UE5',
                    link: 'ue5',
                },
            ]
        },
        {
            text: 'Kismet References',
            collapsed: false,
            items: [
                {
                    text: 'Kismet nodes',
                    link: '/kismet/nodes',
                },
                {
                    text: 'Class properties',
                    link: '/kismet/class',
                },
            ]
        },
    ]),

    ...createGroupWithBase('/more/', [
        {
            text: 'More Information',
            collapsed: false,
            items: [
                {
                    text: 'About',
                    link: 'about',
                },
                {
                    text: 'Contact Us',
                    link: 'contact',
                },
                {
                    text: 'Roadmap',
                    link: 'roadmap',
                },
            ],
        },
    ]),
}

export default sidebar
