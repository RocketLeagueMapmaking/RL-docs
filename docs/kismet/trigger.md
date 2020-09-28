---
title: TriggerVolumes
---
# UDK Advanced

For some reason, UDK requires that you add TriggerVolume Touch Events in a different way from every other node. :shrug_emoji:

![alt text](../.vuepress/public/images/image184.png)

*Hello TriggerVolume*

**Place a TriggerVolume in the map using the [CSG brush](../modeling/csg) and the Add Volume button. Keep it selected. In the Kismet Editor, right click and select New Event Using TriggerVolume_# > Touch.**

![alt text](../.vuepress/public/images/image236.png)

*Hello Pain*

## Max trigger count <Badge text="important" type="tip"/>

**Something that has tripped up every mapmaker in the history of Kismet is the “Max Trigger Count” field of a TriggerVolume Touch Event node. This defaults to 1, meaning this node will only ever trigger the output once.** This might be your intended effect, but in general you will want to set this to 0. **0 means that this may be triggered an infinite number of times, given that they are spaced out by “Re Trigger Delay” seconds.**