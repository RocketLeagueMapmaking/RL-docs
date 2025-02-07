import { createField, VitePress } from 'vite-plugin-decap-cms'

import { createFeatureFields } from './theme'

export const createHomePageFields = () => {
    const steamComponent = createField('object', {
        name: 'steam',
        label: 'Steam maps',
        required: false,
        fields: [
            createField('boolean', {
                name: 'enabled',
                label: 'Enable',
                required: true,
            }),
            createField('number', {
                name: 'amount',
                label: 'Amount of maps',
                required: true,
            }),
            createField('object', {
                name: 'title',
                label: 'Title',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: true,
                    }),
                    createField('string', {
                        name: 'title',
                        label: 'Title',
                        required: false,
                    }),
                    createField('object', {
                        name: 'switchSortBy',
                        label: 'Switch sort by',
                        required: false,
                        fields: [
                            createField('boolean', {
                                name: 'enabled',
                                label: 'Enabled',
                                required: false,
                            }),
                            createField('select', {
                                name: 'initial',
                                label: 'Initial mode',
                                required: true,
                                options: [
                                    'created',
                                    'updated',
                                ],
                            }),
                            createField('object', {
                                name: 'prefix',
                                label: 'Mode prefix',
                                required: true,
                                fields: [
                                    createField('string', {
                                        name: 'created',
                                        label: 'Created',
                                        required: true,
                                    }),
                                    createField('string', {
                                        name: 'updated',
                                        label: 'Updated',
                                        required: true,
                                    }),
                                ]
                            }),
                        ]
                    }),
                ]
            }),
        ]
    })

    const resources = createField('list', {
        name: 'resources',
        label: 'Resources',
        label_singular: 'resource',
        allow_add: true,
        required: false,
        fields: createFeatureFields(),
    })

    const events = createField('object', {
        name: 'events',
        label: 'Events',
        fields: [
            createField('string', {
                name: 'title',
                label: 'Title',
                required: true,
            }),
            createField('text', {
                name: 'description',
                label: 'Description',
                required: true,
            }),
            createField('object', {
                name: 'action',
                label: 'Action button',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: true,
                    }),
                    createField('string', {
                        name: 'link',
                        label: 'Link',
                        required: true,
                    }),
                ],
            }),
            createField('string', {
                name: 'dataUrl',
                label: 'Data url',
                required: true,
            }),
        ],
    })

    const promotion = createField('object', {
        name: 'promotion',
        label: 'Promotion',
        fields: [
            createField('image', {
                name: 'image',
                label: 'Image',
                required: true,
            }),
            createField('object', {
                name: 'title',
                label: 'Title',
                hint: 'Provide either an image or text',
                required: true,
                fields: [
                    createField('string', {
                        name: 'text',
                        label: 'Text',
                        required: false,
                    }),
                    createField('image', {
                        name: 'image',
                        label: 'Image',
                        required: false,
                    }),
                ],
            }),
            createField('text', {
                name: 'description',
                label: 'Description',
                required: true,
                hint: 'To have line breaks in the text add <br>'
            }),
        ],
    })

    const sponsors = createField('object', {
        name: 'sponsors',
        label: 'Sponsors',
        fields: [
            createField('string', {
                name: 'message',
                label: 'Message',
                required: true,
            }),
            createField('string', {
                name: 'actionLink',
                label: 'Action link',
                required: true,
            }),
            createField('string', {
                name: 'dataUrl',
                label: 'Data url',
                required: true,
            }),
        ],
    })

    return VitePress.createHomePageFields({
        additionalHeroFields: [
            steamComponent,
        ],
    }).concat(resources)
        .concat(events)
        .concat(promotion)
        .concat(sponsors)
}
