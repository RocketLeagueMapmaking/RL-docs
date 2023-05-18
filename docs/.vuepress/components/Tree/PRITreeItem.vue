<template>
    <span class="item-render-content">
        <div v-if="item.is_parent">
            <span :title="title">{{ item.name }}</span>
        </div>
        <div
            v-else
            class="child"
        >
            <div :title="title">
                <span class="child-type">{{ item.type }}</span>
                <span>{{ item.name }}</span>
            </div>
        </div>
        <div class="actions">
            <span
                v-if="item.replicated"
                class="replicated"
                :title="replicated.title"
            >
                {{ replicated.name }}   
            </span>
            <div
                v-if="showActions"
                class="actions"
            >
                <button 
                    v-for="action in actions" 
                    :key="action.title"
                    :title="action.title"
                    @click="action.onClick"
                >
                    <span
                        class="iconify"
                        :data-icon="action.icon"
                    />
                </button>
            </div>
        </div>
    </span>
</template>

<script>

export default {
    props: {
        item: { type: Object, required: true },
        parents: { type: Array, required: true },
    },

    data () {
        return {
            actionsOnParents: false,
            showCopyConfirmation: true,
            replicated: {
                name: 'R',
                title: 'This property is flagged as any kind of replicated',
            },
        }
    },

    computed: {
        title: function () {
            const { category, description, defaultValue, is_parent, parent, type } = this.item
            const cls = is_parent ? type : `${parent.Package}.${parent.name}`

            return `Class: ${cls}\nEditor category: ${category ? `(${category})` : ''}\nDescription: ${description || ''}\nDefault value: ${defaultValue || ''}`
        },

        path: function () {
            return ['Player', ...this.parents].join('.')
        },

        showActions: function () {
            return this.parents.length > 0 && (this.item.is_parent ? this.actionsOnParents : true)
        },

        actions: function () {
            return [
                {
                    title: 'Share this path',
                    icon: 'material-symbols:conversion-path',
                    onClick: () => this.copy(this.path, "the item path")
                },
                {
                    title: 'Share this property',
                    icon: 'fa6-solid:link',
                    onClick: () => this.copy(this.shareUrl(), "the url to this item path")
                },
                {
                    title: 'Copy kismet',
                    icon: 'fa6-solid:clone',
                    onClick: () => this.fetchKismet()
                },
            ]
        },
    },

    methods: {
        copy: function (text, type) {
            navigator.clipboard.writeText(text).then(() => {
                if (this.showCopyConfirmation) {
                    alert('Copied ' + type + ' to your clipboard')
                }
            })
        },
        shareUrl: function () {
            const url = new URL(window.location.href)
            return url.origin + url.pathname + '?path=' + this.path
        },
        fetchKismet: function () {
            const url = `https://kismet.ghostrider.workers.dev/?type=${this.item.type || 'object'}&path=${this.path}`
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

.child-type {
    padding-right: 8px;
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

.replicated {
    background-color: var(--accentColor);
    border-radius: 2px; 
    padding: 1px 10px;
}
</style>
