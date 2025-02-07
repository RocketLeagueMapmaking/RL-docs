---
title: Materials
pageClass: page-inline-images
---
# Materials

<steps>
<template #step-1>

| To create a                 | Browse **Engine > Content > EngineDebugMaterials** for: |
| --------------------------- | ------------------------------------------------------- |
| **Solid Color**             | **LevelColorationLitMaterial**                          |
| **Translucent Solid Color** | **TerrainCollisionMaterial**                            |
| **Textured Material**       | **TexturePaint_2Tex_Color**                             |

Right click and **Create New Material Instance (Constant):**

![](/images/cheatsheets/materials/image3.png)

</template>
<template #step-2>

Type your map in **Package**

![](/images/cheatsheets/materials/image7.png)

In the next popup window, expand **Parameter Groups:**

| Set **Color**                                 | Set **CollisionColor**                         | Load **Textures** into Channels               |
| --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- |
| ![](/images/cheatsheets/materials/image9.png) | ![](/images/cheatsheets/materials/image12.png) | ![](/images/cheatsheets/materials/image5.png) |

**Click the Checkbox** to overwrite the Parameter.

</template>
<template #step-3>

**Textures** should be different per channel:

| **Diffuse**                                   | **Specular**                                  | **Emissive**                                   | **Normal**                                    |
| --------------------------------------------- | --------------------------------------------- | ---------------------------------------------- | --------------------------------------------- |
| ![](/images/cheatsheets/materials/image8.png) | ![](/images/cheatsheets/materials/image1.png) | ![](/images/cheatsheets/materials/image13.png) | ![](/images/cheatsheets/materials/image6.png) |

</template>
<template #step-4>

**Apply** to a StaticMesh’s Material Slot:

![](/images/cheatsheets/materials/image10.png)

</template>
</steps>

**Additional Custom Materials** may be created from copies of any Material Instance:

![](/images/cheatsheets/materials/image4.png)

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/1MxdlotrUIxEwOWsFc4440kpkTxP-8wd_t6ExrjqQ-_c/edit?usp=sharing)
</ActionBlock>
