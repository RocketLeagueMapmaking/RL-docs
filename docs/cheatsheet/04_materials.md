---
title: Materials
---
# Materials

**To create a**

<table>
 <tr>
  <td><b>Solid Color</b></td>
  <td><b>Translucent Solid Color</b></td>
  <td><b>Textured Material</b></td>
 </tr>

 <tr>
  <td colspan="3">Browse <b>Engine > Content > EngineDebugMaterials</b> for:</td>
 </tr>

 <tr>
  <td><b>LevelColorationLitMaterial</b></td>
  <td><b>TerrainCollisionMaterial</b></td>
  <td><b>TexturePaint_2Tex_Color</b></td>
 </tr>

</table>

Right click and **Create New Material Instance (Constant):**

<InlineImageComponent src=/images/cheatsheets/materials/image3.png />

Type your map in **Package**

<InlineImageComponent src=/images/cheatsheets/materials/image7.png />

In the next popup window, expand **Parameter Groups:**

<table>
 <tr>
  <td>Set <b>Color</b></td>
  <td>Set <b>CollisionColor</b></td>
  <td>Load <b>Textures</b> into Channels</td>
 </tr>

  <tr>
  <td><img src="/images/cheatsheets/materials/image9.png" width=300px></td>
  <td><img src="/images/cheatsheets/materials/image12.png" width=300px></td>
  <td><img src="/images/cheatsheets/materials/image5.png" width=300px></td>
 </tr>

</table>

**Click the Checkbox** to overwrite the Parameter.

**Textures** should be different per channel:

<table>
  <tr>
   <td><b>Diffuse</b></td>
   <td><b>Specular</b></td>
   <td><b>Emissive</b></td>
   <td><b>Normal</b></td>
  </tr>

 <tr>
  <td><img src="/images/cheatsheets/materials/image8.png"></td>
  <td><img src="/images/cheatsheets/materials/image1.png"></td>
  <td><img src="/images/cheatsheets/materials/image13.png"></td>
  <td><img src="/images/cheatsheets/materials/image6.png"></td>
 </tr>
</table>

**Apply** to a StaticMesh’s Material Slot:

<InlineImageComponent src=/images/cheatsheets/materials/image10.png />

**Additional Custom Materials** may be created from copies of any Material Instance:

<InlineImageComponent src=/images/cheatsheets/materials/image4.png />

[Original Google Doc Version](https://docs.google.com/document/d/1MxdlotrUIxEwOWsFc4440kpkTxP-8wd_t6ExrjqQ-_c/edit?usp=sharing)
