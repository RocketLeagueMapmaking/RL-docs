---
title: 'Starting a Map'
---
# UDK Basics

## Starting a Map

This is the point in the guide where things have to go a little non-linear. You may need to jump forward to [Blender sections](../blender/01_blender), then back to [Material sections](../textures/01_textures), then back to this for it all to make sense.

:::tip Progress
From here until the end, this guide will focus on creating a custom map from scratch. Have you already decided what you want to make? [This flowchart](../../essential/01_flowchart) should help you pick which sections to focus on.
:::

## Getting Going

### Project Information

First, it’s a good idea to sketch out your idea somewhere, be it a sticky note, whiteboard, or inside Paint. Here is my (dumb) idea for a map. It’s like a standar Soccar map, but the goals are on the ceiling, and boost is on the walls. Players can’t enter the goals because I say so.

![alt text](/images/UDK/basics/image212.png "Speaking of using paint...")

I am starting with a completely blank map to be thorough. **You don’t have to**. However, there are still a few gotchas if you use one of the non-blank maps. Keep an eye out for compasses if you skip ahead quickly.

#### Name Your Project <Badge text="important" type="tip"/>

Go to File > Save Current and pick a good name for the project. Mine is called CeilingGoal. It is saved inside `{UDK Folder}\UDKGame\Content\Maps\CeilingGoal\.` 

:::warning
Many things will not work properly if you have spaces in the project name, so either use camelCase, snake_case, or what3ver_MAKESxSENSE-toYou.
:::

[Here](https://drive.google.com/file/d/1_SRltyPZXlqwuA4s2rHA5H8GgMOiSqk-/view?usp=sharing) is another set of meshes to get you going. I fine-tuned the UVs so that they look reasonably good with no materials. You may use these or the ones inside Park_P.upk. If your UDK setup has the fully Dummy Assets package, this will be inside `{UDK Folder}\UDKGame\Content\DummyAssets\Maps\BeckwithPark` 

### Project Settings

First, there are a few World properties to tweak. Open World Properties from the View menu. Search for “kill” and then change Kill Z to something like -3000 and Soft Kill to -2500. Kill Z is the height at which you die, and Soft Kill is where your camera stops as you fall to your death. These just need to be substantially below the playing field.

#### Include Stickywalls <Badge text="important" type="tip"/>

![alt text](/images/UDK/basics/image27.png "It sticks with you")

Next, we are going to include [StickyWalls®](../../essential/09_sticky_walls.md) in this project. **Right click and Fully Load the Generic package. Right click StickyWalls and do “Create a copy…” Select your new map in the Package dropdown (or type it exactly). Click OK. If this fails, make sure that your project name does not have spaces.**

Because this is going to be based on the default soccar map, the initial assets are almost all ready to go. **In the [Content Browser](../../essential/08_content_browser), right click Park_P and select Fully Load.** Filter to Static Meshes only in the Object Type selector.

![alt text](/images/UDK/basics/image22.png "All the makings of a delicious new map")

Inside the Content Browser viewer section, there are a number of assets called Field_something and Goal_something. These are the pieces we’ll start with. But first, we’ll just make an empty platform with a single wall.

**Find the static mesh named ConcreteBase, and drag it into the 3D editor.** This will be the floor. Once it is in the scene, **either right click it and select Properties at the top, or press F4.**
