---
title: 'Testing'
---
# UDK Basics

## Testing the Map

As mentioned in a few other places, the quickest and easiest way to test a map is to overwrite a default map in Rocket League with your own. A number of guides tell you to overwrite `Labs_Underpass_P.upk`, but that is a bad idea because that map is currently in the rotation for Rumble. **Instead, overwrite `Labs_Utopia_P.upk` because the map is weird and unused.**

**Be sure to create a backup, however. You never know when you might need it.** What if you want to play online after working on mods, in the map you just overwrote? Well, say hello to the banhammer. Jk. But not really. You will receive a 5+ minute timeout if the Rocket League servers detect the modified game files in an online multiplayer game. **Psyonix has [stated that it welcomes and encourages mods](../../more/psyonix), so in general there is absolutely nothing to be afraid of.**

:::tip Testing multiplayer
You can test multiplayer on one computer using [this guide](https://steamcommunity.com/sharedfiles/filedetails/?id=311943358) if you have two steam accounts with rocket league. Or ask someone to [join your map](../multiplayer/01_multiplayer.html#testing-multiplayer)
:::

:::warning Make backups
For the multiplayer reason, **it is important, first and foremost, to create a backup of whatever you overwrite. Keep it secret. Keep it safe.**
:::

![alt text](~@images/UDK/basics/image229.png "May it be a light for you in dark places, when all other lights go out.")

If worst comes to worst and you’ve ruined everything, you can always uninstall and reinstall Rocket League. A less drastic measure is to, in Steam, right click on Rocket League > Properties > Local Files > Verify Integrity of Game Cache.

**Copy and paste your `{YourMapNameHere}.udk` file into `{CookedPCConsole}`. Rename it to `Labs_Utopia_P.upk` (note that the file extension changes from .udk to .upk). Alternatively, use the BSFQTM script from earlier in the guide.**

**Hop into Training and enjoy! (Note - RL will crash if you load an Exhibition or Local match)**

## A Humble Apology

![alt text](~@images/UDK/basics/image49.jpg "I’m sorry")

Alright, I’m sorry that I did that to you. But, it’s not a true modding experience if everything goes right the first time. **You and the ball will fall through the map, and no property you change can fix that.**

To put it simply, the StaticMesh that Rocket League knows as `StaticMesh'Park_P.park_assets.Meshes.ConcreteBase'` has some property which is invisible to us that makes it un-collide-with-able. To make the game physics feel realistic, Psyonix ended up completely [replacing the physics engine of Unreal Engine 3](https://www.youtube.com/watch?v=ueEmiDM94IE) during the development process, opting for one that offers much better optimization, control, and collision results. With that come many added mysteries for us modders.

:::tip CSG Brush
In a similar vein, you will never be able to collide with a surface you create using the cube (rectangular prism) CSG brush. Sorry.
:::

Luckily we can achieve a solid floor in 3 different ways, and none is very difficult.

## Notes on Rapid Testing

If you’re like me, you never get anything right on the first try. You probably don’t get it right on the second try, or even the third. I’m lucky to get things right on the fourth try. Because this is such an error-prone and goofy development process, you should absolutely take all the steps you can to make your life easier.

You do not need to close Rocket League to test changes to your map. You just need to overwrite the file it’s using and reload the map in game. I also recommend setting the game to either Borderless or Windowed mode in the Video settings so that the process of jumping in and out is less painful.

Near the [beginning of the guide](../essential/windows.html#batch-script-for-quickly-testing-maps-bsfqtm), I provided a small batch (.bat) script for quickly testing maps

**I keep a copy of this inside each project folder within Maps.** This way, I can drag the map onto this script and instantly load it into Rocket League.

![alt text](~@images/UDK/basics/image172.png "Thin windows for thin margins of error")

Additionally, I like to keep the project folder open in a thin window just to the right of UDK. This way, I don’t have to switch back and forth to reload the map after every little change.

**You do not need to Build All unless you have added/changed PathNodes or Spawns, need to fix lighting, or you want to publish your map. Skipping this step saves huge amounts of time.**

It is possible to go from re-exporting a mesh from Blender to driving on it in under 10 seconds.
