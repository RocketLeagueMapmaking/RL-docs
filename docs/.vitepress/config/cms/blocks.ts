import { DecapCmsField } from 'vite-plugin-decap-cms'

type BlockFields = { summary?: string, contents: string, type: string }

export const customContainerBlock = {
    id: 'custom-block',
    label: 'Custom block',
    fields: [
        {
            name: 'type',
            label: 'Type of block',
            widget: 'select',
            required: true,
            options: [
                'details',
                'warning',
                'danger',
                'info',
                'tip',
                // Not a custom container, but has the same syntax
                'raw',
            ],
        },
        {
            name: 'summary',
            label: 'Summary',
            required: false,
            widget: 'string'
        },
        {
            name: 'contents',
            label: 'Contents',
            required: true,
            widget: 'markdown'
        }
    ] satisfies DecapCmsField[],
    // @ts-expect-error Needs flag to work
    pattern: /^:::(\w+)(.*?)\n(.*?)\n^:::$/ms,
    fromBlock: function (match: RegExpMatchArray): BlockFields {
        return {
            type: match[1],
            summary: match[2],
            contents: match[3]
        }
    },
    toBlock: function (data: BlockFields) {
        return `:::${data.type} ${data.summary}\n${data.contents}\n:::`
    },
    toPreview: function (data: BlockFields) {
        return `:::${data.type} ${data.summary}\n${data.contents}\n:::`
    },
}
