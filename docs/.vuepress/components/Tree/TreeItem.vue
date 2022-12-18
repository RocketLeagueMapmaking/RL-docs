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
      <span v-html="createItem(computedItem, isFolder)" />
    </div>
    <div
      v-show="isOpen"
      v-if="isFolder"
    >
      <tree-item
        v-for="(child, index) in computedItem.c"
        :key="index"
        class="item"
        :item="computeItem(child)"
        :is-first-color="!isFirstColor"
        :create-item="createItem"
        :classes="classes"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item: Object,
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
        createItem : {
            required: true,
            type: Function,
        },
        classes: {
            required: true,
            type: Array,
        }
    },
    data: function () {
        return {
            isOpen: false,
        }
    },
    computed: {
        isFolder: function () {
            return this.item.c && this.item.c.length
        },
        computedItem: function () {
            const out = 'cr' in this.item ? this.classes.find(x => x.type === this.item.cr) : this.item
            if (!out) console.log('Unable to find item', this.item)
            return out
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.isOpen = !this.isOpen
            }
        },
        computeItem: function (item) {
            const out = 'cr' in item ? this.classes.find(x => x.type === item.cr) : item
            if (!out) console.log('Unable to find item', item)
            return out
        }
    },
}
</script>

<style scoped>
.item {
    /* background-color: red; */
    /* margin-left: -3px; */
    /* margin: 4px 12px; */
    display: flex;
    flex-direction: column;
    padding-left: 12px;
}

.tree-item-content {
    padding: 10px 12px;
    margin-bottom: 2px;
}



ul, li {
    /* background-color: green; */
    list-style: none;
}
</style>
