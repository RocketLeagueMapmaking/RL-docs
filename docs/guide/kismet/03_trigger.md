---
title: TriggerVolumes
---
# TriggerVolumes

For some reason, UDK requires that you add TriggerVolume Touch Events in a different way from every other node. :shrug_emoji:

![The menu to create a TriggerVolume, selected in the editor, in kismet](/images/kismet/trigger_volume_new_event.png "Hello TriggerVolume")

**Place a TriggerVolume in the map using the [CSG Brush](../udk/csg.md) and the Add Volume button. Keep it selected. In the Kismet Editor, right click and select New Event Using TriggerVolume_# > Touch.**

## Instigators

![UDK documentation instigator example](https://docs.unrealengine.com/udk/Three/rsrc/Three/KismetUserGuide/graphpane.jpg)

Most events have the `Instigator` variable if the event is triggered by an actor, such as a player, ball or mesh.
This variable can be useful when you want to do something to a certain player. Most actions have the `Target`/`Targets` variable that you can connect the empty reference of the `Instigator` to.

When an event does not have an instigator, for example on level load, create a new `Player` variable and select a player index or use all players to perform an action with these players as target.

## Max Trigger Count <Badge text="important" type="tip"/>

![The properties window in Kismet with 'Max Trigger Count' set to 0](/images/kismet/trigger_volume_max_count.png "Hello Pain")

**Something that has tripped up every mapmaker in the history of Kismet is the “Max Trigger Count” field of a TriggerVolume Touch Event node. This defaults to 1, meaning this node will only ever trigger the output once.** This might be your intended effect, but in general you will want to set this to 0. **0 means that this may be triggered an infinite number of times, given that they are spaced out by “Re Trigger Delay” seconds.**
