---
title: Installing
---
# Installing UDK

## The Bare Minimum Software Suite

* [Unreal Development Kit 2015](https://drive.google.com/uc?id=1z9C3t6nKW1utWilVshODxyGcucxuzbOW&export=download) (or 2013 if you want to cause trouble)
* A full-featured 3D modeling program like [Blender](https://www.blender.org)
* A capable image editor like [Paint.net](http://www.getpaint.net/download.html#download) or [GIMP](https://www.gimp.org/downloads/) to accompany Blender. If you have Photoshop or something else you prefer, stick with that.

## All-in-One Packages

If you don’t want to stress about this setup process, there are two publicly-available packages which streamline it immensely.

### RocketLeagueMapmaking UDK RL Setup Script <Badge text="recommended" type="tip"/>

This script is meant to hold your hand through the entire setup process, take care of tedious and error-prone steps for you, then generate a Project folder that starts you off on the right path. Refer to the section below to install UDK properly.

* [GitHub Link](https://github.com/RocketLeagueMapmaking/UDK_RL_Setup)

### Newk’s UDK Simple Setup

To download this, you will need to make an account with RocketLeagueMods.com, our little corner of the VideoGameMods network. Newk’s package supplies detailed instructions for installing UDK 2015, and provides a huge set of resources to get going quickly. Refer to the section below to install UDK properly.

* [RocketLeagueMods Link](https://rocketleaguemods.com/mods/udk-2015-simple-setup/)

:::warning Setup steps
The steps for the setup using this tool may differ from this guide and the other tools, see the page on the rocketleaguemods website for more information. Note that it might be outdated and it might not have all the latest discoveries added
:::

## Running the Installer

After you [download the UDK 2015 Installer](../resources/downloads.md#setup) from my Drive (or any other friendly modder’s secret stash), double click it to start the install process. Accept the TOS.

![alt text](/images/udk/essential/image149.png "UT Sample Game will cause great sadness")

**Install with an Empty Game.** The Sample Game has lots of cool things, but they’re completely irrelevant to Rocket League and will only cause trouble. Sorry.

![alt text](/images/udk/essential/image243.png "Or whatever you wanna name it")

In the Project Name field, enter a good name for your project. I call mine RLMM (Rocket League MapMaking) but yours will be referred to as `{ProjectName}` in this guide. Additionally, this folder will be called `{UDK Folder}` for the rest of this guide.

Twiddle your thumbs for a few minutes as it installs prerequisites and then installs UDK.

Ignore the extra options, and complete the install.

## Things to Change

If you used one of the All-in-One packages, you may skip ahead to [and start a UDK project](project_setup.md#starting-a-new-project). If you are manually setting up UDK, or just want to see what is happening behind the scenes with those packages, please continue.

:::danger Manual Installation
If you are going to install UDK manually: don’t launch it, because we have some things to change.
:::
