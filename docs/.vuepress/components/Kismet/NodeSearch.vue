<template>
    <div>
        <div class="autocomplete">
            <!-- Search input and buttons to submit / cancel the search -->
            <input
                v-model="search"
                class="autocomplete-input"
                type="text"
                placeholder="Search..."
                @input="onChange"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
            >
            <button
                class="autocomplete-input"
                :style="{
                    color:
                        search.length > 0
                            ? 'var(--textColor)'
                            : 'var(--blockquoteBorderColor)',
                }"
                @click="resetResult()"
            >
                &#128473;
            </button>
            <button
                class="autocomplete-input"
                :style="{
                    color:
                        results.includes(search) && isOpen
                            ? 'var(--textColor)'
                            : 'var(--blockquoteBorderColor)',
                }"
                @click="showResult(search)"
            >
                &#x1F50E;&#xFE0E;
            </button>

            <!-- Filter options for packages and types -->
            <select
                id=""
                name="upk"
                class="autocomplete-input"
                :disabled="match"
                @change="setUPK"
            >
                <option
                    v-for="pkg in validPackages"
                    :key="pkg"
                    :selected="pkg === upk"
                    :value="pkg"
                >
                    {{ pkg === 'all' ? 'All packages' : pkg }}
                </option>
            </select>

            <select
                id=""
                name="type"
                class="autocomplete-input"
                :disabled="match"
                @change="setType"
            >
                <option value="all">
                    All nodes
                </option>
                <option
                    v-for="nodeType in validNodeTypes.filter(
                        (n) => n !== 'all'
                    )"
                    :key="nodeType"
                    :value="nodeType"
                    :selected="nodeType == type"
                >
                    {{ nodeType }}
                </option>
            </select>

            <!-- Search suggestions -->
            <ul
                v-show="isOpen && results.length > 0"
                id="autocomplete-results"
                class="autocomplete-results"
            >
                <li
                    v-if="results.length > 2"
                    class="results-title"
                >
                    {{ suggestedText() }}
                </li>
                <li
                    v-for="(result, i) in results"
                    :key="i"
                    class="autocomplete-result"
                    :class="{ 'is-active': i === arrowCounter }"
                    @click="setResult(result)"
                >
                    {{ result }}
                </li>
            </ul>

            <!-- Displayed when there are no results -->
            <p
                v-if="isOpen && results.length === 0 && search.length > minChar"
                class="results-title"
            >
                There are no {{ noResultsText() }}
            </p>

            <!-- Found kismet node -->
            <div v-if="!isOpen && search && match">
                <p>Showing result for kismet node: {{ search }}</p>

                <KismetNodeList
                    :upk="upk"
                    :names="[match.displayName]"
                    :category="match.type"
                    :dummy-items="dummyItems"
                />
            </div>
        </div>

        <div v-if="!match">
            <div v-if="type === 'all'">
                <KismetNodeList
                    v-for="nodeType in validNodeTypes.filter((n) => n != 'all')"
                    :key="nodeType"
                    :upk="upk"
                    :category="nodeType"
                    :dummy-items="dummyItems"
                />
            </div>
            <div v-else>
                <KismetNodeList
                    :upk="upk"
                    :category="type"
                    :dummy-items="dummyItems"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TAGameData from '../../public/data/kismet_nodes.json'

export const formatNodes = (nodes) =>
    nodes.map((node) => {
        const escape = (input) => input.replace(/"/g, '')

        node.displayName = escape(node.displayName)
        node.category = escape(node.category)
        node.archetype = escape(node.archetype)

        node.links = Object.keys(node.links)
            .map((key) => {
                return [
                    key,
                    node.links[key].map((link) => {
                        const { name, ...other } = link
                        return {
                            ...other,
                            name: escape(name),
                        }
                    }),
                ]
            })
            .reduce((prev, curr) => ({ ...prev, [curr[0]]: curr[1] }), {})

        return node
    })

const validPackages = ['TAGame', 'ProjectX']
const validNodeTypes = ['actions', 'events', 'conditions', 'all']

const kismetNodes = formatNodes(TAGameData)

export default {
    props: {
        categories: {
            type: String,
            required: true,
            validator: (value) => {
                let values = value.includes(',') ? value.split(',') : [value]

                for (let type of values) {
                    if (!validNodeTypes.includes(type)) return false
                }
                return true
            },
        },
        packages: {
            type: String,
            required: true,
            validator: (value) => {
                let values = value.includes(',') ? value.split(',') : [value]

                for (let type of values) {
                    if (!validPackages.includes(type)) return false
                }
                return true
            },
        },
    },
    data() {
        return {
            isOpen: false,
            results: [],
            match: null,
            search: '',
            active: 'all',
            upk: 'all',
            type: 'all',
            arrowCounter: -1,
            minChar: 2,
            items: kismetNodes.map((i) => i.displayName),
            nodes: kismetNodes,
            dummyItems: [],
            validNodeTypes,
            validPackages: ['all'].concat(validPackages),
            category: [],
        }
    },

    watch: {
        items: function (value, oldValue) {
            if (value.length !== oldValue.length) {
                this.results = value
            }
        },
    },

    async mounted() {
        console.log(`Loaded ${this.items.length} kismet nodes`, this.$data, this.nodes)
        document.addEventListener('click', this.handleClickOutside)

        let types = this.categories.includes(',')
            ? this.categories.split(',')
            : [this.categories]

        this.category = ['all'].concat(types)

        let url = document.location.search
        if (URLSearchParams == undefined) return

        const params = new URLSearchParams(url)
        const type = params.get('type'),
            upk = params.get('upk'),
            search = params.get('search')

        if (search != null) {
            const name = this.queryToName(search)
            console.log('Showing search item: ', name)
            this.showResult(name)
        } else {
            if (type != null) this.setType({ target: { value: type } })
            if (upk != null) this.setUPK({ target: { value: upk } })
        }
    },

    destroyed() {
        document.removeEventListener('click', this.handleClickOutside)
    },

    methods: {
        setResult(result) {
            this.search = result
            this.isOpen = false
            this.match = this.findNode(result)
            this.arrowCounter = -1

            this.setUrl()
        },

        setType(event) {
            this.type = event.target.value

            this.filterResults()
            this.setUrl()
        },

        setUPK(event) {
            this.upk = event.target.value

            this.filterResults()
            this.setUrl()
        },

        setUrl() {
            if (URLSearchParams != undefined) {
                const params = ['type', 'upk', 'node']
                const searchParams = new URLSearchParams(
                    document.location.search
                )

                params.forEach((param) => {
                    if (searchParams.has(param)) searchParams.delete(param)
                })

                if (this.match) {
                    searchParams.set('search', this.nameToQuery(this.search))
                } else {
                    if (this.type !== 'all') searchParams.set('type', this.type)
                    if (this.upk !== 'all') searchParams.set('upk', this.upk)
                }

                let stringParams = searchParams.toString()
                let newParams =
                    stringParams.length > 0 ? `?${stringParams}` : ''
                let newRelativePathQuery =
                    document.location.pathname + newParams

                history.pushState(null, '', newRelativePathQuery)
            }
        },

        resetResult() {
            this.search = ''
            this.results = []
            this.isOpen = false
            this.active = 'all'
            this.arrowCounter = -1
            this.match = null
        },

        showResult(name) {
            if (this.items.includes(name)) this.setResult(name)
        },

        filterResults() {
            if (this.search.length > this.minChar) {
                this.results = this.items.filter((item) => {
                    if (
                        this.active === 'all' ||
                        this.nodes.find((x) => x.displayName === item).type ===
                            this.active
                    ) {
                        return (
                            item
                                .toLowerCase()
                                .indexOf(this.search.toLowerCase()) > -1
                        )
                    }
                })
            } else this.results = []
        },

        findNode(name) {
            return this.nodes.find((x) => x.displayName === name)
        },

        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isOpen = false
                this.arrowCounter = -1
            }
        },

        onChange() {
            this.$emit('input', this.search)

            this.filterResults()
            this.isOpen = true
        },

        onArrowDown() {
            if (this.arrowCounter < this.results.length) this.arrowCounter += 1
        },

        onArrowUp() {
            if (this.arrowCounter > 0) this.arrowCounter -= 1
        },

        onEnter() {
            this.search = this.results[this.arrowCounter]
            this.isOpen = false
            this.arrowCounter = -1
            this.match = this.nodes.find((x) => x.name === this.search)
        },

        categoryName(name) {
            let type = this.findNode(name).type

            return `${type[0].toUpperCase() + type.slice(1)}s`
        },

        queryToName(query) {
            return query
                .replace(/_/g, ' ')
                .split(' ')
                .map((word) => {
                    return word[0].toUpperCase() + word.slice(1)
                })
                .join(' ')
        },

        nameToQuery(name) {
            return name.toLowerCase().replace(/ /g, '_')
        },

        suggestedText() {
            return this.active === 'all'
                ? 'Suggested nodes:'
                : `Suggested ${this.active}:`
        },

        noResultsText() {
            return `${
                this.active === 'all'
                    ? 'results for'
                    : `results for ${this.active} matching`
            }: ${this.search}`
        },
    },
}
</script>

<style scoped>
.autocomplete {
    position: relative;
    display: inline-block;
    width: 100%;
}

.autocomplete-input {
    background-color: var(--highlightedBgColor);
    border: none;
    color: var(--textColor);
    padding: 0 11px !important;
    border-radius: 3px;
    height: 35px;
    width: 200px;
    max-width: fit-content !important;
}

.autocomplete-input .danger {
    border: 2px solid red;
}
.autocomplete-input::placeholder {
    color: var(--textColor);
    background-color: var(--highlightedBgColor);
}

.autocomplete-input option {
    background-color: var(--highlightedBgColor);
    padding: 3px 3px;
}
.autocomplete-results {
    padding: 3px;
    margin: 0;
    border: 1px solid var(--borderColor);
    height: fit-content;
    border-radius: 3px;
}

.autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
}

.results-title {
    list-style: none;
    color: var(--blockquoteBorderColor);
    font-style: italic;
}

.autocomplete-result.is-active,
.autocomplete-result:hover,
.autocomplete-input option:active {
    background-color: var(--accentColor);
    color: var(--textColor);
}

.autocomplete-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
}
.autocomplete-options a {
    margin: 8px;
    color: var(--textColor);
    text-decoration: none;
}
.autocomplete-options .active {
    color: var(--accentColor) !important;
}
</style>
