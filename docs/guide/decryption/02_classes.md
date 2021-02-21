---
title: Classes
---
# Decyption

Decrypting new classes will maybe result in new kismet nodes or new classes that can be found in [the console browser](../../essential/08_content_browser.html#content-browser). Decrypting new classes is done with UE Explorer

## Packages

There are a few packages in the `{CookedPCConsole}` folder that can be used for extracting classes:
- `AkAudio.upk`: contains classes related to [sound]()
- `Core.upk`: contains all the base classes. These are used in almost every other package
- `Engine.upk`: contains basic classes used mostly in `ProjectX.upk` and `TAGame.upk`
- `GfxUI.upk`: contains classes related to [interfaces]()
- `ipDrv.upk`: contains classes related to the servers and more online classes
- `OnlineSubsystemEOS.upk`: contains classes related to authentication and online interfaces
- `OnlineSubsystemSteamworks.upk`: contains classes related to Steam and the workshop
- `ProjectX.upk`: contains classes related to online systems in the game, such as matchmaking and player progress
- `TAGame.upk`: contains classes and [kismet nodes]() mostly used in map making
- `WinDrv.upk`: contains a few classes related to http requests

Another file that's useful is `Startup.upk`, this contains packages for boosts, FXActors and more. Every package mentioned in the list above has it's own folder in `{UDK Folder}/Development/Src/`. 

## Kismet nodes

Almost every file that starts with: `SeqAct_` (action), `SeqCon_` (condition), `SeqEvent_` (event) or `SeqVar_` (variable), can be used in [kismet](). Before adding the kismet nodes to the dummy classes make sure to delete any `Links=none`, `VariableLinks=none` and `LinkedVariables=none`.

## Recompiling

When you have added a new class or changed an existing node, you have to recompile it before UDK can recognize it. This can be done by using Unreal Frontend, in the menu click `script` > `Full recompile`. If you see at the bottom of the logs `COMMANDLET 'UDK.exe make -full' SUCCEEDED`, the recompile was succesful and you can open UDK.

![](~@images/decryption/recompile.png "Task failed succesfully!")
