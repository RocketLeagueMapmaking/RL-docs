import { createField, DecapCmsCollection, type VitePress } from 'vite-plugin-decap-cms'
import { SidebarItemConfig } from '../sidebar'

export const publicFolder = '/images/'
export const mediaFolder = '/docs/.vitepress/public/images/'

interface FolderConfig {
    advancedFilter?: boolean
}

export function createFolderOptions (label: string, config: SidebarItemConfig & FolderConfig) {
    return {
        overwrites: {
            titleTemplate: { hidden: true },
            head: { hidden: true },
        },
        collection: {
            label,
            labelSingular: label + ' file',
            description: config.description,
            mediaFolder: mediaFolder + config.mediaFolder,
            publicFolder: publicFolder + config.mediaFolder,
            filter: config.advancedFilter != undefined
                ? { field: 'advanced', value: config.advancedFilter, }
                : undefined,
            create: true,
            publish: false,
        },
        markdownOptions: {
            modes: ['raw', 'rich_text'],
            // buttons: [],
            // editorComponents: [],
        },
        additionalFields: [
            ...(config.advancedFilter != undefined
                ? [
                    createField('boolean', {
                        name: 'advanced',
                        label: 'Advanced guide',
                        hint: 'This page is an advanced guide',
                        required: true,
                    })
                ] : []
            ),
        ]
    } satisfies Parameters<typeof VitePress['createDefaultPageFolderCollection']>[2]
}
