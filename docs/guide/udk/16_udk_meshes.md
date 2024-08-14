---
title: Meshes in UDK
---
# Meshes in UDK <Badge text="not finished" type="warning"/>

This will be a scatterbrained collection of notes and warnings about meshes in UDK.

## Limitations of UDK <Badge text="not finished" type="warning"/>

* Vertex limit
* UV maps and vertex limit
* Non-planar faces
* Empty material channels
* Material channels and ball indicator

## Rapid Iteration

In the mapmaking process, if you get something right the first time, you’re probably not trying hard enough. This is absolutely true for meshes and materials, which may even need to be retouched after the map is published.

One easy method is to simply drag the new file into the Content Browser as before, but this is tedious and time-consuming when rapidly iterating.

![alt text](/images/udk/advanced/image35.png "A very 'handy' tool")

After making edits to a mesh in Blender and re-exporting the FBX, it’s dead simple to update in UDK. **Right click the asset and select `Reimport Static Mesh`.** This will also update any instances of the mesh in use in the map, and will not break collisions, materials, or anything. **However, if you have built lighting, it will erase any lightmaps for this object.**

![alt text](/images/udk/advanced/image32.png "'Truly Automatic'")

Alternatively, you may set certain paths which UDK will monitor for file updates. It will automatically reimport meshes and textures from these locations… probably. **In my experience, this doesn’t work 100% as expected, so be aware and don’t trust it blindly.**

## Workflow Advice

Because you will want to playtest your map as you build it, I highly recommend creating placeholder meshes which have the right shape. As you finesse that, you can add more detail and replace these with more interesting meshes. Along those lines, don't worry about UV unwrapping the first versions of your meshes, unless their materials need to be set a certain way for gameplay purposes. **You'll be much happier with your map if you playtest it as you work on it.**
