---
title: Documentation
---
# TAGame Kismet Nodes

## UDK

Nodes from the TAGame folder were added to UDK by Psyonix. For all other nodes you can head to the official [Unreal Kismet Reference Home Page](https://docs.unrealengine.com/udk/Three/KismetReference.html#Unreal%20Kismet%20Reference), or view per category:

- [Actions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Actions)
- [Conditions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Conditions)
- [Variables](https://docs.unrealengine.com/udk/Three/KismetReference.html#Variables)
- [Events](https://docs.unrealengine.com/udk/Three/KismetReference.html#Events)

:::warning UDK Documentation: Special Cases

- All events that mention `mobile` do not work since Rocket League is not on mobile (yet?)
- More nodes, such as `Modify Property`, are also disabled
- HUD events will not work because the Render Event node is disabled. For rendering images and animations you should use Flash and Scaleform
:::

## TAGame

### Updating

Make sure that you have downloaded [the latest Dummy Classes](https://github.com/RocketLeagueMapmaking/RL-Dummy-Classes), or you might not see all of the nodes displayed on this page. Copy the folders containing the classes into `{UDK}\Development\Src\` and Windows should copy only the new files. You will then have to run a Full Recompile in Unreal Frontend. **It's a good idea to make backups before recompiling.**

:::warning Unreal Frontend
Sometimes the recompile using the console might not give the correct exit status.
If you restart and still see the "classes need an update" message, use Unreal Frontend to recompile.
:::

<!-- 
// TODO: remove comment when cheatsheets are updated and PRI one is added to the others
### PRI Cheatsheet

It is tricky to get a property from a player when you need a sequence of multiple `Get Property`'s.
See the [PRI Cheatsheet](/) for autocomplete to see the path for getting the property.

### Kismet nodes

#### Disabled 

#### Psyonix

Below is a list of nodes added by Psyonix. 
They might not be in the Dummy classes or give a clear description on what it does, visit the Discord server for help.

-->
