import type { DefaultTheme } from 'vitepress'

function createGroupWithBase (path: string, items: DefaultTheme.SidebarItem[]) {
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
                    link: 'index.html',
                },
                {
                    text: 'Introduction',
                    link: 'flowchart',
                },
                {
                    text: 'Clarifications',
                    link: 'clarifications',
                },
            ],
        },
        {
            text: 'Installing UDK',
            collapsed: false,
            items: [
                {
                    text: 'Installing',
                    link: 'installing',
                },
                {
                    text: 'Dummy Classes',
                    link: 'dummy_classes',
                },
                {
                    text: 'Project setup',
                    link: 'project_setup',
                },
            ],
        },
        {
            text: 'Exploring UDK',
            collapsed: false,
            items: [
                {
                    text: 'UDK introduction',
                    link: 'udk_intro',
                },
                {
                    text: 'UDK Editor',
                    link: 'udk_editor',
                },
                {
                    text: 'Content Browser',
                    link: 'content_browser',
                },
                {
                    text: 'Sticky Walls',
                    link: 'sticky_walls',
                },
            ],
        },
    ]),

    ...createGroupWithBase('/guide/blender/', [
        {
            text: 'Blender',
            collapsed: false,
            items: [
                {
                    text: 'Hello blender',
                    link: 'blender',
                },
                {
                    text: 'Introduction',
                    link: 'intro',
                },
                {
                    text: 'Blender Window',
                    link: 'setup',
                },
                {
                    text: 'Modeling',
                    link: 'modeling',
                },
                {
                    text: 'UV Maps and Materials',
                    link: 'uv',
                },
                {
                    text: 'UV Unwrapping',
                    link: 'unwrapping',
                },
                {
                    text: 'Texture Resolution',
                    link: 'resolution',
                },
                {
                    text: 'Mipmaps and LOD',
                    link: 'mipmaps',
                },
                {
                    text: 'Other sources',
                    link: 'interlude_other',
                },
                {
                    text: 'Advanced',
                    collapsed: false,
                    items: [
                        {
                            text: 'Armatures and Animation',
                            link: 'animation',
                        },
                        {
                            text: 'Modifiers',
                            link: 'modifiers',
                        },
                        {
                            text: 'Curve modeling',
                            link: 'curves',
                        },
                    ]
                }
            ],
        },
        {
            text: 'Exporting to UDK',
            collapsed: false,
            items: [
                {
                    text: 'FBX Export',
                    link: 'fbx',
                },
            ],
        },
    ]),

    ...createGroupWithBase('/guide/', [
        {
            text: 'UDK',
            base: '/guide/udk/',
            collapsed: false,
            items: [
                {
                    text: 'Hello Guide',
                    link: 'start',
                },
                {
                    text: 'CSG',
                    link: 'csg',
                },
                {
                    text: 'Starting a map',
                    link: 'starting_a_map',
                },
                {
                    text: 'Collidable Meshes',
                    link: 'collidable_mesh',
                },
                {
                    text: 'Testing',
                    link: 'map_test',
                },
                {
                    text: 'Collidable Collisions',
                    link: 'collidable_collisions',
                },
                {
                    text: 'The Owl',
                    link: 'owl',
                },
                {
                    text: 'Materials',
                    link: 'materials',
                },
                {
                    text: 'Lighting',
                    link: 'lighting',
                },
                {
                    text: 'Rocket League Match Items',
                    link: 'game_items',
                },
                {
                    text: 'Map Settings',
                    link: 'map_settings',
                },
                {
                    text: 'Volumes',
                    link: 'volumes',
                },
                {
                    text: 'Next',
                    link: 'interlude_next',
                },
                {
                    text: 'Interlude - Rapid Testing',
                    link: 'interlude_test',
                },
                {
                    text: 'Advanced',
                    collapsed: false,
                    items: [
                        {
                            text: 'Dummy Assets',
                            link: 'dummy_assets',
                        },
                        {
                            text: 'Archetypes',
                            link: 'archetypes',
                        },
                        {
                            text: 'Meshes in UDK',
                            link: 'udk_meshes',
                        },
                        {
                            text: 'Custom Materials',
                            link: 'custom_material',
                        },
                        {
                            text: 'Lightmaps',
                            link: 'lightmaps',
                        },
                        {
                            text: 'Boost',
                            link: 'boost',
                        },
                        {
                            text: 'KActors',
                            link: 'kactors',
                        },
                        {
                            text: 'Matinee',
                            link: 'matinee',
                        },
                        {
                            text: 'Skeletal Mesh',
                            link: 'skeletal_mesh',
                        },
                        {
                            text: 'Extra Modes',
                            link: 'extra_modes',
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
                    link: 'kismet',
                },
                {
                    text: 'Adding Kismet',
                    link: 'project',
                },
                {
                    text: 'TriggerVolumes',
                    link: 'trigger',
                },
                {
                    text: 'References',
                    link: 'tagame',
                },
                {
                    text: 'Sound',
                    link: 'sound',
                },
                {
                    text: 'Advanced Kismet',
                    link: 'advanced',
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
                    link: 'textures',
                },
                {
                    text: 'Custom Textures',
                    link: 'custom',
                },
                {
                    text: 'Texture Painting',
                    link: 'painting',
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
                    link: 'multiplayer',
                },
                {
                    text: 'Publishing',
                    link: 'publishing',
                },
                {
                    text: 'Playing Maps',
                    link: 'playing',
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
                    link: 'index.html',
                },
                {
                    text: 'Assets',
                    link: 'assets',
                },
                {
                    text: 'Classes',
                    link: 'classes',
                },
                {
                    text: 'Sound',
                    link: 'sound',
                },
                {
                    text: 'Packages',
                    link: 'packages',
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
                    link: 'misc',
                },
                {
                    text: 'Grass',
                    link: 'grass',
                },
                {
                    text: 'Weather',
                    link: 'weather',
                },
                {
                    text: 'Stacked Transparency',
                    link: 'stacked_transparency',
                },
                {
                    text: 'Geometry Editor',
                    link: 'geometry_editor',
                },
                {
                    text: 'Bots',
                    link: 'bots',
                },
                {
                    text: 'Ghost Plugin',
                    link: 'ghostplugin',
                },
                {
                    text: 'Customize UDK',
                    link: 'custom_udk',
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
                    link: 'index.html',
                },
                {
                    text: 'Sticky Walls',
                    link: 'stickywalls',
                },
                {
                    text: 'Dummy assets',
                    link: 'dummyassets',
                },
                {
                    text: 'Collisions',
                    link: 'collisions',
                },
                {
                    text: 'Materials',
                    link: 'materials',
                },
                {
                    text: 'Boost',
                    link: 'boost',
                },
                {
                    text: 'Quick Testing',
                    link: 'quick_testing',
                },
                {
                    text: 'KActors',
                    link: 'kactors',
                },
                {
                    text: 'Lighting',
                    link: 'lighting',
                },
                {
                    text: 'Map Models',
                    link: 'map_models',
                },
                {
                    text: 'Playing Multiplayer',
                    link: 'multiplayer',
                },
                {
                    text: 'Soccar Setup',
                    link: 'soccar',
                },
                {
                    text: 'UV Maps',
                    link: 'uvmaps',
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
                    link: 'kismet/nodes',
                },
                {
                    text: 'Class properties',
                    link: 'kismet/class',
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
                    text: 'Events',
                    link: 'events',
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
