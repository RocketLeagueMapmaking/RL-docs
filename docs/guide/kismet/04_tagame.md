---
title: Documentation
---
# Kismet

## UDK

Nodes from the TAGame and a few other folders were added to UDK by Psyonix. For all other nodes you can head to the official [Unreal Kismet Reference Home Page](https://docs.unrealengine.com/udk/Three/KismetReference.html#Unreal%20Kismet%20Reference), or view per category:

- [Actions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Actions)
- [Conditions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Conditions)
- [Variables](https://docs.unrealengine.com/udk/Three/KismetReference.html#Variables)
- [Events](https://docs.unrealengine.com/udk/Three/KismetReference.html#Events)

::::warning UDK Documentation: Disabled nodes

Psyonix has not included all kismet nodes that can be found in UDK. For a complete list of all kismet nodes that do not work in Rocket League see the reference list below. To hide these nodes in UDK add `deprecated` in the header of the UnrealScript files or remove them if you no longer want them.

:::details List of disabled nodes
<!-- TODO: check if this can be automated every X updates -->
<span v-for="node in require('../../.vuepress/public/data/disabled_nodes.json')">- {{ node }}<br></span>
:::

::::

## Rocket League

Search for a kismet node in the reference list on this page of all kismet actions and events added by Psyonix from the [Dummy Classes](https://github.com/RocketLeagueMapmaking/RL-Dummy-Classes)

More information about the classes can be found in these references:

- [Kismet nodes reference](./../../resources/references/kismet/nodes.md)
- [Player properties reference](./../../resources/references/kismet/player.md)
