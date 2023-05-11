<template>
    <div>
        <TreeItem
            class="item"
            :item="data"
            :classes="data.classes"
            :is-first-color="true"
            :items-to-filter="highlighted"
            :render-component="itemCompName"
            :open-on-created="openAll"
        />
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue'

export default {
    components: {
        TreeItem
    },
    props: {
        treeData: {
            type: Object,
            required: false,
            default: () => ({ classes: [] }),
        },
        url: {
            type: String,
            required: false,
            default: ''
        },
        itemCompName: {
            required: true,
            type: String
        },
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
            data: { classes: [] },
        }
    },

    computed: {
        openAll: function () {
            return this.hasPath || this.openAllItems
        }
    },

    async mounted () {
        if (this.treeData) {
            this.data = this.treeData
        } else {
            const data = await fetch(this.url)
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                    return undefined
                })

            if (data) {
                this.data = data
            }
        }

        if ('version' in this.data) {
            this.$page.version = this.data.version
        }

        const path = new URLSearchParams(window.location.search).get('path')

        if (path) {
            this.highlighted = path.split('.')
            this.hasPath = true
        }
    }
}
</script>
