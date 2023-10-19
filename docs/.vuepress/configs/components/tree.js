module.exports = {
    PRI: {
        component: 'PRITree',
        computeChildren: function (item, tree) {
            if (!item.is_parent) return

            const cls = tree.classes.find(x => x.name === item.type)
            const parents = cls.parents.filter(p => p !== item.type).map(name => tree.classes.find(c => c.name === name))
            return [cls].concat(...parents)
                .flatMap(x => {
                    // ???
                    if (!x && item.type === 'Object') return []
                    return x.variables.map(v => ({
                        ...v,
                        is_parent: v.type !== item.type ? v.is_parent : false,
                        parent: { name: x.name, Package: x.Package },
                        index: item.index + 1,
                    }))
                })
        },
        filterChildren: function (child, tree, options) {
            const { name, level } = options
            if (child.is_parent && level >= child.index) {
                return this.computeChildren(child, tree).some(n => this.filterChildren(n, tree, options))
            } else {
                return child.name.toLowerCase().includes(name.toLowerCase())
            }
        },
        mounted: function (tree) {
            return {
                name: 'Player car',
                index: 0,
                type: tree.name,
                is_parent: true,
                classes: tree.classes,
            }
        }
    }
}
