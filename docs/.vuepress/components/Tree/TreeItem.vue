<template>
  <div class="tree-item">
    <div
      :class="{ bold: isFolder }"
      class="tree-item-content"
      @click="toggle"
      :style="{ 'background-color': isFirstColor ? firstColor : secondColor, 'font-weight': isFolder ? 700 : 400 }"
    >
    <span v-if="isFolder" :style="{ 'padding-right': '5px'}"><span v-if="!isOpen"> &#9650;</span><span v-else>&#9660;</span></span>
    <span v-html="createItem(computedItem, isFolder)"></span>
    </div>
    <div
      v-show="isOpen"
      v-if="isFolder"
    >
      <tree-item
        v-for="(child, index) in computedItem.c"
        :key="index"
        class="item"
        :item="child"
        :isFirstColor="!isFirstColor"
        :createItem="createItem"
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
            required: false,
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
            return 'rc' in this.item ? this.classes.find(x => x.type === this.item.rc) : this.item
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.isOpen = !this.isOpen
            }
        },
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
