---
title: Classes
---
# Decyption

With UE Explorer or the AssetExtraction tool you can update or add new classes to [the dummy classes](../../essential/04_dummy_classes). These classes can be used for [kismet nodes](../kismet/04_tagame). If you can't open a new package you are missing the keys for that package in `keys.txt`.

## Packages

There are a few packages in the `{CookedPCConsole}` folder that can be used for extracting classes:

- `AkAudio.upk`: contains classes related to [sound](../kismet/05_sound)
- `Core.upk`: contains all the base classes. These are used in almost every other package
- `Engine.upk`: contains basic classes used mostly in `ProjectX.upk` and `TAGame.upk`
- `GfxUI.upk`: contains classes related to interfaces
- `ipDrv.upk`: contains classes related to the servers and more online classes
- `OnlineSubsystemEOS.upk`: contains classes related to authentication and online interfaces
- `OnlineSubsystemSteamworks.upk`: contains classes related to Steam and the workshop
- `ProjectX.upk`: contains classes related to online systems in the game, such as matchmaking and player progress
- `TAGame.upk`: contains classes and [kismet nodes](../kismet/04_tagame) mostly used in map making
- `WinDrv.upk`: contains a few classes related to http requests

Another file that's useful is `Startup.upk`, this contains packages for boosts, FXActors and more. Every package mentioned in the list above has it's own folder in `{UDK Folder}/Development/Src/`.

## Kismet nodes

Almost every file that starts with: `SeqAct_` (action), `SeqCon_` (condition), `SeqEvent_` (event) or `SeqVar_` (variable), can be used in [kismet](../kismet/04_tagame). If the node is not displayed correctly, delete or comment `Links=none`, `VariableLinks=none` and `LinkedVariables=none`.

## Recompiling

When you have added a new class or changed an existing node, you have to recompile it before UDK can recognize it. This can be done by using Unreal Frontend, in the menu click `script` > `Full recompile`, or by starting UDK with the `make -full` arguments. If you see at the bottom of the logs `COMMANDLET 'UDK.exe make -full' SUCCEEDED`, the recompile was successful and you can open UDK.

![](/images/decryption/recompile.png "Task failed succesfully!")

## Compile issues

This list is only discussing a small list of errors and warnings that might not be clearly described in the compile logs or in the [Unreal Wiki compiler errors overview](https://wiki.beyondunreal.com/Compiler_errors_overview)

### Errors

- `Error, BEGIN OBJECT: The component name {Variable} is already used (if you want to override the component, don't specify a class)`.
The variable has already been declared in the current or parent class. You can remove the `Class={VariableClass}` in the object and UDK will recompile this variable. 

- `Error, Unrecognized type '{Variable}'`
Add the structure in the _Types file in that package

### Warnings

- `Warning, ImportText ({Variable}): Unknown member {Property} in: ....`
Update the structures in the _Types file in that package

- `Warning, Invalid property value in defaults:         {Property}=none`
Comment/delete that property as it has the same value as the default value as that property and thus does not need to be specified again

- `Warning, Import failed for '{Property}': property is config ....` / `property is localized ....`
This property needs to be specified in a .ini file and a default property does not need to be specified

- `Warning, ImportText ({Property}: Missing opening parenthesis: 0`
Comment/delete that property as it has the same value as the default value as that property and thus does not need to be specified again

- `Warning, ComponentProperty {Package}.{ParentClass}:{Variable}: unresolved reference to '{VariableClass}'Default{Class}.{Property}''`
UDK can't find the default objects, so change:
`{Variable}={VariableClass}'Default{Class}.{Property}'`
to:

```uc
begin object name={Property} Class={VariableClass}
end object
{Variable}={Property}
```

- `Warning, Unknown property in defaults:     {Variable}={Value} (looked in {ObjectClass})`
This error is probably shown when you have this code:

```uc
begin object name={Variable} Class={ObjectClass}
object end
{Variable}={Value}
```

To remove this warning change `object end` to `end object`