---
title: Documentation
---
# Kismet Nodes

## UDK

Only the TAGame nodes are documentated on this page as they were added by Psyonix to UDK. Check the [matinee](../udk/17_matinee) and [particle system](../udk/11_details.html#particle-systems) pages if you want to learn more about these topics. For all the other nodes you can view the official [unreal kismet reference](https://docs.unrealengine.com/udk/Three/KismetReference.html#Unreal%20Kismet%20Reference) or per category:
- [Actions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Actions)
- [Conditions](https://docs.unrealengine.com/udk/Three/KismetReference.html#Conditions)
- [Variables](https://docs.unrealengine.com/udk/Three/KismetReference.html#Variables)
- [Events](https://docs.unrealengine.com/udk/Three/KismetReference.html#Events)

:::warning UDK documentation: special cases
Nodes that are not working:
- All events that mention `mobile` since Rocket League is not on mobile
- node

Notes on other nodes:
- `Console commands`: working commands are: `restartlevel`
:::

## TAGame

### Updating

Make sure that you have downloaded [the latest classes](https://github.com/RocketLeagueMapmaking/RL-Dummy-Classes) or you might not see all of the nodes displayed on this page in UDK. Copy the folders containing the classes into `{UDK}\Development\Src\` and windows should copy only the new files (otherwise press `skip existing files` when copying). To add the new classes to UDK you have to do a full recompile in Unreal frontend. **Don't forget to make backups when recompiling!**

### Actions 
---

<KismetNode Title="Add Game Ball" Type="Not documented"
Description="Add a ball to the game" Image="add_game_ball" Folder="TAGame"
:InputLinks="['test','test2']"
:OutputLinks="['test','test2']"
:VariableLinks="['test','test2']"
:Notes="['test','test2']"
/>

<KismetNode Title="Apply Car Products" Type="Not documented" Folder="TAGame_decrypted"/>

### Events
---
