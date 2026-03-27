---
title: Installing
---
# Installing UDK

## The Bare Minimum Software Suite

* [Unreal Development Kit 2015](https://drive.google.com/uc?id=1z9C3t6nKW1utWilVshODxyGcucxuzbOW&export=download) (or 2013 if you want to cause trouble)
* A full-featured 3D modeling program like [Blender](https://www.blender.org)
* A capable image editor like [Paint.net](http://www.getpaint.net/download.html#download) or [GIMP](https://www.gimp.org/downloads/) to accompany Blender. If you have Photoshop or something else you prefer, stick with that.

## All-in-One Packages <Badge text="recommended" type="tip"/>

If you don’t want to stress about this setup process, there are some publicly-available packages which streamline it immensely.

[This script](https://github.com/RocketLeagueMapmaking/UDK_RL_Setup) is meant to hold your hand through the entire setup process, take care of tedious and error-prone steps for you, then generate a Project folder that starts you off on the right path. Refer to the section below to install UDK properly.

* [GitHub Link](https://github.com/RocketLeagueMapmaking/UDK_RL_Setup)
* [Discord support channel](https://discord.com/channels/711882968200904715/712403230516052038)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CfelMbPLF6U?si=45jt7nXF4s2ohOn3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

::::details Community installers tools

:::warning Setup steps
The steps for the setup using this tool may differ from this guide and the other tools, see the page on the rocketleaguemods website for more information. Note that it might be outdated and it might not have all the latest discoveries added
:::

### Newk’s UDK Simple Setup

To download this, you will need to make an account with RocketLeagueMods.com, our little corner of the VideoGameMods network. Newk’s package supplies detailed instructions for installing UDK 2015, and provides a huge set of resources to get going quickly. Refer to the section below to install UDK properly.

* [RocketLeagueMods Link](https://rocketleaguemods.com/mods/udk-2015-simple-setup/)

::::

## Running the Installer

After you [download the UDK 2015 Installer](../resources/downloads.md#setup) from my Drive (or any other friendly modder’s secret stash), double click it to start the install process. Accept the TOS.

![Screen of installer for 'Project Setup' highlighting 'Empty project'](/images/udk/essential/installation_step_project.png "UT Sample Game will cause great sadness")

**Install with an Empty Game.** The Sample Game has lots of cool things, but they’re completely irrelevant to Rocket League and will only cause trouble. Sorry.

![Screen of installer for 'Install options' on the project name field](/images/udk/essential/installation_step_project.png "Or whatever you wanna name it")

In the Project Name field, enter a good name for your project. I call mine RLMM (Rocket League MapMaking) but yours will be referred to as `{ProjectName}` in this guide. Additionally, this folder will be called `{UDK Folder}` for the rest of this guide.

> [!WARNING]
> It is recommended to not choose a project name with a space or other special characters!
> This could give you trouble later, such as when running installers.

Twiddle your thumbs for a few minutes as it installs prerequisites and then installs UDK.

Ignore the extra options, and complete the install.

:::danger Manual Installation
If you are manually setting up UDK, or just want to see what is happening behind the scenes with those packages, please continue. Don’t launch it, because we have some things to change.

Before continuing, [read more](./04_dummy_classes.md) about the files that need to be changed.
This list is not updated recently and the Dummy classes repository can have more changes in Core and Engine classes!
:::
