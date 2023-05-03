<template>
  <span class="item-render-content">
    <div v-if="isFolder">
      <span :title="item.type">{{ item.name }}</span>
    </div>
    <div
      v-else
      class="child"
    >
      <div>
        <span
          :title="`${item.Package}.${item.Class}`"
          style="padding-right: 8px;"
        >{{ item.type }}</span>
        <span :title="item.category != null ? `Editor category: (${item.category})` : ''">{{ item.name }}</span>
      </div>
      <span
        v-if="item.replicated === 'True'"
        style="background-color: var(--accentColor); border-radius: 2px; padding: 1px 10px;"
      >
        R
      </span>
    </div>
    <div
      v-if="parents.length > 0"
      class="actions"
    >
      <button
        title="Share this path"
        @click="copy(['Player'].concat(parents.slice(1)).join('.') + `.${item.name}`, 'the item path')"
      >
        <span
          class="iconify"
          data-icon="material-symbols:conversion-path"
        />

      </button>
      <button
        title="Share this property"
        @click="copy(shareUrl(), 'the url to this item path')"
      >
        <span
          class="iconify"
          data-icon="fa6-solid:link"
        />
      </button>
      <button
        title="Copy kismet"
        @click="fetchKismet()"
      >
        <span
          class="iconify"
          data-icon="fa6-solid:clone"
        />
      </button>
    </div>
  </span>
</template>

<script>

export default {
    props: {
        item: Object,
        isFolder: Boolean,
        parents: Array
    },
    methods: {
        copy: function (text, type) {
            navigator.clipboard.writeText(text).then(alert('Copied ' + type + ' to your clipboard'))
        },
        shareUrl: function () {
            const url = new URL(window.location.href)
            return url.origin + url.pathname + '?path=' + this.parents.join('.') + `.${this.item.name}`
        },
        fetchKismet: function () {
            const url = `https://kismet.rocketleaguemapmaking.workers.dev/?type=${this.item.type || 'object'}&path=${this.parents.join('.') + `.${this.item.name}`}`
            fetch(url).then(res => res.text()).then(kismet => this.copy(kismet, 'kismet'))
        }
    }
}
</script>

<style scoped>
.item-render-content, .item-render-content .child {
    display: flex;
    justify-content: space-between;
    width: -webkit-fill-available;
}

.actions {
    display: flex;
    flex-direction: row;
}

button {
    border: none;
    color: var(--textColor);
    background-color: var(--bgColor);
    padding: 4px 6px;
    margin: 0px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
}

button:hover {
    cursor: pointer;
}
</style>
