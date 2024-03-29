<template>
    <div
        v-if="nodes.length > 0"
        class="kismet-container"
        :class="category"
    >
        <h3>{{ category }}</h3>
        <div
            v-for="(node, index) in nodes"
            :key="node.name + '_' + index"
        >
            <div v-if="showNode(node)">
                <div
                    class="node-header"
                    @click="toggle(node)"
                >
                    <span v-if="!isHidden(node)">&#9654;</span>
                    <span v-else>&#9660;</span>
                    <a>
                        {{ node.displayName }}
                    </a>

                    <div
                        v-if="isNonDummyClass(node)"
                        class="label"
                        title="This class is not documented in the dummy classes"
                    >
                        <p>Unregistered</p>
                    </div>
                </div>
                <div v-if="isHidden(node)">
                    <KismetNode
                        :node="node"
                        :category="category"
                        :hide-image="false"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KismetNode from './NodeItem.vue'

export default {
    components: {
        KismetNode
    },

    props: {
        category: {
            type: String,
            required: true
        },
        upk: {
            type: String,
            required: true,
            validator: (upk) => {
                return ['ProjectX', 'TAGame', 'all'].indexOf(upk) !== -1
            }
        },
        nodes: {
            type: Array,
            required: true
        },
        dummyItems: {
            type: Array,
            default: () => [],
            required: false
        },
        names: {
            type: Array,
            default: () => [],
            required: false
        },
        openAllNodes : {
            type: Boolean,
            default: false,
            required: false
        }
    },

    data () {
        return {
            toggled: [],
        }
    },

    methods: {
        toggle (node){
            const index = this.nodes.indexOf(node)
            if(this.toggled.includes(index)){
                this.toggled = this.toggled.filter(i => i !== index)
            }else this.toggled.push(index)
        },

        isHidden (node){
            return this.openAllNodes || this.toggled.includes(this.nodes.indexOf(node))
        },

        isNonDummyClass (node) {
            return this.dummyItems.length > 0 ? !this.dummyItems.includes(`${node.Package}/Classes/${node.Class}.uc`) : false
        },

        showNode (node) {
            return this.category === node.type
                && (this.upk === 'all' || node.Package === this.upk)
                && (this.names && this.names.length > 0 ? this.names.includes(node.displayName) : true)
        }
    }
}
</script>

<style scoped>
.kismet-container h3 {
    text-transform: capitalize
}

.node-header {
    margin: 14px 0 0 0;
    width: inherit;
    background-color: var(--tipBgColor);
    padding: 9px 9px;
    min-height: 28px;
    display: flex;
    align-items: center;
    border-radius: 2px;
}

.node-header:hover {
    cursor: pointer;
}

.node-header a, .node-header a:hover {
    color: var(--textColor);
    width: inherit;
    display: inherit;
    text-decoration: none !important;
}

.node-header .label {
    padding: 5px 12px;
    border-radius: 4px;
    background-color: #B13434;
}

.node-header .label p {
    margin: 0px;
}

.node-header span {
    padding: 8px;
}

</style>
