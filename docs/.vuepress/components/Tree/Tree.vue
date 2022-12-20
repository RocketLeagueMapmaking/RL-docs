<template>
  <div>
    <TreeItem
      class="item"
      :item="treeData"
      :classes="treeData.classes"
      :is-first-color="true"
      :items-to-filter="highlighted"
      :renderComponent="itemCompName"
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
            required: true
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
        }
    },

    computed: {
        openAll: function () {
            return this.hasPath || this.openAllItems
        }
    },

    mounted () {
        const path = new URLSearchParams(window.location.search).get('path')

        if (path) {
            this.highlighted = path.split('.')
            this.hasPath = true
        }
    }
}
</script>
