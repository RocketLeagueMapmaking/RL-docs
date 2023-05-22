---
title: Class properties
---

# Class properties

This is an example list of which properties you can get from a class.
It does **not** replace any AssetExtractor command or the class data in Unreal Explorer:
**this list might be incorrect (think of replication status, etc.) and you should verify if the property is correctly displayed here!**

This latest game update of this reference list can be found in the badge.

<TreeComponent
    url="https://kismet-cdn.ghostrider-05.com/assets?tag=compact_tree&version=latest"
    configKey="PRI"
>
<template v-slot:content="data">

:::details How to use

- The following query parameters are supported:
  - `path=Player.A.B`. Only highlights the path to this property
  - `filter={replicated,description,defaultValue,category}`. Only show properties that have the filtered flag.

:::

## Player's car Reference <Badge :text="'version: ' + data.version" />

:::details Data structure
An example property might look like this:

```txt
- [+] TeamInfo Team [R]
```

- `[+]`: if an collapse icon is displayed before a character, this property is a class and you can click on it to see the properties on this class.
- `TeamInfo`: the data type of the property. If no collapse icon is displayed before it, it either does not have child items or those can't be found. In the last case use Unreal Explorer to view the properties of the class.
- `Team`: the property name
- `TeamInfo Team` (hover): the package and class of the property itself (=/= the package and class of the property type!). Can be used to know the package and class to open in Unreal Explorer. Also shows the editor category of the property, description and default value.
- `[R]`: indicator if the property is any sort of replicated. Read more about the replication conditions in the [UDK documentation](https://docs.unrealengine.com/udk/Three/VariableReplication.html)
- `<Share path button>`: copy the path (`Player.A.B`) of this property.
- `<Share link button>`: copy the link to this property to share it with someone else.
- `<Copy button>`: copy the kismet needed to get this property from the base class.

:::

The class `Car_TA` is in local matches and training (`Car_Freeplay_TA` is extended from this class) the class for a player's car. You can get this class on the car spawned event and the get car action.

When using the `Player` kismet variable / player spawned event, use the `PlayerController` class (`PlayerController_TA`) as your starting point.

</template>

<template v-slot:search="data">
    <PRITreeSearch
        :setOptions="data.setOptions"
        :setInputName="data.setFilterName"
        :inputName="data.filterName"
    />
</template>
</TreeComponent>
