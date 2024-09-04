import { createField, VitePress } from 'vite-plugin-decap-cms'

export const advancedField = createField('boolean', {
    name: 'advanced',
    label: 'Advanced guide',
    hint: 'This page is an advanced guide',
    required: true,
})

const createFeatureFields = () => [
    createField('string', {
        name: 'title',
        required: true
    }),
    createField('string', {
        name: 'details',
        required: false
    }),
    createField('string', {
        name: 'icon',
        required: false
    }),
    createField('string', {
        name: 'link',
        required: false
    }),
    createField('string', {
        name: 'linkText',
        label: 'Link text',
        required: false
    }),
    createField('string', {
        name: 'target',
        label: 'Target',
        required: false
    }),
    createField('string', {
        name: 'rel',
        label: 'Relation',
        required: false
    }),
]

const createSocialLinkFields = () => [
    createField('select', {
        name: 'icon',
        label: 'Icon',
        required: true,
        options: [
            'discord',
            'facebook',
            'github',
            'instagram',
            'linkedin',
            'mastodon',
            'npm',
            'slack',
            'twitter',
            'x',
            'youtube',
        ],
    }),
    createField('string', {
        name: 'link',
        label: 'Link',
        required: true,
    }),
    createField('string', {
        name: 'ariaLabel',
        label: 'Aria label',
        required: false,
    }),
]

export const createFeaturePageField = (data: Record<'name' | 'label' | 'label_singular', string>) => createField('list', {
    name: data.name,
    label: data.label,
    label_singular: data.label_singular,
    allow_add: true,
    fields: createFeatureFields(),
})

export const createHomePageFields = () => {
    const steamComponent = createField('object', {
        name: 'steam',
        label: 'Steam maps',
        required: false,
        fields: [
            createField('boolean', {
                name: 'enabled',
                label: 'Enable',
                required: true,
            }),
            createField('number', {
                name: 'amount',
                label: 'Amount of maps',
                required: true,
            }),
            createField('object', {
                name: 'title',
                label: 'Title',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: true,
                    }),
                    createField('string', {
                        name: 'title',
                        label: 'Title',
                        required: false,
                    }),
                    createField('object', {
                        name: 'switchSortBy',
                        label: 'Switch sort by',
                        required: false,
                        fields: [
                            createField('boolean', {
                                name: 'enabled',
                                label: 'Enabled',
                                required: false,
                            }),
                            createField('select', {
                                name: 'initial',
                                label: 'Initial mode',
                                required: true,
                                options: [
                                    'created',
                                    'updated',
                                ],
                            }),
                            createField('object', {
                                name: 'prefix',
                                label: 'Mode prefix',
                                required: true,
                                fields: [
                                    createField('string', {
                                        name: 'created',
                                        label: 'Created',
                                        required: true,
                                    }),
                                    createField('string', {
                                        name: 'updated',
                                        label: 'Updated',
                                        required: true,
                                    }),
                                ]
                            }),
                        ]
                    }),
                ]
            }),
        ]
    })

    const resources = createField('list', {
        name: 'resources',
        label: 'Resources',
        label_singular: 'resource',
        allow_add: true,
        required: false,
        fields: createFeatureFields(),
    })

    const events = createField('object', {
        name: 'events',
        label: 'Events',
        fields: [
            createField('string', {
                name: 'title',
                label: 'Title',
                required: true,
            }),
            createField('text', {
                name: 'description',
                label: 'Description',
                required: true,
            }),
            createField('object', {
                name: 'action',
                label: 'Action button',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: true,
                    }),
                    createField('string', {
                        name: 'link',
                        label: 'Link',
                        required: true,
                    }),
                ],
            }),
            createField('string', {
                name: 'dataUrl',
                label: 'Data url',
                required: true,
            }),
        ],
    })

    const promotion = createField('object', {
        name: 'promotion',
        label: 'Promotion',
        fields: [
            createField('image', {
                name: 'image',
                label: 'Image',
                required: true,
            }),
            createField('object', {
                name: 'title',
                label: 'Title',
                hint: 'Provide either an image or text',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: false,
                    }),
                    createField('image', {
                        name: 'image',
                        label: 'Image',
                        required: false,
                    }),
                ],
            }),
            createField('text', {
                name: 'description',
                label: 'Description',
                required: true,
                hint: 'To have line breaks in the text add <br>'
            }),
        ],
    })

    const sponsors = createField('object', {
        name: 'sponsors',
        label: 'Sponsors',
        fields: [
            createField('string', {
                name: 'message',
                label: 'Message',
                required: true,
            }),
            createField('string', {
                name: 'actionLink',
                label: 'Action link',
                required: true,
            }),
            createField('string', {
                name: 'dataUrl',
                label: 'Data url',
                required: true,
            }),
        ],
    })

    return VitePress.createHomePageFields({
        additionalHeroFields: [
            steamComponent,
        ],
    }).concat(resources)
        .concat(events)
        .concat(promotion)
        .concat(sponsors)
}

export const createTeamPageField = () => createField('list', {
    name: 'teams',
    label: 'Teams',
    label_singular: 'team',
    allow_add: true,
    fields: [
        createField('string', {
            name: 'title',
            label: 'Title',
            required: true,
        }),
        createField('string', {
            name: 'lead',
            label: 'Description',
            required: false,
        }),
        createField('select', {
            name: 'size',
            label: 'Size',
            options: [
                'small',
                'medium',
            ],
            default: 'medium',
            required: false,
        }),
        createField('list', {
            name: 'members',
            label: 'Team members',
            label_singular: 'member',
            allow_add: true,
            required: true,
            min: 1,
            fields: [
                createField('string', {
                    name: 'name',
                    label: 'Name',
                    required: true,
                }),
                createField('image', {
                    name: 'avatar',
                    label: 'Avatar',
                    required: true,
                }),
                createField('string', {
                    name: 'desc',
                    label: 'Description',
                    required: false,
                }),
                createField('string', {
                    name: 'title',
                    label: 'Title',
                    required: false,
                }),
                createField('string', {
                    name: 'org',
                    label: 'Organization',
                    required: false,
                }),
                createField('string', {
                    name: 'orgLink',
                    label: 'Organization url',
                    required: false,
                }),
                createField('string', {
                    name: 'sponsor',
                    label: 'Sponsor url',
                    required: false,
                }),
                createField('string', {
                    name: 'actionText',
                    label: 'Sponsor text',
                    required: false,
                }),
                createField('list', {
                    name: 'links',
                    label: 'Links',
                    label_singular: 'link',
                    required: false,
                    allow_add: true,
                    fields: createSocialLinkFields(),
                }),
            ]
        })
    ]
})

export const createSiteConfigFields = () => [
    createField('string', {
        name: 'title',
        label: 'Site title',
        required: true,
    }),
    createField('text', {
        name: 'description',
        label: 'Site description',
        required: true,
    }),
    createField('string', {
        name: 'editLinkText',
        label: 'Edit page: link text',
        required: true,
    }),
    createField('object', {
        name: 'footer',
        label: 'Footer',
        required: true,
        fields: [
            createField('string', {
                name: 'message',
                label: 'Message',
                required: true,
            }),
            createField('string', {
                name: 'copyright',
                label: 'Copyright',
                required: true,
            }),
        ],
    }),
    createField('list', {
        name: 'socialLinks',
        allow_add: true,
        label: 'Social links',
        label_singular: 'link',
        hint: 'The icons with links in the navbar',
        fields: createSocialLinkFields(),
    }),
]
