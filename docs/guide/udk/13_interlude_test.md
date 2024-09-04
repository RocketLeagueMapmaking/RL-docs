---
title: Interlude - Rapid Testing
advanced: false
---
# Notes on Rapid Testing

If you’re like me, you never get anything right on the first try. You probably don’t get it right on the second try, or even the third. I’m lucky to get things right on the fourth try. Because this is such an error-prone and goofy development process, you should absolutely take all the steps you can to make your life easier.

You do not need to close Rocket League to test changes to your map. You just need to overwrite the file it’s using and reload the map in game. I also recommend setting the game to either Borderless or Windowed mode in the Video settings so that the process of jumping in and out is less painful.

Near the [beginning of the guide](../../essential/project_setup.md#batch-script-for-quickly-testing-maps-bsfqtm), I provided a small batch (.bat) script for quickly testing maps. **Keeping a copy of this inside each project folder within Maps will save you hours in the long run.**

Or **set one instance of this script as the default program for opening .udk and .upk files.** This way, you only have to double-click any .udk file anywhere in your files to replace one of the in-game maps. Just think of the time savings.

![Steps on how to assign the overwrite script to always open .udk files on Windows](/images/udk/basics/overwrite_script_use_always.png "1337-h4x.bat")

**You do not need to Build All unless you have added/changed PathNodes or Spawns, need to fix lighting, or you want to publish your map. Skipping this step saves huge amounts of time.**

It is possible to go from re-exporting a mesh from Blender to driving on it in under 10 seconds. Do your future self a favor and set up a nice workflow :).
