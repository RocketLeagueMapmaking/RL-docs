import { createField } from 'vite-plugin-decap-cms'

export const stepsProperties = [
    createField('string', {
        name: 'color',
        label: 'Color',
        required: false,
    }),
]

export const tabsProperties = [
    createField('list', {
        name: 'tabs',
        label: 'Tab names',
        label_singular: 'name',
        allow_add: true,
        required: true,
    }),
    createField('string', {
        name: 'startTab',
        label: 'Start tab name',
        required: false,
    }),
    createField('string', {
        name: 'searchParam',
        label: 'Search parameter',
        required: false,
    }),
]
