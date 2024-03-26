---
title: References
---

<script setup lang="ts">
import { ListWindow } from '@rocketleaguemapmaking/theme-rlmm'
</script>

# Kismet references

## UDK

Nodes from the TAGame and a few other folders were added to UDK by Psyonix. For all other nodes you can head to the official [Unreal Kismet Reference Home Page](https://docs.unrealengine.com/udk/Three/KismetReference.html#Unreal%20Kismet%20Reference), or view per category:

- [Actions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Actions)
- [Conditions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Conditions)
- [Variables](https://docs.unrealengine.com/udk/Three/KismetReference.html#Variables)
- [Events](https://docs.unrealengine.com/udk/Three/KismetReference.html#Events)

::::warning UDK Documentation: Disabled nodes

Psyonix has not included all kismet nodes that can be found in UDK. For a complete list of all kismet nodes that do not work in Rocket League see the reference list below. To see the kismet nodes that have been added to the game or the other classes that have been removed, check out the [dummy classes changelog](https://github.com/ghostrider-05/RL-dummy-classes2/blob/main/CHANGELOG.md#classes)

:::details List of disabled nodes

<ListWindow
    dataUrl="https://raw.githubusercontent.com/ghostrider-05/RL-dummy-classes2/main/ci/changelog/kismet.json"
    dataKey="deleted"
    :sort="{ key: 1 }"
>
<template #default="{ item }">
    - {{ item[1].replace('.uc', '') }}
</template>
</ListWindow>
:::

::::

## Game references

Search for a kismet node in the reference list on this page of all kismet actions and events added by Psyonix from the [Dummy Classes](https://github.com/RocketLeagueMapmaking/RL-Dummy-Classes)

More information about the classes can be found in these references:

- [Kismet nodes reference](./../../resources/references/kismet/nodes.md)
- [Player properties reference](./../../resources/references/kismet/class.md)

## Game map kismet

If you want to copy or view the kismet of an official map, you can use [this](https://discord.com/channels/711882968200904715/713071168331972699/973280162483425290) experimental build of Unreal Explorer
