<template>
    <div class="kismet-node">
        <p>Class: {{ node.Class }} <a :href="source(node)" v-if="!hideImage">Source</a></p>
        <!-- A description of the kismet node -->
        <p v-if="node.description"> {{ node.description }}</p>
        <!-- The image of the kismet node -->
        <img :src="imagePath(node)" v-bind:alt="node.name" v-if="!hideImage">
        <!-- A list of all links (input, output and variable) and properties -->
        <ul>
            <div v-if="node.variables.length > 0">
                <KismetNodeProperty header="Properties" :properties="node.variables"/>
            </div>

            <div v-if="node.links.input.length > 0">
                <KismetNodeProperty header="Input links" :properties="node.links.input"/>
            </div>

            <div v-if="node.links.output.length > 0">
                <KismetNodeProperty header="Output links" :properties="node.links.output"/>
            </div>

            <div v-if="node.links.variable.length > 0">
                <KismetNodeProperty header="Variable links" :properties="node.links.variable"/>
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
            const name = node.displayName.toLowerCase().replaceAll('\"', '').replaceAll(' ','_');
            const categoryName = this.category[0].toUpperCase() + this.category.slice(1);

            return `/images/kismet/${categoryName}/${node.Package}/${name}.png`;
        },

        source (node) {
            return `https://github.com/RocketLeagueMapmaking/RL-Dummy-Classes/blob/master/${node.Package}/Classes/${node.Class}.uc`
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