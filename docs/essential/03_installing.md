---
title: Installing
# sidebar: auto
---
# Installing UDK

## The Bare Minimum Software Suite

* [Unreal Development Kit 2015](https://drive.google.com/uc?id=1z9C3t6nKW1utWilVshODxyGcucxuzbOW&export=download) (or 2013 if you want to cause trouble)
* A full-featured 3D modeling program like [Blender](https://www.blender.org)
* A capable image editor like [Paint.net](http://www.getpaint.net/download.html#download) or [GIMP](https://www.gimp.org/downloads/) to accompany Blender. If you have Photoshop or something else you prefer, stick with that.

## All-in-One Packages

If you don’t want to stress about this setup process, there are two publicly-available packages which streamline it immensely.

### RocketLeagueMapmaking UDK RL Setup Script

This script is meant to hold your hand through the entire setup process, take care of tedious and error-prone steps for you, then generate a Project folder that starts you off on the right path. Refer to the section below to install UDK properly.

* [GitHub Link](https://github.com/RocketLeagueMapmaking/UDK_RL_Setup)


### Newk’s UDK Simple Setup

To download this, you will need to make an account with RocketLeagueMods.com, our little corner of the VideoGameMods network. Newk’s package supplies detailed instructions for installing UDK 2015, and provides a huge set of resources to get going quickly. Refer to the section below to install UDK properly.

* [RocketLeagueMods Link](https://rocketleaguemods.com/mods/udk-2015-simple-setup/)

## Running the Installer

After you [download the UDK 2015 Installer](../menu/downloads.html#starting) from my Drive (or any other friendly modder’s secret stash), double click it to start the install process. Accept the TOS.

![alt text](../.vuepress/public/images/image149.png)

**Install with an Empty Game.** The Sample Game has lots of cool things, but they’re completely irrelevant to Rocket League. Sorry.

![alt text](../.vuepress/public/images/image243.png)

In the Project Name field, enter a good name for your project. I call mine RLMM (Rocket League MapMaking) but yours will be referred to as `{ProjectName}` in this guide. Additionally, this folder will be called `{UDK Folder}` for the rest of this guide.

Twiddle your thumbs for a few minutes as it installs prerequisites and then installs UDK.

Ignore the extra options, and complete the install. 

:::danger
Don’t launch it, because we have some things to change.
:::

## Things to Change

If you used one of the All-in-One packages, you may skip ahead to [the UDK Intro section](06_udk_intro). If you are manually setting up UDK, or just want to see what is happening behind the scenes with those packages, please continue.

<!-- ## Install locations <Badge text="not finished" type="warning"/>

To make this guide more customizable, you can enter here your install locations. 

:::warning NOT MANDATORY
You don't have to fill this form. If you choose not to do it, the UDK folder will be {UDKfolder}, etc
:::
 <script>

</script>
<form>
<label>UDK folder</label><br>
<input required type='text' placeholder='C:\UDK' id='save_udk'><br>
<label>Rocket league folder</label><br>
<input required type='text' placeholder='C:\Games\SteamApps\common\rocketleague' id='save_rl'><br>
<label>Project name</label><br>
<input required type='text' placeholder='RLMM' id='save_projectName'><br>
<label>CookedPCConsole</label><br>
<input required type='text' placeholder='C:\Games\SteamApps\common\rocketleague\TAGame\CookedPCConsole' id='save_cookedpc'><br>
<input type= 'submit' value='save'>
</form>
 -->
