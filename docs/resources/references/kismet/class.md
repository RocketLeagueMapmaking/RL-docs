---
title: Class properties
---

<script setup lang="ts">
import { RLMMCarTree } from '@rocketleaguemapmaking/theme-rlmm'
</script>

# Class properties

This is an example list of which properties you can get from a class.
It does **not** replace any AssetExtractor command or the class data in Unreal Explorer:
**this list might be incorrect (think of replication status, etc.) and you should verify if the property is correctly displayed here!**

Note that the latest game update might change classes if it is newer than the version of this reference list (can be found in the badge).

::::info How to use this

- The following query parameters are supported:
  - `search=Player.A.B`. Only highlights the path to this property

:::warning Copy information

After copying kismet from a property:

1. **Replace the first target object** with your own variable or connect it directly to the instigator of (Car spawned) event. It is currently just an empty placeholder and does not hold the properties listed on this page!
2. The last variable is not automatically updated. Create a loop back to the first `Get property` node **with a delay** to update the variable.

:::

::::

## Player's car Reference

The class `Car_TA` is in local matches and training (`Car_Freeplay_TA` is extended from this class) the class for a player's car. You can get this class on the car spawned event and the get car action.

When using the `Player` kismet variable / player spawned event, use the `PlayerController` class (`PlayerController_TA`) as your starting point.

<RLMMCarTree />
