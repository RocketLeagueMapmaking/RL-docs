// import { ThemeNotificationContext } from '@rocketleaguemapmaking/theme-rlmm'
import { createField } from 'vite-plugin-decap-cms'

export const createButtonFields = () => [
    createField('string', {
        name: 'text',
        required: true,
    })
]

export const createFeatureFields = () => [
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

export const createSocialLinkFields = () => [
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

export const createTeamFields = () => [
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

const createListField = (fields: ReturnType<typeof createField>[]) => {
    return (options: Omit<Parameters<typeof createField<'list'>>[1], 'fields'>) => {
        return createField('list', {
            allow_add: true,
            ...options,
            fields,
        })
    }
}

export const createFeaturesField = createListField(createFeatureFields())
export const createTeamsField = createListField(createTeamFields())

const themeBaseNotificationFields = [
    createField('string', {
        name: 'id',
        required: true,
        label: 'Id',
    }),
    createField('datetime', {
        name: 'created_at',
        required: true,
        label: 'Created at',
        format: 'x',
    }),
    createField('markdown', {
        name: 'text',
        required: true,
        label: 'Text',
    }),
    createField('color', {
        name: 'color',
        required: false,
        label: 'Color',
    }),
    createField('select', {
        name: 'contexts',
        multiple: true,
        required: false,
        label: 'Contexts',
        options: Object.entries({})
            .map(([label, value]) => ({ label, value })),
    }),
    createField('object', {
        name: 'time',
        required: false,
        label: 'Times',
        fields: [
            createField('datetime', {
                name: 'start',
                label: 'Start',
                required: false,
                format: 'x',
            }),
            createField('datetime', {
                name: 'end',
                label: 'End',
                required: false,
                format: 'x',
            }),
        ]
    }),
    createField('object', {
        name: 'action',
        required: false,
        label: 'Action',
        fields: createButtonFields(),
    }),
]

export const bannerNotificationFields = [
    ...themeBaseNotificationFields,
    createField('boolean', {
        name: 'dismissable',
        required: false,
    }),
    createField('number', {
        name: 'cooldown',
        required: false,
    })
]

export const themeNotificationFields = [
    ...themeBaseNotificationFields,
    createField('string', {
        name: 'title',
        required: true,
    }),
    createField('list', {
        name: 'tags',
        required: false,
        allow_add: true,
        label_singular: 'tag',
    }),
    createField('string', {
        name: 'type',
        required: false,
    }),
    createField('boolean', {
        name: 'inbox',
        required: false,
    }),
    createField('markdown', {
        name: 'inboxText',
        required: false,
        label: 'Inbox text',
    }),
]
