import { type PageData } from 'vitepress'
import {
    createSharedCollectionOptions,
    VitePress,
    type CollectionType,
    type DecapCmsCollection,
    type SharedDecapCmsCollection,
    type VitePressAdditionalField,
} from 'vite-plugin-decap-cms'

import { advancedField } from './fields'

export const publicFolder = '/images/'
export const mediaFolder = '/docs/.vitepress/public/images/'

const createCollection = createSharedCollectionOptions({
    create: true,
    publish: false,
    mediaFolder: {
        action: 'append',
        value: mediaFolder,
    },
    publicFolder: {
        action: 'append',
        value: publicFolder,
    },
})

function getCollectionName (path: string, frontmatter: PageData['frontmatter']) {
    return path.replace(/\//g, ' ').trim().split(' ').at(-1)! + (frontmatter.advanced ? '_advanced' : '')
}

type FolderData = Record<'base' | 'label' | 'mediaFolder', string>
    & { description?: string, name?: string }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    & { filter?: { field: string, value: any } }

export function createFileCollection (
    name: string,
    files: (
        { name: string, file: string }
            & Parameters<typeof VitePress.createDefaultPageFile>[2]
    )[],
    options?: Parameters<typeof VitePress.createDefaultPageFileCollection>[2],
) {
    return VitePress.createDefaultPageFileCollection(
        name,
        files.map(file => [file.name, file.file, file]),
        options
    )
}

export function createFolderCollection (data: FolderData, fields?: VitePressAdditionalField[]) {
    return VitePress.createDefaultPageFolderCollection(
        data.name ?? getCollectionName(data.base, {}),
        'docs' + data.base,
        {
            overwrites: {
                titleTemplate: { hidden: true },
                head: { hidden: true },
            },
            markdownOptions: {
                modes: ['raw', 'rich_text'],
            },
            collection: createCollection({
                label: data.label,
                labelSingular: data.label + ' file',
                description: data.description,
                mediaFolder: data.mediaFolder,
                publicFolder: data.mediaFolder,
                filter: data.filter,
            } as SharedDecapCmsCollection<CollectionType>),
            additionalFields: [
                ...(fields ?? []),
            ]
        }
    )
}

export function createAdvancedCollections (
    // eslint-disable-next-line no-unused-vars
    fn: (type: 'basics' | 'advanced') => Omit<Required<FolderData>, 'filter'>
): DecapCmsCollection<'folder'>[] {
    /**
    * Set false first in the array to have the UI in order:
    * - {collection}
    * - {collection} advaned
    */
    const options = [false, true]

    return options.reduce<DecapCmsCollection<'folder'>[]>((collections, advanced) => {
        const type = advanced ? 'advanced' : 'basics'
        const data = fn(type)

        const collection = createFolderCollection({
            base: data.base,
            name: getCollectionName(data.name, { advanced: type === 'advanced' }),
            label: data.label,
            mediaFolder: data.mediaFolder,
            description: data.description,
            filter: advanced != undefined
                ? { field: 'advanced', value: advanced, }
                : undefined,
        }, advanced != undefined ? [advancedField] : [])

        return collections.concat(collection)
    }, [])
}
