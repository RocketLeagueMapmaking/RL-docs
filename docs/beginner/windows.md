---
title: Windows tips
tags:
  - windows
  - file extension
  - batch script
---
# Windows Knickknacks

Here are a number of useful Windowsy things to make your development experience a little less painful.

## File Extensions

I highly recommend disabling the option to “hide file extensions for known types” on Windows so that you actually know what files you are operating with. **Search for File Explorer Options in the Start Menu. Go to the View tab. Uncheck “Hide Extensions for known file types.”**

That, or always keep the “Type” column visible in your file explorer windows. You will have to frequently make changes to file extensions during this process, and it’s just a good thing to have enabled in general.

## Batch Script For Quickly Testing Maps (BSFQTM) <Badge text="important" type="tip"/>

Create a new text file, then rename it something like UtopiaOverwrite.bat. To use this script, simply drag your map file onto it, and it will overwrite the Rocket Labs Utopia (donut) map, which is not used in any multiplayer playlist. 

::: warning
Make a backup of this map (Rocket Labs Utopia) somewhere safe.
:::
```
@echo off
echo "%~1"
echo F|xcopy /y "%~1" "{CookedPCConsole}\Labs_Utopia_P.upk"
```
CookedPCConsole is the folder containing all of Rocket League’s assets, within the install folder:
**C:\Program Files (x86)\Steam\steamapps\common\rocketleague\TAGame\CookedPCConsole**

Meaning that the script for me is:
```
@echo off
echo "%~1"
echo F|xcopy /y "%~1" "C:\Program Files (x86)\Steam\steamapps\common\rocketleague\TAGame\CookedPCConsole\Labs_Utopia_P.upk"
```

For ease of use, I copy this script into the folder of each of my in-progress maps.
