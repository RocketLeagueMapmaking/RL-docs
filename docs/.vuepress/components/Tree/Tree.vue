<template>
    <div>
      <TreeItem
        class="item"
        :item="treeData"
        :classes="treeData.classes"
        :createItem="createItemKey ? formatters.get(createItemKey) : createItem"
        :isFirstColor="true"
      ></TreeItem>
    </div>
</template>

<script>
import TreeItem from './TreeItem.vue';

const formatters = new Map()
    .set('kismetNode', function (item, isFolder) {
        return isFolder
            ? item.name
            : `<span title="${item.Package}.${item.Class}" style="padding-right: 8px;">${item.type}</span><span ${item.category != null ? `title="Editor category: (${item.category})"` : ''}>${item.name}</span>${item.replicated === 'True' ? `<span style="float: right; background-color: var(--c-brand);">R</span>` : ''}`
    })

export default {
    components: {
        TreeItem
    },
    props: {
        path: {
            type: String,
            required: true
        },
        createItem: {
            required: false,
            type: Function,
            default: function (item, isFolder) {
                return item.name;
            }
        },
        createItemKey: {
            required: false,
            type: String,
            validator: function (value) {
                return formatters.has(value)
            }
        },
    },
    data() {
        return {
            treeData: {},
            formatters,
        }
    },
    created () {
        fetch(this.path, { headers: { 'Content-Type': 'application/json'}, cache: 'force-cache' })
            .then(res => res.json())
            .then(json => this.treeData = json);
    },
}
</script>
