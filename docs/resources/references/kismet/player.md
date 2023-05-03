---
title: Player properties
---

# Player References

This is an example list of which properties you can get from a player's car.
It does **not** replace any AssetExtractor command or the class data in Unreal Explorer:
**this list might be incorrect (think of replication status, etc.) and you should verify if the property is correctly displayed here!**

This latest game update of this list is the same as the [Kismet nodes](nodes.md) reference.

:::details Data structure
An example property might look like this:

```txt
- [+] TeamInfo Team [R]
```

- `[+]`: if an collapse icon is displayed before a character, this property is a class and you can click on it to see the properties on this class.
- `TeamInfo`: the data type of the property. If no collapse icon is displayed before it, it either does not have child items or those can't be found. In the last case use Unreal Explorer to view the properties of the class.
- `TeamInfo` (hover): the package and class of the property itself (=/= the package and class of the property type!). Can be used to know the package and class to open in Unreal Explorer
- `Team`: the property name
- `Team` (hover): the editor category of the property, if applicable.
- `[R]`: indicator if the property is any sort of replicated. Read more about the replication conditions in the [UDK documentation](https://docs.unrealengine.com/udk/Three/VariableReplication.html)
- `<Share path button>`: copy the path (`Player.A.B`) of this property.
- `<Share link button>`: copy the link to this property to share it with someone else.
- `<Copy button>`: copy the kismet needed to get this property from the base class.

:::

The class `Car_TA` is in local matches and training (`Car_Freeplay_TA` is extended from this class) the class for a player's car.

<TreeComponent
    :treeData="require('../../../.vuepress/public/data/kismet_tree.json')"
    createItemKey="kismetNode"
    itemCompName="PRITree"
/>
