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
        ], { collection: { delete: false } }),

        ...Object.values(<Sidebar>sidebar)
            .filter(({ base }) => base === '/guide/')
            .flatMap(({ items, meta }) => {
                return items.map(item => {
                    const dirname = item.base!.replace('/guide/', '').slice(0, -1)

                    return VitePress.createDefaultPageFolderCollection(
                        dirname,
                        'docs' + item.base,
                        createFolderOptions(meta.text! + ': ' + (item.text! === 'UDK' ? 'Editor' : item.text!), {
                            mediaFolder: dirname + '/',
                            description: item.text! + ' guide pages',
                        })
                    )
                })
            }),

        VitePress.createDefaultPageFolderCollection(
            'blender',
            `docs/guide/blender/`,
            createFolderOptions('Blender', {
                mediaFolder: 'blender/',
                description: 'Blender guide pages',
                text: 'Blender',
            })
        ),

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
