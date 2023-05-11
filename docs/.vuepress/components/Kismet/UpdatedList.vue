<template>
    <span>
        <span 
            v-for="node in nodes" 
            :key="node"
        >
            - {{ node }}<br>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        state: { 
            type: String,
            required: true,
        }
    },
    data () {
        return { 
            nodes: ['Loading...'] 
        }
    },
    async mounted () {
        const data = await fetch(`https://raw.githubusercontent.com/ghostrider-05/RL-dummy-classes2/main/ci/changelog/kismet.json`)
            .then(res => res.json())
            .catch(err => {
                console.log(err)
                return undefined
            })

        if (data) {
            console.log('Loaded remote list: ', data, this.state)
            this.nodes = data[this.state]
                .sort((a, b) => a[1].localeCompare(b[1]))
                .map(([, name]) => name.replace('.uc', ''))
        }
    }
}

</script>
