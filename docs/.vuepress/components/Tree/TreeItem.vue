<template>
    <div class="tree-item">
        <div
            :class="{ bold: isFolder }"
            class="tree-item-content"
            :style="{ 'background-color': isFirstColor ? firstColor : secondColor, 'font-weight': isFolder ? 700 : 400 }"
            @click="toggle"
        >
            <span
                v-if="isFolder"
                :style="{ 'padding-right': '5px'}"
            ><span v-if="!isOpen"> &#9650;</span><span v-else>&#9660;</span></span>
            <component
                :is="componentItems.get(renderComponent)"
                :item="computedItem"
                :is-folder="isFolder > 0"
                :parents="parents"
            />
        </div>
        <div
            v-show="isOpen"
            v-if="isFolder"
        >
            <tree-item
                v-for="(child, index) in filterChildren(computedItem)"
                :key="index"
                class="item"
                :parents="parents.concat(computedItem.name)"
                :item="computeItem(child)"
                :render-component="renderComponent"
                :is-first-color="!isFirstColor"
                :classes="classes"
                :items-to-filter="itemsToFilter.slice(1)"
                :open-on-created="openOnCreated"
            />
        </div>
    </div>
</template>

<script>
import PRITreeItem from './PRITreeItem.vue'

const componentItems = new Map()
    .set('PRITree', PRITreeItem)

export default {
    props: {
        item: {
            type: Object,
            required: true,
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
        classes: {
            required: true,
            type: Array,
        }
    },
    data: function () {
        return {
            toggled: false,
            toggledOnce: false,
            componentItems,
        }
    },
    computed: {
        isOpen: function () {
            return !this.toggledOnce ? this.openOnCreated : this.toggled
        },
        isFolder: function () {
            return this.item.c && this.item.c.length
        },
        computedItem: function () {
            return this.computeItem(this.item)
        }
    },
    methods: {
        filterChild: function (child) {
            return this.itemsToFilter.length > 1 ? this.itemsToFilter[1] === this.computeItem(child).name : true
        },
        filterChildren: function (item) {
            if (!item.c) return []
            else return item.c.filter(n => this.filterChild(n))
        },
        toggle: function () {
            if (!this.toggledOnce) this.toggledOnce = true
            if (this.isFolder) {
                this.toggled = !this.toggled
            }
        },
        computeItem: function (item) {
            if (!('cr' in item)) {
                return item
            }

            const out = this.classes.find(x => x.type === item.cr)
            if (!out) console.log('Unable to find item', item)

            return {
                ...out,
                name: item.name
            }
        }
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
