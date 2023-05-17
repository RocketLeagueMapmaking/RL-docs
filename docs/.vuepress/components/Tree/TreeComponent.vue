<template>
    <div>
        <slot :version="version"></slot>
        <TreeItem
            class="item"
            :item="data"
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
    data() {
        return {
            highlighted: [],
            hasPath: false,
            itemCompName: 'default',
            data: { name: 'Loading...', children: [] },
            version: 'loading...',
            filterType: 'none',
        }
    },

    computed: {
        openAll: function () {
            return this.hasPath || this.openAllItems
        }
    },

    async mounted () {
        let mountedData = this.data

        if (this.treeData.name) {
            mountedData = this.treeData
        } else {
            console.log('Fetching remote tree data...')
            const data = await fetch(this.url)
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                    return undefined
                })

            if (data) {
                mountedData = data
            }
        }

        if (this.versionKey in mountedData) {
            console.log('Setting tree version to ' + mountedData[this.versionKey])
            this.version = mountedData[this.versionKey]
        }

        const config = configs[this.configKey]

        if (config) {
            if (config.component) this.itemCompName = config.component
            if (config.mounted) {
                console.log('Converting tree data with key ' + this.configKey)
                this.data = config.mounted(mountedData)
                console.log('Finished converting tree data')
            } else {
                this.data = mountedData
            }
        } else {
            console.log('Rendering tree with default config')
            this.data = mountedData
        }

        console.log('Rendering tree with component ' + this.itemCompName)
        console.log(this.data)

        const params = new URLSearchParams(window.location.search)
        const path = params.get('path'), filter = params.get('filter')

        if (path) {
            this.highlighted = path.split('.')
            this.hasPath = true
        } else if (filter) {
            this.filterType = filter
        }
    }
}
</script>
