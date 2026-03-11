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

![](/images/cheatsheets/materials/create_mic.png)

</template>
<template #step-2>

Type your map in **Package**

![](/images/cheatsheets/materials/mic_factory.png)

In the next popup window, expand **Parameter Groups:**

| Set **Color**                                     | Set **CollisionColor**                                      | Load **Textures** into Channels                           |
| ------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| ![](/images/cheatsheets/materials/prop_color.png) | ![](/images/cheatsheets/materials/prop_collision_color.png) | ![](/images/cheatsheets/materials/prop_load_textures.png) |

**Click the Checkbox** to overwrite the Parameter.

</template>
<template #step-3>

**Textures** should be different per channel:

| **Diffuse**                                            | **Specular**                                            | **Emissive**                                            | **Normal**                                            |
| ------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- |
| ![](/images/cheatsheets/materials/channel_diffuse.png) | ![](/images/cheatsheets/materials/channel_specular.png) | ![](/images/cheatsheets/materials/channel_emissive.png) | ![](/images/cheatsheets/materials/channel_normal.png) |

</template>
<template #step-4>

**Apply** to a StaticMesh’s Material Slot:

![](/images/cheatsheets/materials/assign_material.png)

</template>
</steps>

**Additional Custom Materials** may be created from copies of any Material Instance:

![](/images/cheatsheets/materials/button_create_copy.png)

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/1MxdlotrUIxEwOWsFc4440kpkTxP-8wd_t6ExrjqQ-_c/edit?usp=sharing)
</ActionBlock>
