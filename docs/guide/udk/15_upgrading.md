---
title: Upgrading Meshes
---
# UDK Advanced

## Upgrading Meshes

In the mapmaking process, if you get something right the first time, you’re probably not trying hard enough. This is absolutely true for meshes and materials, which may even need to be retouched after the map is published.

One easy method is to simply drag the new file into the Content Browser as before, but this is tedious and time-consuming when rapidly iterating.

![alt text](../../.vuepress/public/images/image35.png)

*A very 'handy' tool*

After making edits to a mesh in Blender and re-exporting the FBX, it’s dead simple to update in UDK. **Right click the asset and select Reimport Static Mesh.** This will also update any instances of the mesh in use in the map, and will not break collisions, materials, or anything. **However, if you have built lighting, it will erase any lightmaps for this object.**

![alt text](../../.vuepress/public/images/image32.png)

## Workflow Advice

Alternatively, you may set certain paths which UDK will monitor for file updates. It will automatically reimport meshes and textures from these locations… probably. **In my experience, this doesn’t work 100% as expected, so be aware and don’t trust it blindly.**