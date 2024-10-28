---
title: Content Browser
outline: 3
---
# UDK Basics

## Content Browser

Resources for how to actually use UDK are few and far between (mainly because nobody has used it since 2016), so I will discuss some of the basics here. Things are hidden in menus, with unclear iconography and unclear names, and I can’t cover it all here. Feel free to `@Mr. Swaggles` in Discord if you need specific UDK help.

### Key Terms

* **UDK** - Unreal Development Kit - For making games in Unreal Engine 3 (like Rocket League)
* **UPK** - UDK Package - A library of assets to use in UDK
* **World** - The defining characteristics of everything, like lighting and physics
* **Scene/Level** - The visible portion of the world (almost all maps will just be one level)
* **Actor** - Any object within the world
* **Mesh** - A 3D object made of vertices, edges, and faces
* **Material** - The surface properties of a mesh
* **Texture** - A 2D image UV mapped onto a 3D mesh using a material

### Content Browser

First off, you will want to open the Content Browser. If it is not already open, go to `View > Browser Windows > Content Browser`, use `Ctrl + Shift + F`, or find the ![Content browser icon in UDK toolbar](/images/udk/essential/content_browser_toolbar.png) button on the top bar. Aside from the actual editor window, this is the single most useful window. If you ever minimize it, it goes to the lower left of your left monitor (which might not even be where UDK is).

![Content browser with the filter and package panel in red bordered boxes](/images/udk/essential/content_browser_panels.png "The browser of content")

The first tab, `Content Browser`, is used to browse through UDK packages within the UDK install. The lower left panel allows you to jump between packages. In the upper middle, you can filter the visible content by type, and also search by name in the bar above. If something isn’t showing up that you believe should be there, check that there is no name filter and no type filter. If it is still not there, UDK may have dynamically unloaded it. **Right click the package, and click Fully Load.**

### Package Management

To make custom maps easier to use, **every mesh/material/actor used needs to be contained either within a Rocket League package (e.g. `Park_P.upk`), a UDK package which has already been correctly inserted into `{CookedPCConsole}`), or the map package itself.** Rocket League only knows about objects within the `{CookedPCConsole}` packages, and unfortunately most people who play your maps will not take the extra step of inserting the UDK default packages into their `{CookedPCConsole}` folder, meaning that your map will be sad shades of blue and white. However, it will still function properly as long as all of your mesh objects come from Rocket League or the map package itself.

:::warning THE MOST COMMON NEWBIE MISTAKE
If your map is named `MyTestMap1`, **make quintuple sure all assets are inside the folder `MyTestMap1` in the Content Browser.** If they are not, pieces of your map will magically vanish when you try to play it in Rocket League. This is the single most common mistake new mapmakers make.
:::

![](/images/udk/essential/moveobjects.png "Move it or lose it")

If your assets are in the wrong package, **select them, right click, and select `Move or Rename...`** Type in the name of your map and click OK.

### Scene

The second most useful tab of the Content Browser is Scene. In here, you can select and modify properties of all Actors in the project.

![Scene view with the objects in the map](/images/udk/essential/content_browser_scene.png "The browser of scene actors")

The Properties panel on the right has a search bar at the top, which is extremely valuable for finding the parameter you want to change. **The most common things you will find yourself changing are “location,” “rotation,” and “material”.** This window is great for selecting multiple actors within the scene, and also for editing actors you can’t click (as we’ll encounter in the [Dummy Assets](../guide/udk/dummy_assets.md) section much later.

### Actor Classes

Remember the weird Rocket League Dummy Classes folders/files? This is where you can find their contents (given that you correctly made UDK aware of the folders).

![Tree view of placeable Actor classes](/images/udk/essential/content_browser_classes.png "The browser of actor classes")

The easiest way to use this tab is to search for the type of actor that you need to add, then drag it from here into the 3D editor window. For example, each boost pad will need an `FXActor_Boost_TA` on it to function like we would expect. This is those classes may be found.

### Levels and Layers

The Levels tab is, surprisingly, for jumping between levels. For most maps, this tab is completely unused because the entire project exists within one "Level."

The Layers tab allows for organizing assets within the project. It is also completely optional, but can be a great way to compartmentalize a complex project and hide objects which interrupt the design workflow.
