<template>
  <div>
    <TreeItem
      class="item"
      :item="treeData"
      :classes="treeData.classes"
      :create-item="createItemKey.length > 0 ? formatters.get(createItemKey) : createItem"
      :is-first-color="true"
    />
  </div>
</template>

<script>
import TreeItem from './TreeItem.vue'

const formatters = new Map()
    .set('kismetNode', function (item, isFolder) {
        return isFolder
            ? item.name
            : `<span title="${item.Package}.${item.Class}" style="padding-right: 8px;">${item.type}</span><span ${item.category != null ? `title="Editor category: (${item.category})"` : ''}>${item.name}</span>${item.replicated === 'True' ? '<span style="float: right; background-color: var(--c-brand);">R</span>' : ''}`
    })

export default {
    components: {
        TreeItem
    },
    props: {
        treeData: {
            type: Object,
            required: true
        },
        createItem: {
            required: false,
            type: Function,
            default: function (item) {
                return item.name
            }
        },
        createItemKey: {
            required: false,
            type: String,
            default: '',
            validator: function (value) {
                return value.length === 0 || formatters.has(value)
            }
        },
    },
    data() {
        return {
            formatters,
        }
    },
}
</script>
