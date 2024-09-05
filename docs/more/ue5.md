---
title: Unreal Engine 5
---

# Rocket League and Unreal Engine 5

After rumors following the leaked plans for Rocket League, that it will be transitioned to UE5, Devin acknowledged on Reddit that this is an ongoing project for Psyonix.

What the effects are for Rocket League map making are not clear until Psyonix shares their plans. For now, you don't need to learn UE5 as it will take some time before they finish this long-term project.

## Background info - UDK

* Currently we use [Unreal Engine 3](https://en.wikipedia.org/wiki/List_of_Unreal_Engine_games#Unreal_Engine_3) in a tool called UDK (Unreal Development Kit). UDK was first released in 2006, with the final update in 2015
* UDK is not user friendly, with very few hotkeys, an outdated look, no collaboration features, and is just generally from a different era of software.
* Limitations on detail, file size, lots of inefficiencies

## Background Info - UE5

* Has not been fully released yet, planned for release in early 2022, so more features will be implemented and figured out
* For now, assumptions basically have to come from how UE4 works. UE3 to UE4 was a tremendous change to almost everything, but UE5 is a continuation of UE4’s direction
* Much more modern, streamlined, capable, efficient, good-looking, etc

## Modding - UDK

### UPK files

* We take advantage of the fact that games are not monolithic packages, but rather made up of UPK files or “**U**nreal **P**ac**K**ages.” We can pull a “man-in-the-middle” type hack to simply replace these files and the game has no idea.
* Easier to decrypt and gain access to these files because there is one per object/car/map. Modders have rebuilt a library of the name and type of everything in the game, which allows us to reference them and add them to our own maps (e.g. background skyscraper models, sky textures, sand material from Wasteland, alpha boost)
* We have essentially complete control over everything that happens inside the .upk file because we are creating it with the full UDK program.

### Bakkesmod and Memory Access Modding

* Bakkesmod, AlphaConsole, RLBot, and other mods which shall not be named all use a technique of reading data directly from the computer’s memory and modifying it
* The mods I did name have been approved and actually worked on by Psyonix so to provide boundaries for what they are allowed to access, manipulate, etc.
* One of the most powerful plugins for modders is called the Netcode plugin. Netcode is a general term for code which deals with user data being transmitted. The Netcode plugin allows players’ games to send data directly to each other instead of to a Psyonix server, allowing modders to send information that doesn’t exist in the game (e.g. how many apples you’ve caught in your basket, how much money you have in the game, if you’ve been hit by a love arrow, etc)
* Complicated maps like Among Us, Battle Royale, Rumble 2.0, Fall Guys all depend on the Netcode plugin to run, while standard maps do not

### Distribution

* Have to download .upk files and make them accessible to the game. Currently the Epic Launcher has no mod library support, so maps are available on Steam for anyone who still has a copy or from modders’ private Dropboxes/Drives
* Impossible to force people to update anything that doesn’t come from Steam – lots of old versions of things floating around

## Modding - UE4 / UE5

### Packaging

* Games are fundamentally more closed off and typically are just a single executable rather than a collection of .upk and other files
* Much easier to distribute, maintain, keep intellectual property safe, etc
* [Mods are done as official plugins](http://www.tomlooman.com/add-mod-support-to-your-unreal-engine-4-game/), which have to be permitted by the game and added into the appropriate plugin folder
* [https://mod.io/](https://mod.io/) and other frameworks can also be integrated into UE4/UE5 games, but that’s the sticking point – they have to be intentionally allowed by the game developer

### Memory Access Modding

* This technique should always be possible, but it’s technically against the TOS/EULA of most games because it involves reverse-engineering the game’s code
* Very tedious and time consuming to map out the memory space of a game, easy for the developers to make it much harder than it already is with simple tricks or encryption
* End result: Psyonix/Epic hold all the cards and we have to play in the sandbox they provide us (assuming they provide one at all)

### Distribution

* Nexusmods is a common platform for mod distribution that works with many Unreal Engine games
* [Epic Launcher Roadmap](https://trello.com/b/GXLc34hk/epic-games-store-roadmap) lists “Mod Support For Games” as a finished feature a year ago, but has only been added for a handful of games so far
* Generally speaking UE4/5 were made in the era of SaaS (software as a service) with an emphasis on creating games which will be updated/upgraded over time, so they are much better suited from the ground up for distributing and maintaining files such as plugins, skins, etc

## UE5 Upgrade Challenges

### 3D models

* Fortunately our 3D models exist outside of the engine, so we can continue to use everything we’ve already made
* UE5 will allow much higher detail models and automatically optimize them (Nanite)

### Engine

* UE4 was essentially a complete rewrite of UE3, so many concepts went out the window and others were improved to an almost unrecognizable level (e.g. Kismet to Blueprint)
* Significant overhead of relearning, but UE4/5 is much easier to learn if starting from scratch. Some skills and familiarity will translate very well from UE3 but not all.

### Computers

* Better computers will likely be required because running the engine is often more taxing than running the game itself
* Probably won’t run on anything before Windows 10. UDK was made for Windows XP and forced to work on Vista, 7, 8, 10.

## Creative Mode

* Plugin support – Psyonix has to choose to add these mod support packages to the game. I don’t see why they wouldn’t, but it is development overhead without a clear financial incentive other than bolstering interest in the game
* Creative mode is much in the same boat – it would be a significant effort without a clear benefit. Right now it’s “pay artist to make car -> sell car -> get money back.” Creative mode would be “pay a team of developers and artists to make a new mode -> add to game for free -> hope it convinces people to play the game -> hope these people then spend money on other things.”
* Marbles on Stream Creative Mode – this game uses a model that I personally hate, but it obviously works. You pay a monthly subscription to get a creator license, which gives you access to a large library of pieces that can be placed in the editor. In other words, creators pay to create content the for a free game.
