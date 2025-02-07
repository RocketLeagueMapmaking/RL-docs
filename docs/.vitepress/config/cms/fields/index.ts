import { createField } from 'vite-plugin-decap-cms'
import {
    bannerNotificationFields,
    createSocialLinkFields,
    themeNotificationFields,
} from './theme'

export * from './components'
export * from './home'
export * from './theme'

export const advancedField = createField('boolean', {
    name: 'advanced',
    label: 'Advanced guide',
    hint: 'This page is an advanced guide',
    required: true,
})

export const createNotificationConfigFields = () => [
    createField('list', {
        name: 'banners',
        label: 'Banners',
        label_singular: 'banner',
        required: true,
        allow_add: true,
        fields: bannerNotificationFields,
    }),
    createField('list', {
        name: 'notifications',
        label: 'Notifications',
        label_singular: 'notification',
        required: true,
        allow_add: true,
        fields: themeNotificationFields,
    }),
]

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
    createField('list', {
        name: 'srcExclude',
        allow_add: true,
    }),
    createField('object', {
        name: 'cms',
        fields: [
            createField('string', {
                name: 'title',
            }),
        ]
    }),
]
