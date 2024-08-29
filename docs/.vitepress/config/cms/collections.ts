import { type PageData } from 'vitepress'
import {
    VitePress,
    type DecapCmsCollection,
} from 'vite-plugin-decap-cms'

import sidebar, { type Sidebar } from '../sidebar'

import {
    createSiteConfigFields,
    createTeamPageField,
    createThemeHomePageFields,
} from './fields'
import { createFolderOptions } from './options'

export const getCollectionItemEditLink = (page: Pick<PageData, 'filePath' | 'frontmatter'>) => {
    const parts = page.filePath.slice(0, -'.md'.length).split('/')
    const collectionName = parts.at(-2) + (page.frontmatter.advanced ? '_advanced' : ''), entryName = parts.at(-1)!

    return `/admin/index.html#/edit/${collectionName}/${entryName}`
}

function getCollectionName (path: string, frontmatter: PageData['frontmatter']) {
    return path.replace(/\//g, ' ').trim().split(' ').at(-1)! + (frontmatter.advanced ? '_advanced' : '')
}

function createAdvancedCollections (
    // eslint-disable-next-line no-unused-vars
    fn: (type: 'basics' | 'advanced') => Parameters<typeof VitePress['createDefaultPageFolderCollection']>
): DecapCmsCollection<'folder'>[] {
    /**
    * Set false first in the array to have the UI in order:
    * - {collection}
    * - {collection} advaned
    */
    const options = [false, true]

    return options.reduce<DecapCmsCollection<'folder'>[]>((collection, advanced) => {
        const type = advanced ? 'advanced' : 'basics'

        return collection.concat(VitePress.createDefaultPageFolderCollection(...fn(type)))
    }, [])
}

export default function (): DecapCmsCollection[] {
    const sidebarItems = Object.values(<Sidebar>sidebar)

    return [
        VitePress.createDefaultPageFileCollection('Special pages', [
            [
                'Home page',
                'docs/index.md',
                {
                    ...createFolderOptions('Special', {
                        description: '',
                        mediaFolder: '',
                    }),
                    collection: {},
                    additionalFields: createThemeHomePageFields(),
                }
            ],
            [
                'About: teams & special thanks',
                'docs/more/about.md',
                {
                    overwrites: {
                        body: { hidden: true },
                        description: { hidden: true },
                        head: { hidden: true },
                        title: { hidden: true },
                        titleTemplate: { hidden: true },
                    },
                    additionalFields: [
                        createTeamPageField(),
                    ]
                }
            ],
            [
                'Site configuration',
                'docs/.vitepress/config/data/config.json',
                {
                    overwrites: {
                        body: { deleted: true },
                        description: { deleted: true },
                        head: { deleted: true },
                        title: { deleted: true },
                        titleTemplate: { deleted: true },
                    },
                    additionalFields: createSiteConfigFields(),
                }
            ],
        ], {
            collection: {
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
                        return createAdvancedCollections((type) => [
                            getCollectionName(dirname, { advanced: type === 'advanced' }),
                            'docs' + item.base,
                            createFolderOptions(meta.text! + ': Editor' + (type === 'advanced' ? ' advanced' : ''), {
                                mediaFolder: dirname + '/',
                                description: item.text! + ' ' + type + ' guide pages',
                                advancedFilter: type === 'advanced',
                            }),
                        ])
                    }

                    return VitePress.createDefaultPageFolderCollection(
                        dirname,
                        'docs' + item.base,
                        createFolderOptions(meta.text! + ': ' + item.text!, {
                            mediaFolder: dirname + '/',
                            description: item.text! + ' guide pages',
                        })
                    )
                })
            }),

        ...createAdvancedCollections((type) => [
            getCollectionName('blender', { advanced: type === 'advanced' }),
            'docs/guide/blender/',
            createFolderOptions('Blender' + (type === 'advanced' ? ': advanced' : ''), {
                mediaFolder: `blender/${type}/`,
                description: `Blender ${type} guide pages`,
                text: 'Blender',
                advancedFilter: type === 'advanced',
            })
        ]),

        ...sidebarItems
            .filter(({ base }) => !base.startsWith('/guide/'))
            .flatMap(({ items, base, meta: config }) => {
                const label = config.text ?? items[0].text!

                return VitePress.createDefaultPageFolderCollection(
                    getCollectionName(base, {}),
                    'docs' + base,
                    createFolderOptions(label, config)
                )
            }),
    ]
}
