<template>
    <div>
        <div class="search-options">
            <div class="search-row">
                <input
                    :placeholder="searchPlaceholder"
                    @input="(event) => searchValue = event.target.value"
                >

                <select @change="(event) => setOptions({ filterType: event.target.value })">
                    <option
                        v-for="option in filterOptions"
                        :key="option.value"
                        :value="option.value"
                    >
                        {{ option.name }}
                    </option>
                </select>

                <button
                    :style="{
                        color: searchValue.length > 0
                            ? 'var(--textColor)'
                            : 'var(--blockquoteBorderColor)',
                    }"
                    @click="setInputName({ name: searchValue })"
                >
                    <span
                        class="iconify"
                        data-icon="fa-solid:search"
                        data-rotate="90deg"
                    />
                </button>
            </div>
            <div class="search-row">
                <button
                    :style="{
                        color: inputName.name.length > 0
                            ? 'var(--textColor)'
                            : 'var(--blockquoteBorderColor)',
                    }"
                    :disabled="inputName.name.length === 0"
                    @click="setInputName({ level: inputName.level + 1 })"
                >
                    {{ actions.more }}
                </button>

                <button @click="resetSearch()">
                    {{ actions.reset }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        setInputName: {
            type: Function,
            required: true,
        },
        setOptions: {
            type: Function,
            required: true,
        },
        inputName: {
            type: Object,
            required: true,
        },
    },

    data () {
        return {
            searchPlaceholder: 'Search...',
            searchValue: '',
            actions: {
                more: 'Show more',
                reset: 'Reset',
            },
            filterOptions: [
                { name: 'All properties', value: 'none' },
                { name: 'Replicated properties', value: 'replicated' },
                { name: 'Properties with description', value: 'description' },
                { name: 'Properties with default value', value: 'defaultValue' },
            ]
        }
    },

    methods: {
        resetSearch () {
            this.searchValue = ''
            this.setOptions({ filterType: 'none' })
            this.setInputName({ name: '', level: 1 })
        }
    }
}
</script>

<style scoped>
/* Same style as NodeSearch */
button, select, input {
    background-color: var(--tipBgColor);
    border: none;
    color: var(--textColor);
    padding: 0 11px !important;
    margin: 6px 6px 6px 0;
    border-radius: 3px;
    height: 35px;
    width: 200px;
    max-width: fit-content !important;
    display:flex;
    align-items: center;
    justify-content: center;
}

input::placeholder {
    color: var(--textColor);
    background-color: var(--tipBgColor);
}

select option {
    background-color: var(--tipBgColor);
    padding: 3px 3px;
}

/* --------- */

.search-options {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    /* Same padding as TreeItem */
    padding-left: 12px;
    margin-bottom: 10px;
}

.search-row {
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    display: flex;
    flex-direction: row;
}

button:hover, select:hover {
    cursor: pointer;
}
</style>
