---
title: Collisions
pageClass: page-inline-images
---
# Collisions

<steps>
<template #step-1>

**Drag** a valid .FBX mesh into your map package in UDK:

![](/images/cheatsheets/collisions/image6.png)
![](/images/cheatsheets/collisions/image2b.png)
![](/images/cheatsheets/collisions/image5.png)

</template>
<template #step-2>

**Double click** it in the Content Browser and **uncheck the three checkmarks** at the bottom of the pane on the right:

![](/images/cheatsheets/collisions/image7.png)

</template>
<template #step-3>

**Drag** the mesh into the map, or **Right Click** and select **Add StaticMesh: _**.

Open its Properties:

**Uncheck** “Disable All Rigid Body”: ![](/images/cheatsheets/collisions/image10.png)

**Check** “Block Rigid Body”: ![](/images/cheatsheets/collisions/image3.png)

**Check** “Accepts Dynamic Decals” to allow the ball indicator circle: ![](/images/cheatsheets/collisions/image9.png)

</template>
<template #step-4>

**Assign** the StickyWalls Physical Material to map geometry:

![](/images/cheatsheets/collisions/image8.png)

</template>
</steps>

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/1vaThCqWBqKi2beJ3zKQqX2CU2ELV_73Xe-9paEcthN0/edit?usp=sharing)
</ActionBlock>
