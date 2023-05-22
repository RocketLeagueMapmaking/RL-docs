<template>
    <div
        v-show="!(isFolder && filterChildren().length === 0)"
        class="tree-item"
    >
        <div
            :class="{ bold: isFolder }"
            class="tree-item-content"
            :style="{ 'background-color': isFirstColor ? firstColor : secondColor, 'font-weight': isFolder ? 700 : 400 }"
            @click="toggle"
        >
            <span
                v-if="isFolder"
                :style="{ 'padding-right': '5px'}"
            ><span v-if="!isOpen"> &#9654;</span><span v-else>&#9660;</span></span>

            <component
                :is="componentItems.get(renderComponent)"
                v-if="componentItems.has(renderComponent)"
                :item="item"
                :tree="tree"
                :config-key="configKey"
                :parents="parents"
                :render-component="renderComponent"
                :is-first-color="!isFirstColor"
                :items-to-filter="itemsToFilter.slice(1)"
                :open-on-created="openOnCreated"
                :filter-type="filterType"
                :filter-name="filterName"
            />
            <div v-else>
                {{ item.name }}
            </div>
        </div>
        <div
            v-if="isFolder && isOpen"
        >
            <tree-item
                v-for="(child, index) in filterChildren()"
                :key="index"
                class="item"
                :parents="parents.concat(child.name)"
                :item="child"
                :tree="tree"
                :config-key="configKey"
                :render-component="renderComponent"
                :is-first-color="!isFirstColor"
                :items-to-filter="itemsToFilter.slice(1)"
                :open-on-created="openOnCreated"
                :filter-type="filterType"
                :filter-name="filterName"
            />
        </div>
    </div>
</template>

<script>
import PRITreeItem from './PRITreeItem.vue'
import configs from '../../configs/components/tree.js'

export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
        tree: {
            type: Object,
            required: true,
        },
        configKey: {
            type: String,
            required: false,
            default: '',
        },
        renderComponent: {
            type: String,
            required: true,
        },
        openOnCreated: {
            type: Boolean,
            default: false,
            required: false,
        },
        parents: {
            type: Array,
            required: false,
            default: () => []
        },
        filterType: {
            type: String,
            required: false,
            default: 'none',
        },
        filterName: {
            type: Object,
            required: true,
        },
        itemsToFilter: {
            type: Array,
            required: false,
            default: () => []
        },
        isFirstColor: {
            required: true,
            type: Boolean,
        },
        secondColor: {
            required: false,
            type: String,
            default: 'var(--tipBgColor)'
        },
        firstColor: {
            required: false,
            type: String,
            default: 'var(--borderColor)'
        },
    },
    data: function () {
        return {
            toggled: false,
            toggledOnce: false,
            componentItems: new Map()
                .set('PRITree', PRITreeItem),
        }
    },
    computed: {
        isOpen: function () {
            return !this.toggledOnce ? this.openOnCreated : this.toggled
        },
        isFolder: function () {
            return this.children != undefined
        },
        config: function () {
            if (this.configKey.length > 0) {
                const config = configs[this.configKey]
                if (config) return config
            }

            return undefined
        },
        children: function () {
            return this.getChildren(this.item)
        }
    },
    methods: {
        getChildren: function (item) {
            if (this.config != undefined && this.config.computeChildren) {
                return this.config.computeChildren(item, this.tree)
            }

            return item.children
        },
        filterChild: function (child) {
            const isInPath = this.itemsToFilter.length > 1
                ? this.itemsToFilter[1] === child.name
                : true
            const hasType = this.filterType !== 'none' ? child[this.filterType] : true
            const isInName = this.filterChildName(child)

            return isInPath && isInName && hasType
        },
        filterChildName: function (child) {
            if (this.filterName.name.length === 0) return true
            else if (this.config && this.config.filterChildren) {
                return this.config.filterChildren(child, this.tree, this.filterName)
            } else {
                return child.name.toLowerCase().includes(this.filterName.name.toLowerCase())
            }
        },
        filterChildren: function () {
            const children = this.children

            if (!children) return []
            else return children.filter(n => this.filterChild(n))
        },
        toggle: function () {
            if (!this.toggledOnce) this.toggledOnce = true
            if (this.isFolder) {
                this.toggled = !this.toggled
            }
        },
    },
}
</script>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    padding-left: 12px;
}

.tree-item-content {
    padding: 10px 12px;
    margin-bottom: 2px;
}

.tree-item-content.bold {
    display: flex;
    flex-direction: row;
}

.tree-item-content.bold:hover {
    cursor: pointer;
}

ul, li {
    list-style: none;
}
</style>
