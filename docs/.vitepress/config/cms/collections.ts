import {
    VitePress,
    type DecapCmsCollection,
} from 'vite-plugin-decap-cms'

import sidebar, { type Sidebar } from '../sidebar'

import {
    createTeamPageField,
    createThemeHomePageFields,
} from './fields'
import { createFolderOptions } from './options'

export default function (): DecapCmsCollection[] {
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
            ]
        ], {
            collection: {
                delete: false,
                publish: false,
            },
        }),

        ...Object.values(<Sidebar>sidebar)
            .filter(({ base }) => base === '/guide/')
            .flatMap(({ items, meta }) => {
                return items.flatMap(item => {
                    const dirname = item.base!.replace('/guide/', '').slice(0, -1)

                    if (dirname === 'udk') {
                        return [false, true].reduce<DecapCmsCollection<'folder'>[]>((collection, advanced) => {
                            const type = advanced ? 'advanced' : 'basics'
                
                            return collection.concat(VitePress.createDefaultPageFolderCollection(
                                dirname + (type === 'advanced' ? '_advanced' : ''),
                                'docs' + item.base,
                                createFolderOptions(meta.text! + ': Editor' + (type === 'advanced' ? ' advanced' : ''), {
                                    mediaFolder: dirname + '/',
                                    description: item.text! + ' ' + type + ' guide pages',
                                    advancedFilter: advanced,
                                })
                            ))
                        }, [])
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

        ...[false, true].reduce<DecapCmsCollection<'folder'>[]>((collection, advanced) => {
            const type = advanced ? 'advanced' : 'basics'

            return collection.concat(VitePress.createDefaultPageFolderCollection(
                'blender' + (type === 'advanced' ? '_advanced' : ''),
                'docs/guide/blender/',
                createFolderOptions('Blender' + (type === 'advanced' ? ': advanced' : ''), {
                    mediaFolder: `blender/${type}/`,
                    description: `Blender ${type} guide pages`,
                    text: 'Blender',
                    advancedFilter: advanced,
                })
            ))
        }, []),

        ...Object.values(<Sidebar>sidebar)
            .filter(({ base }) => !base.startsWith('/guide/'))
            .flatMap(({ items, base, meta: config }) => {
                const label = config.text ?? items[0].text!

                return VitePress.createDefaultPageFolderCollection(
                    base.replace(/\//g, ''),
                    'docs' + base,
                    createFolderOptions(label, config)
                )
            }),
    ]
}
