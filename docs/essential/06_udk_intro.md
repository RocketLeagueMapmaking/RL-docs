---
title: UDK Introduction
tags:
  - UDK
  - starting
  - hello
---
# UDK Basics

## Hello UDK

### The Hottest Hotkeys

* `Space` - Switch between Translate, Rotate, and Scale manipulator widget modes.
* ` (to the left of the number row) - Switch between World and Local coordinates.
* `Ctrl+S`<Badge text="dumb" type="warning"/>  - Does not save. This does a geometry subtraction with the brush.
* `Ctrl+A`<Badge text="dumb" type="warning"/>  - Does not select all. This does a geometry addition with the brush.
* `F4` - With an actor selected, brings up its Properties window.
* `Ctrl+D` - Duplicate. This creates a copy which is slightly offset in space.
* `Ctrl+C Ctrl+V` - Copy/Paste. Doing this creates a copy which is not offset from the original.

**Hidden functions will show up when you right click many of the buttons around UDK.**

**Additionally, a treasure trove of options will show up when you right click an Actor in the Editor Window. See [the Properties Window](./07_udk_editor.html#properties-window) section.**

### Navigating Around

* `Left Click + Move` - Rotate the view left and right
* `Right Click + Move` - Freely spin the view around
* `WASD` - Fly in 3d space (also Numpad 8/4/2/6)
* `QE` - Fly up and down in 3d space (also Numpad 7/9)
* `Right Click + WASDQE`<Badge text="important" type="tip"/> - Fly while looking around - a.k.a. the way you want to be moving
* `Scroll Wheel` - Speed up and slow down while flying

### View Hotkeys

**Most of these are for that “wtf did I just press” moment:**

* `I`  - Crazy glowy fog mode
* `O` - Hide all wireframe volumes
* `F` - Show/hide world fog
* `Alt+W` - Show/hide static meshes
* `G` - Game mode - Hides all 2d sprite actors (lights, etc) which will be invisible in game
* `H` - Hide selected - Undo with Ctrl+H or the eye with an X in section 14
* `Alt+G/H/J` - Change viewport to top/front/side orthographic mode
* `Alt+F` - Change viewport to perspective mode
* `Z` - Do a weird telescope zoom out (also Numpad 1)
* `C` - Do a weird telescope zoom in (also Numpad 3)
* `B` - Show/hide CSG brush
* `1` - Center viewport on 0,0,0
* `Numpad +` / `Home` - Center viewport on active object
* `Alt+Number Row` - Change viewport render mode

### Miscellaneous Hotkeys

* `Ctrl+Shift+F` - Open the Content Browser
* `L + Left Click` - Create a Point Light
* `Ctrl+Tab` - Cycle through open windows
* `Ctrl+Shift+C Ctrl+Shift+V` - Copy/Paste using the [Clip Pad]()
* `Left Click + F9` - Take a screenshot. Screenshots are stored in \
`{UDK Folder}/UDKGame/Screenshots/Win64/`
