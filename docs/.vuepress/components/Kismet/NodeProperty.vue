<template>
    <div>
        <li class="bold">
            {{ header }}
        </li>
        <ul>
            <div
                v-for="link in properties"
                :key="link.name"
            >
                <div v-if="link.name !== 'VfTable_FTickableObject'">
                    <li :title="tooltip(link)">
                        <span v-if="link.type">{{ link.type }}</span>
                        <span class="name">
                            {{ link.name }} 
                        </span>
                        <span v-if="link.description"> 
                            - {{ link.description }}
                        </span>
                    </li>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        properties: {
            type: Array,
            required: true
        },
        header: {
            type: String,
            required: true
        }
    },

    methods: {
        tooltip(link){
            if(['input', 'output'].some(item => this.header.toLowerCase().includes(item))) return
            
            if(link.expectedType){
                return `Expected class: ${link.expectedType}`
            // }else{
            //     return link.default ? `Type: ${link.expectedType}. Default value: ${link.default}` : `Type: ${link.expectedType}`;
            }
            
        }
    }
    
}
</script>

<style scoped>
.bold {
    font-weight: 700;
}
.name {
    font-weight: 500;
}
</style>
