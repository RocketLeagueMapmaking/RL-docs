import { createField, DecapCmsField, fieldToSnakeCase, Options } from 'vite-plugin-decap-cms'

import * as fields from './fields/'

type Block = NonNullable<NonNullable<Options['script']>['markdownEditorComponents']>[number]

interface ComponentBlockOptions {
    id: string
    label: string
    props: DecapCmsField[]
    templateField?: {
        label: string
        labelSingular: string
        nameLabel?: string
        contentLabel?: string
        names?: string[]
    }
}

// TODO: fix enters while transitioning
function createComponentBlock (options: ComponentBlockOptions): Block {
    const { id, label, props, templateField } = options

    interface ComponentData {
        templates: {
            name: string | null;
            content: string;
        }[]
        props: Record<string, unknown>
    }

    return {
        id,
        label,
        pattern: new RegExp(`^<${id}(.*)>((.|\\n)*?)<\\/${id}>$`, 'm'),
        fields: [
            props.length > 0 ? createField('object', {
                name: 'props',
                label: 'Properties',
                required: false,
                collapsed: true,
                fields: props.map(fieldToSnakeCase),
            }) : undefined,
            templateField != undefined ? createField('list', {
                name: 'templates',
                label: templateField.label,
                label_singular: templateField.labelSingular,
                allow_add: true,
                required: false,
                min: 1,
                fields: [
                    createField(templateField.names ? 'select' : 'string', {
                        name: 'name',
                        required: false,
                        label: templateField.nameLabel ?? 'Name',
                        // @ts-expect-error Errors bc of 'options' not in the string options
                        options: templateField.names,
                    }),
                    createField('markdown', {
                        name: 'content',
                        required: true,
                        label: templateField.contentLabel ?? 'Content',
                    }),
                ].filter((n): n is NonNullable<typeof n> => n != undefined),
            }) : undefined,
        ].filter(n => n) as Block['fields'],
        fromBlock: function (match): ComponentData {
            const props = match.at(1), slots = match.at(2)

            return {
                props: props != undefined
                    ? props.split(/(?= :)(?<=")/)
                        .map(str => str.trim().replace(':', '').split('=', 2))
                        .reduce((obj, value) => ({ ...obj, [value[0]]: value[1] }), {})
                    : {},
                templates: slots != undefined
                    ? slots.split('</template>').filter(str => str.length).map((slot) => {
                        const results = /^<template #(.*)>(.*)/ms.exec(slot) ?? []
                        const name = results.at(1)

                        return {
                            name: name ?? null,
                            content: results.at(2) ?? slot,
                        }
                    }) : [],
            }
        },
        toBlock: function (data: ComponentData) {
            const templates = data.templates.map(({ name, content }) => {
                return `<template${name ? ` #${name}` : ''}>\n${content}\n</template>`
            })

            const props = Object.entries(data.props)
                .reduce((str, prop) => str + ` :${prop[0]}="${prop[1]}"`, ' ')

            return `<${id}${props}>\n${templates}\n</${id}>`
        },
        toPreview: function () {
            return ''
        },
    }
}

type BlockFields = { summary?: string, contents: string, type: string }

const customContainerBlock: Block = {
    id: 'custom-block',
    label: 'Custom comtainer',
    fields: [
        {
            name: 'type',
            label: 'Type of comtainer',
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
    pattern: /^:::(\w+)(.*?)\n(.*?)\n^:::$/ms,
    fromBlock: function (match): BlockFields {
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

export default [
    customContainerBlock,
    createComponentBlock({
        id: 'steps',
        label: 'Steps component',
        templateField: {
            label: 'Steps',
            labelSingular: 'step',
        },
        props: fields.stepsProperties,
    }),
    createComponentBlock({
        id: 'tabs',
        label: 'Tabs component',
        templateField: {
            label: 'Tabs',
            labelSingular: 'tab',
            nameLabel: 'Id',
        },
        props: fields.tabsProperties,
    }),
    createComponentBlock({
        id: 'ActionBlock',
        label: 'Action block component',
        templateField: {
            label: 'Content',
            labelSingular: 'content',
            names: ['left', 'right'],
            nameLabel: 'Position',
        },
        props: [],
    }),
]
