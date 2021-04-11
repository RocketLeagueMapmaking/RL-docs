---
title: Customize Rocket League
---
# Miscellaneous

## Startup options

In [Steam](https://support.steampowered.com/kb_article.php?s=d202a7be5d8e4278fc7c26a49fc36f66&ref=1040-JWMT-2947) and [Epic Games](https://www.reddit.com/r/EpicGamesPC/comments/k3bvao/new_way_to_change_game_launch_options_arguments/) you can configure some start options for Rocket League. Some useful options are:
- `-nomovie`: skips the intro and loads faster into the game
- `-AllowBackgroundAudio`: allow sounds from Rocket League when the game is in the background 
- `-high`: gives Rocket League high priority
- `-dev`: allows use of the developer console
- `-log`: launches another window to view the logs in real-time

The whole line would then look like this:
```
-nomovie -AllowBackgroundAudio -high -dev -log
```

## Command line arguments

With command line arguments, you can configure the start of Rocket League. To open Rocket League with a command line option, open a command line window, `cd <path to your rocketleague.exe folder>` and run the following example command:
```
RocketLeague.exe DEFAULTMAP=Labs_Underpass_P?Game=TAGame.GameInfo_Tutorial_TA?Aerial?Hard?
```
This will open rocket league in the Underpass map with the hard aerial training. Each command has this base:
```
RocketLeague.exe DEFAULTMAP=MAPNAME?Game=TAGame.GameInfo_GAMEMODE_TA?MATCHOPTIONS
```
Note that you can place after the match options all your preferred startup options.

- `MAPNAME` is the name of the map found the `{CookedPCConsole}` Folder
- `GAMEMODE` is the type of game you want to start:
    - `Basketball`: Hoops match
    - `Breakout`: Dropshot match
    <!-- - `Cinematic`: cinimatic intro from the F2P update? -->
    <!-- - `CollisionTest`: ??? -->
    <!-- - `FTE`: ??? -->
    - `Football`: Gridiron match
    - `GFxMenu`: menu
    <!-- - `GameEditor`: ??? -->
    - `GodBall`: heatseeker match
    - `Hockey`: snowday match
    - `Items`: rumble match
    <!-- - `PerfTest`: ??? -->
    - `Season`: season match
    - `Soccar`: soccar match
    - `TrainingEditor`: opens training editor
    <!-- - `Transition`: opens transition screen? -->
    - `Tutorial`: opens a tutorial 
- `MATCHOPTIONS` are the available options to the gamemode you selected as `GAMEMODE`. For an idea of what's possible you can take a look at [this reddit post](https://www.reddit.com/r/RocketLeague/comments/4agemx/how_to_play_the_hidden_mutators_and_other_mods/), look in the logs or use bakkesmod.

## Custom main menu <Badge text="not finished" type="warning"/>

You can easily replace the main menu with another map by using [the `Switch main menu` kismet node](../kismet/04_tagame) or with the [Main menu switcher](https://bakkesplugins.com/plugins/view/194) bakkesmod plugin. For a menu with a custom map you can use [a template menu map]() or follow [this video](https://www.youtube.com/watch?v=NQ8oJDt742E) from Timothy.