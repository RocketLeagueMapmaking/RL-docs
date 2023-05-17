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
                    return x.variables.map(v => ({ ...v, parent: { name: x.name, Package: x.Package }}))
                })
        },
        mounted: function (tree) {      
            return {
                name: 'Player car',
                type: tree.name,
                is_parent: true,
                classes: tree.classes,
            }
        }
    }
}