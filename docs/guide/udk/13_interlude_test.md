---
title: Interlude - Rapid Testing
---
# Notes on Rapid Testing

If you’re like me, you never get anything right on the first try. You probably don’t get it right on the second try, or even the third. I’m lucky to get things right on the fourth try. Because this is such an error-prone and goofy development process, you should absolutely take all the steps you can to make your life easier.

You do not need to close Rocket League to test changes to your map. You just need to overwrite the file it’s using and reload the map in game. I also recommend setting the game to either Borderless or Windowed mode in the Video settings so that the process of jumping in and out is less painful.

Near the [beginning of the guide](../essential/windows.html#batch-script-for-quickly-testing-maps-bsfqtm), I provided a small batch (.bat) script for quickly testing maps

**I keep a copy of this inside each project folder within Maps.** This way, I can drag the map onto this script and instantly load it into Rocket League.

![alt text](../../.vuepress/public/images/image172.png "Thin windows for thin margins of error")

Additionally, I like to keep the project folder open in a thin window just to the right of UDK. This way, I don’t have to switch back and forth to reload the map after every little change.

**You do not need to Build All unless you have added/changed PathNodes or Spawns, need to fix lighting, or you want to publish your map. Skipping this step saves huge amounts of time.**

It is possible to go from re-exporting a mesh from Blender to driving on it in under 10 seconds.