---
title: Map Settings
---
# Map Settings

This page describes settings applied at the map level to give different effects. This is an ongoing area of learning and will be updated as new tactics are found.

## World Info

The World Info window from the `View` menu offers useful settings for the map as a whole, such as ambient sound and brightness. 

|Option| Description|
|------|------|
|`Default Post Process Settings` | A wide array of visual filters you can apply |
|`Zone Info` | Limits on maximum player movement |
|`Streaming Levels`| Shows [the streaming levels]() you have made |
|`Title`| Name of the map |
|`Author`| Your name |
|`My Map Info`| Add a `MapInfo_TA` here |

Some of the most useful Post Process settings are `Scene Desaturation`, `Scene Colorize`, and a combination of `Scene High Lights`, `Scene Mid Tones`, and `Scene Shadows`. I encourage you to make sense of the lights/tones/shadows numbers yourself, because they can feel a little weird and only you know the look you are hoping to achieve.

### MapInfo_TA

![alt text](../../.vuepress/public/images/newmapinfo.png "Very informative, much TA")

As with other parts of this process, UDK and/or Rocket League will supply default parameters if you do not. To create a new MapInfo_TA object associated with your map, **open World Properties from the View menu. Search for `info`, then click the blue dropdown arrow at the right edge of the window and select `MapInfo_TA`.** This will create a new region with all of the adjustable parameters inside `MapInfo_TA`:

| Map Info TA | |
|-------|-----|
|World Colors| Set some ambient environment colors |
|Mirror Field Type| Define the spawnpoint mirroring scheme used |
|Mirror Field XYRotation| Set the rotation of mirrored spawn points |
|Field Center| Location of the origin (generally 0,0,0) |
|Min Stadium Brightness| Set the level of "true black" |

The most powerful setting inside of Map Info is the MFT dropdown. `MFT_XY` mirrors spawnpoints across both the X and Y axes (i.e. your opponent on diagonal kickoffs will always be on the opposite side of the ball). `MFT_X` and `MFT_Y`, however, only mirror across one axis. The famous `Labs_Utopia_P.upk` map uses the `MFT_X` scheme so that spawn points are merely flipped over the center line of the map. `MFT_NONE` is perfect for asymmetric maps or maps with odd-numbered symmetry (think triangles or pentagons). Using this setting, you will have to manually place all spawn points for both teams.

Similarly, the XYRotation setting may be used for some great effects. To spawn all players in a line facing the same direction, you would use one of `MFT_X` or `MFT_Y` (depending on the map orientation) and set the rotation to 0.

## Scene Capture Cube Map Actor

![alt text](../../.vuepress/public/images/UDK/basics/scenecapturecubemapactor.jpg "A time for reflection")



<!-- |Auto cam| |
|------|-----|
| | |

|Spectator| |
|------|------|
| | |

|Sound| |
|------|------|
| arena sound settings |plays sound when a certain event happens. You can choose from one of [the existing arena sound settings]() | -->

