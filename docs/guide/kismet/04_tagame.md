---
title: Documentation
---
# TAGame Kismet Nodes

## UDK

Nodes from the TAGame folder were added to UDK by Psyonix. Visit the [Matinee](../udk/21_matinee.md) and [Particle System](../udk/11_details.md#particle-systems) pages if you want to learn more about these topics. For all other nodes you can head to the official [Unreal Kismet Reference Home Page](https://docs.unrealengine.com/udk/Three/KismetReference.html#Unreal%20Kismet%20Reference), or view per category:

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

### Actions

---

<KismetNode
    Title="Add Game Ball" Status="Not documented" Image="add_game_ball"
    Folder="TAGame" Type="Actions"
    Description="Add a ball to the game"  
    :InputLinks="['test','test2']"
    :OutputLinks="['test','test2']"
    :VariableLinks="['test','test2']"
    :Notes="['test','test2']"
/>

<KismetNode
    Title="Apply Car Products" Status="Not documented"
    Folder="TAGame_decrypted" Type="Actions"
/>

### Events

---
