---
title: 'Testing'
---
# Testing the Map

As mentioned in a few other places, the quickest and easiest way to test a map is to overwrite a default map in Rocket League with your own. A number of guides tell you to overwrite `Labs_Underpass_P.upk`, but that is a bad idea because that map is currently in the rotation for Rumble. **Instead, overwrite `Labs_Utopia_P.upk` because the map is weird and unused.**

**Be sure to create a backup, however. You never know when you might need it.** What if you want to play online after working on mods, in the map you just overwrote? Well, say hello to the banhammer. Jk. But not really. You will receive a 5+ minute timeout if the Rocket League servers detect the modified game files in an online multiplayer game. **Psyonix has stated that it welcomes and encourages mods, so in general there is absolutely nothing to be afraid of.**

:::warning Make backups
For the multiplayer reason, **it is important, first and foremost, to create a backup of whatever you overwrite. Keep it secret. Keep it safe.**
:::

![alt text](../../.vuepress/public/images/image229.png)

*May it be a light for you in dark places, when all other lights go out.*

If worst comes to worst and you’ve ruined everything, you can always uninstall and reinstall Rocket League. A less drastic measure is to, in Steam, right click on Rocket League > Properties > Local Files > Verify Integrity of Game Cache.

**Copy and paste your `{YourMapNameHere}.udk` file into `{CookedPCConsole}`. Rename it to `Labs_Utopia_P.upk` (note that the file extension changes from .udk to .upk). Alternatively, use the BSFQTM script from earlier in the guide.**

**Hop into Training and enjoy! (Note - RL will crash if you load an Exhibition or Local match)**

![alt text](../../.vuepress/public/images/image49.jpg)
*I’m sorry*

Alright, I’m sorry that I did that to you. But, it’s not a true modding experience if everything goes right the first time. **You and the ball will fall through the map, and no property you change can fix that.**

To put it simply, the StaticMesh that Rocket League knows as StaticMesh'Park_P.park_assets.Meshes.ConcreteBase' has some property which is invisible to us that makes it un-collide-with-able. To make the game physics feel realistic, Psyonix ended up completely [replacing the physics engine of Unreal Engine 3](https://www.youtube.com/watch?v=ueEmiDM94IE) during the development process, opting for one that offers much better optimization, control, and collision results. With that come many added mysteries for us modders.

:::tip CSG Brush
In a similar vein, you will never be able to collide with a surface you create using the cube (rectangular prism) CSG brush. Sorry.
:::

Luckily we can achieve a solid floor in 3 different ways, and none is very difficult.