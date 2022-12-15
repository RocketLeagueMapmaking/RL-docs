---
title: TriggerVolumes
---
# TriggerVolumes

For some reason, UDK requires that you add TriggerVolume Touch Events in a different way from every other node. :shrug_emoji:

![alt text](/images/kismet/guide/image184.png "Hello TriggerVolume")

**Place a TriggerVolume in the map using the [CSG Brush](../udk/01_csg.md) and the Add Volume button. Keep it selected. In the Kismet Editor, right click and select New Event Using TriggerVolume_# > Touch.**

![alt text](/images/kismet/guide/image236.png "Hello Pain")

## Instigator

Kismet events that are triggered when a player performs a certain action often have the variable link "Instigator".
This is the player (or the car from the player) that triggered the current event.

In the example above, you can connect the "Instigator" from the trigger volume to the "Target" of the Draw Text action.
However, you can't directly link these, a new empty Object variable is needed and can be used to connect the nodes.

## Max Trigger Count <Badge text="important" type="tip"/>

**Something that has tripped up every mapmaker in the history of Kismet is the “Max Trigger Count” field of a TriggerVolume Touch Event node. This defaults to 1, meaning this node will only ever trigger the output once.** This might be your intended effect, but in general you will want to set this to 0. **0 means that this may be triggered an infinite number of times, given that they are spaced out by “Re Trigger Delay” seconds.**
