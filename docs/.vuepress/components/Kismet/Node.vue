<template>
  <div class="kismet-node">
    <p>
      Class: {{ node.Class }} <a
        v-if="!hideImage"
        :href="source(node)"
      >Source</a>
    </p>
    <!-- A description of the kismet node -->
    <p v-if="node.description">
      {{ node.description }}
    </p>
    <!-- The image of the kismet node -->
    <img
      v-if="!hideImage"
      :src="imagePath(node)"
      :alt="node.name"
    >
    <!-- A list of all links (input, output and variable) and properties -->
    <ul>
      <div v-if="node.variables.length > 0">
        <KismetNodeProperty
          header="Properties"
          :properties="node.variables"
        />
      </div>

      <div v-if="node.links.input.length > 0">
        <KismetNodeProperty
          header="Input links"
          :properties="node.links.input"
        />
      </div>

      <div v-if="node.links.output.length > 0">
        <KismetNodeProperty
          header="Output links"
          :properties="node.links.output"
        />
      </div>

      <div v-if="node.links.variable.length > 0">
        <KismetNodeProperty
          header="Variable links"
          :properties="node.links.variable"
        />
      </div>
    </ul>
  </div>
</template>

<script>

export default {
    props: {
        node: {
            type: Object,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        hideImage: {
            type: Boolean,
            required: true
        }
    },

    methods: {
        imagePath(node) {
            const name = node.displayName.toLowerCase().replace(/"/g, '').replace(/ /g,'_')
            const categoryName = this.category[0].toUpperCase() + this.category.slice(1)

            return `/images/kismet/${categoryName}/${node.Package}/${name}.png`
        },

        source (node) {
            return `https://github.com/ghostrider-05/RL-dummy-classes2/blob/main/Src/${node.Package}/Classes/${node.Class}.uc`
        }
    }
}
</script>

<style scoped>
.kismet-node {
    background-color: var(--codeBgColor);
    padding: .8rem;
}
</style>
