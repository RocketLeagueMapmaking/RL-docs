---
title: Sticky Walls
pageClass: page-inline-images
---
# Sticky Walls

<steps>
<template #step-1>

Create a **New Asset** with **New** at the bottom left of the Content Browser:
![](/images/cheatsheets/stickywalls/button_new_asset.png)

or Right Click and select **New Physical Material**:

![](/images/cheatsheets/stickywalls/new_physicalmaterial.png)

</template>
<template #step-2>

**Type names** into the popup window:

| Field        | Description                               |
| ------------ | ----------------------------------------- |
| **Package**  | your current map                          |
| **Grouping** | not required, but helps with organization |
| **Name**     | StickyWalls                               |
| **Factory**  | PhysicalMaterial                          |

![](/images/cheatsheets/stickywalls/new_material_factory.png)

</template>
<template #step-3>

**Add** `PhysicalMaterialProperty_TA` with the blue arrow dropdown at the bottom of the next popup. Check **Enable Sticky Wheels**

![](/images/cheatsheets/stickywalls/phys_material_properties.png)

You may wish to create a secondary Sticky Walls with **Consider For Ground** disabled. The game will not end if the ball hits that surface at 0 seconds.

</template>
<template #step-4>

**Assign** to a Static Mesh Actor or Blocking Volume’s `Phys Material Override` slot with the green arrow

![](/images/cheatsheets/stickywalls/override_phys_material.png)

</template>
</steps>

---
**All drivable surfaces should generally have a Sticky Walls Physical Material, even the floor!**

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/1jWl9GIck3dfMFWXmH8l5p1Au9mboIemEIxlS2HcJUuM/edit?usp=sharing)
</ActionBlock>
