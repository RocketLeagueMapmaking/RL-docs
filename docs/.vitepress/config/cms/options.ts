import { createField, type VitePress } from 'vite-plugin-decap-cms'
import { SidebarItemConfig } from '../sidebar'

export const mediaFolder = 'docs/.vitepress/public/images/'

export function createFolderOptions (label: string, config: SidebarItemConfig) {
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
            create: true,
        },
        markdownOptions: {
            modes: ['raw', 'rich_text'],
            // buttons: [],
            // editorComponents: [],
        },
        additionalFields: [
            createField('string', {
                name: 'filename',
                label: 'File name',
            }),
        ]
    } satisfies Parameters<typeof VitePress['createDefaultPageFolderCollection']>[2]
}
