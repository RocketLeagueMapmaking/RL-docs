---
title: Extra Modes
---
# Extra Modes

Extra modes in Rocket League have a twist on the regular map. However, they also need a few tricks to add the mode (or only a part of it) to your custom map

## Hoops

The gamemode hoops has a few special changes to the normal soccar mode: the field is a bit smaller and the goal nets are replaced by hoops rims. [Mr Swaggles]() and [KegBob]() have made multiple hoops maps which you can use as a template or inspiration for your own hoops map.

### Classes

- ball archetype: `...`
- goals: `Goal_Hoops_TA`

### Assets

- Template map
- Hoops floor: [HoopsFloor_Clean](https://drive.google.com/file/d/1IgdR1_6jnBHw3ZB34DKHr6FUKlamkl2r/view?usp=sharing) is a fine-tuned version of the hoops floor, with the lines physically extruded. Because of that, you need to use a flat surface like [HoopsFloor_Coll](https://drive.google.com/file/d/1bCouWyxO8i17fiyH97S-yB1iFHJW8Fgy/view?usp=sharing) (put the `collision_mat` physics material and check `Hidden game` for this mesh) for the collision geometry.

## Dropshot

Collision in dropshot maps is achieved by a invisible object that blocks `Vehicle`s. Then each prefab tile will have collision for the ball. Set the `z` location of each tile to `-0.5`, then place the tiles in a grid with a distance of `700uu` apart from each other. Make sure that the correct team indexes are assigned to each tile based on their position in the map (`.` for in the orange (breaks by team blue) and `.` for in the blue half). If a tile is at the edge of the map, the mesh `...` can be used. After each tile is laid out, set the `Neighbors` for each tile with the surrounding tiles.

To make the tiles reset after a team has scored add the following kismet sequence to your map:

<!--- Kismet image ---> 

### Classes

- ball archetype: `...`
- tiles: `BreakOutActor_Platform_TA`
- floor: `BreakoutFloor_TA`

### Assets

- Template map
- Tile prefab

## Snowday

### Classes

- ball archetype: `...`

## Rumble

## Heatseeker

## Gridiron
