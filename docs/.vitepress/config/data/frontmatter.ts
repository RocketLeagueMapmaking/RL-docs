import type {
    FilterKey,
    FrontmatterValidationConfig,
} from '../util/frontmatter'

const frontmatterKeys: FilterKey[] = [
    // Default
    { key: 'layout', options: ['doc', 'page', 'home'] },
    'title',
    'description',
    'titleTemplate',
    'head',
    // Default theme
    'outline',
    'pageClass',
    { key: 'sidebar', options: [true, false] },
    'navbar',
    { key: 'aside', options: ['left', true, false] },
    'lastUpdated',
    'editLink',
    'footer',
    // theme-rlmm
    'banner',
    'blocks',
    'exposePages',
    'feedback',
    'inbox',
    'related',
    'finished',
    'offlineText',
    // Site config
    'advanced',
]

const homeFrontmatterKeys: FilterKey[] = [
    'hero',
    'features',
    'resourceTitle',
    'resources',
    'events',
    'promotion',
    'sponsors',
]

export default <FrontmatterValidationConfig> {
    required: [
        {
            key: 'title',
            prefixMatch: true,
            ignore: [
                '/essential/flowchart_questions/',
            ],
        },
        {
            key: 'advanced',
            options: [true, false],
            prefixMatch: true,
            include: [
                '/guide/blender/',
                '/guide/udk/',
            ]
        },
    ],
    using: [
        { keys: frontmatterKeys },
        { keys: homeFrontmatterKeys, include: ['/'] },
        { keys: ['teams'], include: ['/more/about'] },
        // Custom features
        {
            keys: ['collision_types', 'next_actions'],
            include: ['/guide/udk/04_map_test', '/guide/udk/06_owl'],
        },
    ],
}
