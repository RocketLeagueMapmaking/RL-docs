---
title: Ghost Plugin
tags:
  - bakkesmod
  - plugin
  - thanrek
---

# Ghost Plugin by Thanrek

## Features

[Ghost Plugin Download](https://bakkesplugins.com/plugins/view/174)

This plugin lets you record and race against ghosts of other players.

## Integration with Custom Maps

1. Add an InterpActor/Mover Actor to the scene that will act as the ghost.

2. Add the following named variables to kismet:
* String “MapName” : the display name of your map (used in ghost names)
* Int “LapNb” : the variable used to count laps, should be initialized to -1, and incremented every lap (e.g. on a triggerVolume event on the finish line)
* Vector “GhostPosition” : the position of the ghost, should be initialized to the idle position of the ghost (somewhere the player can’t see if you don’t want the ghost to appear when the plugin is not used).
* Vector “GhostRotation” : the rotation of the ghost, should be initialized to the idle rotation of the ghost.

3. Add the incrementation logic for the “LapNb” variable. See the image below for an example.

![alt text](../../.vuepress/public/images/ghostplugin_1.png "LapNb")

4. Add the loop from the image below to teleport the ghost Actor (The Target parameter is set to the InterpActor acting as the ghost in your scene)

![alt text](../../.vuepress/public/images/ghostplugin_2.png "Teleportation is fun")

5. If you would like to allow users to change the color of the ghost, copy and paste this kismet code from [the Kismet Library](https://github.com/RocketLeagueMapmaking/Kismet/blob/master/plugins/thanrek_ghostplugin_ghostColor.txt). Link the **New Group** input of the Matinee Node to the ghost Actor. Set the ghost's material to `wheel_hamsterwheel_holographic_SF.wheel_hamsterwheel_holographic.Wheel_HW_Hamster_SE_MAT`.

6. That's it!