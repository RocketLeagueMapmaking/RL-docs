---
title: Introduction
---
# Decryption

Decrypting assets from the game is great for discovering new techniques or cleaning up old data, but please remember these words from earlier in the guide:

> **Rocket League mapmaking techniques cannot be used to give you a competitive advantage in the game, and any attempts at that are directly against the [EULA](../../resources/references/psyonix.md).** Please play nice and play by the rules, and you have nothing to fear.

:::tip uMod
uMod is outdated and it doesn't work anymore since the DX11 update. It was used for extracting textures and applying them in-game. You can use the Alphaconsole plugin for bakkesmod and uModel now to replace uMod.
:::

ItsBrank has created [a mini-modding guide](https://docs.google.com/document/d/1-o-7AojY1j4_5i0gj5LmI6hDhJL9VZg0IW40KL7objQ/edit#heading=h.v08ltc525arh) which includes converting Rocket League sounds and exporting UPK files.

## Ripped assets

ItsBrank has created [a repository](https://github.com/ItsBranK/RocketLeagueAssets) which includes raw assets, including graphic effects, map images, music effects, sound effects and voice overs, intended to be used for editing and modding. If you are only looking for the assets this will probably be the resource you need.

## Getting started

To get started with decrypting the assets, you will need some tools. Each tool has a different focus to extract a certain type of asset. They can be installed in the Map making or in the Rocket League mods discord server with the RLAESKeyBot bot (use `!help` for all the commands).

* uModel (or UE Viewer): used for [decrypting and exporting assets](01_assets.md)
* UE Explorer: used for [decrypting classes](02_classes.md)
* RLUPKTool ([source](https://github.com/Martinii89/RLUPKT/tree/master)): used for [decrypting `.upk` packages](04_packages.md)
* AssetExtraction ([source](https://github.com/Martinii89/Unreal-Library/tree/master/AssetExtraction)): used for [extracting classes](02_classes.md), exporting world information and object properties

## Logs

As you will probably break something in UDK (or Rocket League) the logs might help you with figuring out the reason of the crash. The logs are located in:

* `{UDK Folder}/UDKGame/Logs/` for UDK
* `/documents/My Games/Rocket League/TAGame/Logs/` for Rocket League

Additionally, you will find `.dmp` files in the logs folder which you send to BakkesBot with the .dmp command to view the content of that file
