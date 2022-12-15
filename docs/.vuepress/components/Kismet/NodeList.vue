<template>
    <div class="kismet-container" :class="category" v-if="nodes.length > 0">
        <h3>{{ category }}</h3>
        <div v-for="node in nodes" :key="node.name">
            <div v-if="showNode(node)">
                <div class="node-header" v-on:click="toggle(node)">
                    <a>
                        {{ node.displayName }}
                    </a>

                    <div class="label" v-if="IsNonDummyClass(node)" title="This class is not documented in the dummy classes">
                        <p>Unregistered</p>
                    </div>

                    <span v-show="!Ishidden(node)">&#9660;</span>
                    <span v-show="Ishidden(node)">&#9650;</span>
                </div>
                <div v-show="Ishidden(node)">
                    <KismetNode :node="node" :category="category" :hideImage="IsNonDummyClass(node)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TAGameData from '../../public/data/kismet_nodes.json';

import { formatNodes } from './NodeSearch.vue'

const nodes = formatNodes(TAGameData)

export default {
    props: {
        category: {
            type: String,
            required: true
        },
        upk: {
            type: String,
            required: true,
            validator: (upk) => {
                return ['ProjectX', 'TAGame', 'all'].indexOf(upk) !== -1;
            }
        },
        dummyItems: {
            type: Array,
            required: false
        },
        onlyDummyItems: {
            type: Boolean,
            required: false
        },
        names: {
            type: Array,
            required: false
        }
    },
    data(){
        return {
            toggled: [],
            nodes
        }
    },
    methods: {
        toggle(node){
            let index = this.nodes.indexOf(node);
            if(this.toggled.includes(index)){
                this.toggled = this.toggled.filter(i => i !== index);
            }else this.toggled.push(index);
        },
        Ishidden(node){
            return this.toggled.includes(this.nodes.indexOf(node));
        },

        IsNonDummyClass (node) {
            return this.dummyItems.length > 0 ? !this.dummyItems.includes(`${node.Package}/Classes/${node.Class}.uc`) : false
        },
        showNode (node) {
            return this.category === node.type 
                && (this.upk === 'all' || node.Package === this.upk) 
                && (this.names ? this.names.includes(node.displayName) : true)
                && (this.onlyDummyItems ? !this.IsNonDummyClass(node) : true)
        }
    }
}
</script>

<style scoped>
.kismet-container h3 {
    text-transform: capitalize
}

.node-header{ 
    margin: 14px 0 0 0;
    width: inherit;
    background-color: var(--borderColor);
    padding: 9px 9px;
    min-height: 28px;
    display: flex;
    align-items: center;
    border-radius: 2px;
}

.node-header a, .node-header a:hover {
    color: var(--textColor);
    width: inherit;
    display: inherit;
    text-decoration: none !important;
}

.node-header .label {
    position:absolute; 
    right: 300px;
    padding: 5px 12px;
    border-radius: 4px;
    background-color: #B13434;
}

.node-header .label p {
    margin: 0px;
}

.node-header span {
    margin-left: auto;
    padding-right: 8px;
}

</style>