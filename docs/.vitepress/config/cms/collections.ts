import { type PageData } from 'vitepress'
import { type DecapCmsCollection } from 'vite-plugin-decap-cms'

import sidebar, { type Sidebar } from '../sidebar'

import {
    createFeaturesField,
    createHomePageFields,
    createNotificationConfigFields,
    createSiteConfigFields,
    createTeamsField,
} from './fields/'

import {
    createAdvancedCollections,
    createFileCollection,
    createFolderCollection,
} from './options'

export const getCollectionItemEditLink = (page: Pick<PageData, 'filePath' | 'frontmatter'>) => {
    const parts = page.filePath.slice(0, -'.md'.length).split('/')
    const collectionName = parts.at(-2) + (page.frontmatter.advanced ? '_advanced' : ''), entryName = parts.at(-1)!

    return `/admin/index.html#/edit/${collectionName}/${entryName}`
}

export default function (): DecapCmsCollection[] {
    const sidebarItems = Object.values(<Sidebar>sidebar)

    return [
        createFileCollection('Special pages', [
            {
                name: 'Site configuration',
                file: 'docs/.vitepress/config/data/config.json',
                overwrites: {
                    deleted: true,
                },
                additionalFields: createSiteConfigFields(),
            },
            {
                name: 'Home page',
                file: 'docs/index.md',
                overwrites: {
                    titleTemplate: { hidden: true },
                    head: { hidden: true },
                    body: { required: false },
                },
                additionalFields: createHomePageFields(),
            },
            {
                name: 'Notifications',
                file: 'docs/.vitepress/config/data/notifications.json',
                overwrites: {
                    deleted: true,
                },
                additionalFields: createNotificationConfigFields(),
            },
        ], {
            collection: {
                create: false,
                delete: false,
                publish: false,
            },
        }),
        createFileCollection('Special keys', [
            {
                name: 'About: teams & special thanks',
                file: 'docs/more/about.md',
                overwrites: {
                    hidden: true,
                },
                additionalFields: [
                    createTeamsField({
                        name: 'teams',
                        label: 'Teams',
                        label_singular: 'team',
                    }),
                ]
            },
            {
                name: 'Features: map test - collision types',
                file: 'docs/guide/udk/04_map_test.md',
                overwrites: {
                    hidden: true,
                },
                additionalFields: [
                    createFeaturesField({
                        name: 'collision_types',
                        label: 'Collision types',
                        label_singular: 'type',
                    }),
                ],
            },
            {
                name: 'Features: building - next actions',
                file: 'docs/guide/udk/06_owl.md',
                overwrites: {
                    hidden: true,
                },
                additionalFields: [
                    createFeaturesField({
                        name: 'next_actions',
                        label: 'Next actions',
                        label_singular: 'action',
                    }),
                ],
            },
        ], {
            collection: {
                create: false,
                delete: false,
                publish: false,
            },
        }),

        ...sidebarItems
            .filter(({ base }) => base === '/guide/')
            .flatMap(({ items, meta }) => {
                return items.flatMap(item => {
                    const dirname = item.base!.replace('/guide/', '').slice(0, -1)

                    if (dirname === 'udk') {
                        return createAdvancedCollections((type) => ({
                            base: item.base!,
                            name: dirname,
                            mediaFolder: dirname + '/',
                            label: meta.text! + ': Editor' + (type === 'advanced' ? ' advanced' : ''),
                            description: item.text! + ' ' + type + ' guide pages',
                        }))
                    }

                    return createFolderCollection({
                        base: item.base!,
                        name: dirname,
                        label: meta.text! + ': ' + item.text!,
                        description: item.text! + ' guide pages',
                        mediaFolder: dirname + '/',
                    })
                })
            }),

        ...createAdvancedCollections((type) => ({
            base: '/guide/blender/',
            name: 'blender',
            mediaFolder: `blender/${type}/`,
            label: 'Blender' + (type === 'advanced' ? ': advanced' : ''),
            description: `Blender ${type} guide pages`,
        })),

        ...sidebarItems
            .filter(({ base }) => !base.startsWith('/guide/'))
            .flatMap(({ items, base, meta: config }) => {
                return createFolderCollection({
                    base,
                    label: config.text ?? items[0].text!,
                    description: config.description,
                    mediaFolder: config.mediaFolder,
                })
            }),
    ]
}
