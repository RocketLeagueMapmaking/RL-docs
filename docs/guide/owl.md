---
title: The rest of the map
---
# UDK Basics

## Draw The Rest Of The F***ing Owl

![alt text](../.vuepress/public/images/image89.png)

*How to make a Rocket League map in 3 minutes!*

Now that we have the fundamentals all in place, the rest of the map can come together very quickly. For brevity, I am going to skip over the modeling steps, but that will be explained [here](../modelling).

![alt text](../.vuepress/public/images/image209.png)

*Boring old, lame old blue and white map pieces*

I have [a library of default map pieces](../menu/downloads.html#default-map-pieces) (FBX files) with adjusted UV maps so that they look acceptable with no assigned material. All of these have an object origin offset, meaning all I have to do is place them into the world at (0,0,0) and they all line up. **Note that a Soccar game is played along the Y axis.**

The reason for building a map in pieces is that Rocket League (and UDK in general) does not like spawning you inside of objects. By building it like this, you ensure that the game does not consider you “inside” of anything.

![alt text](../.vuepress/public/images/image109.png)

*That was easy!*

Because of surface normals, any map pieces which have no thickness will be invisible when viewed from the back side. Make sure that all surface normals are correct when viewed from where the player will be.

:::tip TIPS 
**There are a handful of tricks to make the map assembly process much, much easier:**
* For symmetrical maps, place one piece where it needs to be. Ctrl+C and Ctrl+V will create a copy in exactly the same location. **Right click, then Transform > Mirror X/Y Axis.**
* If you wish to edit properties on multiple objects at the same time, **you can** (and should). Either `Ctrl+click` them in the 3D Editor window, or Ctrl+click or Shift+click them in the Scene tab of the Content Browser. Then press `F4`.
* Occasionally (and inexplicably) you won’t be able to place meshes by dragging them out of the Content Browser window. To get around this, **select the mesh in the Content Browser window, then right click in the 3D Editor. Select “Add {MeshName} Here”.**
* You don’t have to close Rocket League to retest maps. Simply exit to the main menu, overwrite the test map, and reload it. Use the BSFQTM to increase your speed and productivity.
* I also recommend switching Rocket League to Windowed or Borderless mode and going Invisible on Steam (to save your friends from the spam).
:::

**Remember, you need to do all of the collision fixes (both on the imported Static Mesh in the Content Browser and on the StaticMeshActor placed in the world) on every mesh you want to collide with.** These steps are shown in previous sections.

Once all meshes are in the scene, lighting will need to be rebuilt from the Build menu. This will fix most of the visual artifacts and make the map much more playable.

![alt text](../.vuepress/public/images/image174.jpg)

*notbad_4_final_final.jpg*

Try to be as thorough as you can be when testing your map. It only takes one missed collision setting or unset StickyWalls® to ruin the whole experience.

**But now it’s time to make this map more than just a weird checkered box.**