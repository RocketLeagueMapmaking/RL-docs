<template>
    <div class="kismet-node">
        <p>
            Class: <a
                v-if="!hideImage"
                :href="src"
            >{{ node.Class }}<OutboundLink /></a>
        </p>
        <!-- A description of the kismet node -->
        <p v-if="node.description">
            {{ node.description }}
        </p>
        <!-- The image of the kismet node -->
        <img
            v-if="!hideImage"
            :src="imageSrc"
            :alt="node.name"
            :title="imageTitle"
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

    computed: {
        imageTitle () {
            return `Auto-generated image of ${this.node.Class}. May not be accurate.`
        },

        imageSrc () {
            return `https://kismet-cdn.ghostrider-05.com/images?name=${this.node.Class}`
        },

        src () {
            return `https://github.com/ghostrider-05/RL-dummy-classes2/blob/main/Src/${this.node.Package}/Classes/${this.node.Class}.uc`
        }
    },
}
</script>

<style scoped>
.kismet-node {
    background-color: var(--codeBgColor);
    padding: .8rem;
}

.kismet-node img {
    max-width: 300px;
    margin: 0 auto;
    display: block;
}
</style>
