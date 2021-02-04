---
title: Introduction
---
# Blender Basics

## Key Terms <Badge text="important" type="tip"/>
* `Mesh` - A 3D object made of vertices, edges, and faces
* `Vertex` - A point defining a mesh
* `Edge` - A straight line connecting two vertices
* `Face` - A surface connecting at least 3 vertices and edges (also called a `Poly` or `Polygon`)
* `Normal` - A vector perpendicular to a face which is used for collision and rendering
* `(Bezier) Curve` - A 2D or 3D line defined by a polynomial function
* `Texture` - A 2D image
* `UV Map` - A mapping of a 2D image onto a 3D surface
* `Material` - All aspects of an object’s surface properties
* `Global Coordinates` - Z (blue) is up, and X (red) and Y (green) are along the ground grid
* `Local Coordinates` - All coordinates are rotated relative to the active object

## The Hottest Hotkeys

Blender probably has the most hotkeys of any software in existence, since they are contextual and have multiple possible combinations. That can make it intimidating, but I promise it's extremely powerful once you know them. **Try to memorize these hotkeys, and consider everything else a bonus.**

* `Ctrl + S` - Save! - Blender has gotten much, much more stable over the years, but still save often
* `Tab` - Toggle Edit/Object Modes
* `Z` - Viewport modes wheel
* `Alt + Z` - Toggle X-ray view
* `Shift + Space` - Favorite shortcuts menu
* `A` - Select all
* `Alt + A` / `A A` - Deselect all
* `Shift + A` - Add object
* `X / Delete` - Delete object
* `G` - Grab - Translate selection
* `R` - Rotate - Rotate selection
* `S` - Scale - Scale selection
* `___ + X` - Limit operation to global X axis
* `___ + Y` - Limit operation to global Y axis
* `___ + Z` - Limit operation to global Z axis
* `___ + X X` - Limit operation to local X axis
* `___ + Y Y` - Limit operation to local Y axis
* `___ + Z Z` - Limit operation to local Z axis
* `___ + Shift X` - Lock X axis during operation
* `___ + Shift Y` - Lock Y axis during operation
* `___ + Shift Z` - Lock Z axis during operation
* `B - Box select` - Left click to add, Wheel click to subtract
* `C - Circle select` - Left click to add, Wheel click to subtract
* `___ + Right Click` - Cancel operation - Right click is your panic button!
* `___ + Shift` - Switch operation to very fine control
* `___ + Ctrl` - Snap operation to even intervals
* `Ctrl + Z` - Undo - Also a panic button
* `Ctrl + Shift + Z` - Redo (common in Python programs)
* `.` > `Pivot Point Wheel` - Set centerpoint of operation

## Navigating Around <Badge text="important" type="tip"/>

* `Wheel Click` - Rotate the view
* `Shift + Wheel Click`- Pan the view
* `Scroll Wheel` - Zoom the 3D view
* `Shift + C` / `Home` - Center view on average location of all objects
* `Alt + Wheel Click` - Center view on mouse click location

## View Hotkeys

* `Numpad 0` - Camera view
* `Numpad 1` - Front view
* `Numpad 2` - Rotate view down
* `Numpad 3` - Right side view
* `Numpad 4` - Rotate view left
* `Numpad 5` - Toggle orthographic/perspective view
* `Numpad 6` - Rotate view right
* `Numpad 7` - Top view
* `Numpad 8` - Rotate view up
* `Numpad 9` / `Ctrl + Numpad ___` - Opposite of current view
* `/ (Forward Slash)` - Enter/Exit local view (hide all except active object)
* `Ctrl + Space` - Maximize/Restore current subwindow
* `Numpad .` - Center view on selection
