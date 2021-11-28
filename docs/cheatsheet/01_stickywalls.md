---
title: Sticky Walls
---
# Sticky Walls

Create a **New Asset** with **New** at the bottom left of the Content Browser: <InlineImageComponent src=/images/cheatsheets/stickywalls/image7.png />

or Right Click and select **New Physical Material**:

<InlineImageComponent src=/images/cheatsheets/stickywalls/image8.png />

**Type names** into the popup window:

|<InlineImageComponent src=/images/cheatsheets/stickywalls/image3.png />|
|--------|
|**Package** is your current map                           |
|**Grouping** is not required, but helps with organization |
|**Name** is StickyWalls                                   |
|**Factory** is PhysicalMaterial                           |

**Add** `PhysicalMaterialProperty_TA` with the blue arrow dropdown at the bottom of the next popup. Check **Enable Sticky Wheels**

<InlineImageComponent src=/images/cheatsheets/stickywalls/image6.png />

You may wish to create a secondary Sticky Walls with **Consider For Ground** disabled. The game will not end if the ball hits that surface at 0 seconds.

**Assign** to a Static Mesh Actor or Blocking Volume’s `Phys Material Override` slot with the green arrow

<InlineImageComponent src=/images/cheatsheets/stickywalls/image1.png />

**All drivable surfaces should generally have a Sticky Walls Physical Material, even the floor!**

[Original Google Doc Version](https://docs.google.com/document/d/1jWl9GIck3dfMFWXmH8l5p1Au9mboIemEIxlS2HcJUuM/edit?usp=sharing)