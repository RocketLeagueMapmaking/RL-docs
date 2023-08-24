<template>
    <div>
        <slot
            name="content"
            :version="version"
        />
        <slot
            name="search"
            :set-options="setOptions"
            :set-filter-name="setFilterName"
            :filter-name="filterName"
        />
        <TreeItem
            class="item"
            :item="data"
            :filter-name="filterName"
            :is-first-color="true"
            :items-to-filter="highlighted"
            :render-component="itemCompName"
            :open-on-created="openAll"
            :filter-type="filterType"
            :tree="data"
            :config-key="configKey"
        />
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'
import configs from '../../configs/components/tree.js'

export default {
    components: {
        TreeItem
    },
    props: {
        // the tree data to use
        treeData: {
            type: Object,
            required: false,
            default: () => ({ name: undefined, children: [] }),
        },
        // the key to use for converting the tree data in the map above
        configKey: {
            type: String,
            required: false,
            default: ''
        },
        // the url to fetch the tree data from
        url: {
            type: String,
            required: false,
            default: ''
        },
        // the key to set the version on the slot version
        versionKey: {
            type: String,
            required: false,
            default: 'version'
        },
        // whether to open all items by default
        openAllItems: {
            required: false,
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            highlighted: [],
            itemCompName: 'default',
            data: { name: 'Loading...', children: [] },
            version: 'loading...',
            filterType: 'none',
            filterName: { name: '', level: 1 },
        }
    },

    computed: {
        openAll: function () {
            return this.hasPath || this.openAllItems
        },

        hasPath: function () {
            return this.highlighted.length > 0
        },
    },

    async mounted () {
        let mountedData = this.data

        if (this.treeData.name) {
            mountedData = this.treeData
        } else {
            console.debug('Fetching remote tree data...')
            const data = await fetch(this.url)
                .then(res => res.json())
                .catch(err => {
                    console.error(err)
                    return undefined
                })

            if (data) {
                mountedData = data
            }
        }

        if (this.versionKey in mountedData) {
            console.debug('Setting tree version to ' + mountedData[this.versionKey])
            this.version = mountedData[this.versionKey]
        }

        const config = configs[this.configKey]

        if (config) {
            if (config.component) this.itemCompName = config.component
            if (config.mounted) {
                console.debug('Converting tree data with key ' + this.configKey)
                this.data = config.mounted(mountedData)
                console.debug('Finished converting tree data')
            } else {
                this.data = mountedData
            }
        } else {
            console.debug('Rendering tree with default config')
            this.data = mountedData
        }

        console.debug('Rendering tree with component ' + this.itemCompName)

        const params = new URLSearchParams(window.location.search)
        const path = params.get('path'), filter = params.get('filter')

        if (path) {
            console.debug('Setting tree path to ' + path)

            this.highlighted = path.split('.')
        } else if (filter) {
            console.debug('Setting tree filter to ' + filter)

            this.filterType = filter
        }
    },

    methods: {
        setFilterName ({ name, level }) {
            console.debug('Setting filter to ' + name + ' at level ' + level)

            if (name) this.filterName.name = name
            if (level) this.filterName.level = level
        },

        /**
         * @param {{ filterType?: string }} options
         */
        setOptions (options) {
            if (options.filterType && options.filterType.length > 0) {
                this.filterType = options.filterType
            }
        },
    }
}
</script>
