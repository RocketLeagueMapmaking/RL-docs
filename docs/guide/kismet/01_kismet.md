---
title: Kismet
---
# Kismet Overview

Kismet is a node-based programming system that presents a “cleaner” and “easier to use” interface than you would get writing your own code. Logical blocks take the place of code classes and functions, and lines on the page indicate data and program flow.

Kismet, much like the [CSG tools](../udk/csg.md), is not meant to be used to program a whole game. It is meant more as a tool for cheap and dirty testing, but in this case it is the only option we appear to have.

## Key Terms

* `Node` - A Kismet code snippet, represented by a shape with labels on it
* `Sequence` - A set of Kismet nodes packaged to appear as a single node
* `Link` - An input or output of a Kismet Node
* `Connector/Connection` - A line connecting two Kismet nodes, indicating logic or data flow
* `Object` - A Kismet reference to something in the map

The terms Link/Connector/Connection are used somewhat interchangeably, but they are closely related.

## The Hottest Hotkeys

* `Left click` - Pan around the Editor
* `Right click` - Add nodes to the Editor
* `Scroll wheel` - Zoom view
* `Alt + Left click` - Destroy connector between nodes
* `Ctrl + Left click` - Select multiple nodes
* `Ctrl + Left click + Drag` - Move node(s)
* `Ctrl + Alt + Left click + Drag` - Box select nodes
* `A` - Zoom to fit selection
* `Ctrl+A A` - Zoom to all nodes (if you’re ever hopelessly lost in the void)
* `C (with node(s) selected)` - Add comment block

:::tip More Hotkeys
It is possible to [add kismet nodes](https://docs.unrealengine.com/udk/Three/KismetUserGuide.html#Hotkeys) with your keyboard, and you can also [change the hotkeys](../misc/custom_udk.md#kismet) as you prefer!
:::

## Kismet Editor Window <Badge text="important" type="tip"/>

![alt text](/images/kismet/guide/image18.png "Nice and simple")

1 - Toolbar - Various useful-ish functions, all in one place:

* ![alt text](/images/kismet/guide/image87.png) Go back to the previous sequence
* ![alt text](/images/kismet/guide/image242.png) Go forward to the returned-from sequence
* ![alt text](/images/kismet/guide/image154.png) Go up one sequence level
* ![alt text](/images/kismet/guide/image62.png) Rename the current sequence
* ![alt text](/images/kismet/guide/image188.png) Zoom to selected (`A`)
* ![alt text](/images/kismet/guide/image208.png) Hide node’s unused connectors (also in a node’s right click menu)
* ![alt text](/images/kismet/guide/image19.png) Reveal all of node’s connectors (also in a node’s right click menu)
* ![alt text](/images/kismet/guide/image17.png) Search for nodes to place
* ![alt text](/images/kismet/guide/image36.png) Search for nodes already in editor
* ![alt text](/images/kismet/guide/image182.png) Update the list of nodes
* ![alt text](/images/kismet/guide/image249.png) Open a second Kismet window

2 - Node Editor - Place, move, and interconnect nodes

3 - Properties - Edit internal variables and functionality of nodes

4 - Sequences - Jump between sequences

## How Kismet Works

Kismet offers a hodge-podge of nodes which are essentially split into five groups. They will be explained in this order since you will need to understand all previous types going down the list:

| Type      | Used for...                           |
| --------- | ------------------------------------- |
| Variable  | Storing information                   |
| Event     | Triggering code to run                |
| Action    | Making things happen in the map       |
| Condition | Making decisions based on information |
| Sequence  | Packaging nodes into reusable groups  |

These categories are visible (in a different order) in the right click menu in the Kismet Editor. Alongside these options is Matinee, which will be discussed in the next section. Each Kismet node represents a block of code, with inputs and outputs. Gameplay objects and logic can be controlled by connecting different nodes in different arrangements.

While there are severe limitations, there are already countless examples in the community of [very impressive things made with Kismet](https://github.com/RocketLeagueMapmaking/Kismet).

:::tip
If you wish to completely abuse the game for things like Chaos Rumble or (the original version of) Curveball, you should probably use Bakkesmod. Kismet allows for a lot of control, but certain things are simply not accessible or would be prohibitively complex to do with nodes and connector lines.
:::

### Variables

| Type              | Used for...                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| Bool              | True/False data, like a door being open or shut                                     |
| External Variable | Named variables of any type from an external sequence ([see Sequences](#sequences)) |
| Float             | Numbers with decimal precision, like speed or Z location                            |
| Int               | Numbers with integer precision, like number of players                              |
| Matinee Data      | Animation data (see [Matinee](../udk/matinee.md))                                |
| Named Variable    | [Named variables][udk-docs:named-vars] of any type                                  |
| Object            | Objects in the map, like the ball                                                   |
| Player            | Players themselves                                                                  |
| String            | Text data, like player names                                                        |
| Vector            | Sets of (typically) 3 numbers, like 3D location                                     |

### Events

I encourage you to test out any Events which sound interesting. Here are some of the most frequently and generally useful:

| Event                   | Used for...                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Level Loaded            | Running code as soon as the map is loaded                                                 |
| Player > Player Spawned | Running code when a player spawns or respawns                                             |
| TAGame > Round Start    | Running code when gameplay starts or resumes                                              |
| TriggerVolume Touch     | Running code when the player or ball enters a region (more on this [here](trigger.md)) |

### Actions

Some Actions are basically Events or Conditions, but in general these will make up the majority of the Kismet code. Again, some of the most useful and frequently used nodes are:

| Action                            | Used for...                                    |
| --------------------------------- | ---------------------------------------------- |
| Actor > Set Actor Location        | Moving the ball or player                      |
| Actor > Get Location and Rotation | Getting the location and rotation of an actor  |
| Actor > Teleport                  | Moving the ball or player, preserving velocity |
| Math >                            | Manipulating numeric variables                 |
| TAGame >                          | Manipulating RL-specific things                |

Many of the nodes within `TAGame` may not work as advertised. Don’t be afraid to think outside the box and come up with a weird workaround. Modding itself is a weird workaround.

### Conditions

In general, the only conditions you will need are the variable Comparison nodes. These allow you to trigger logic only when a variable has a certain value.

### Sequences

There are a few key nodes to keep in mind when working with Sequences, as they effectively serve as the inputs and ouputs:

| Node                                   | Used for...                                        |
| -------------------------------------- | -------------------------------------------------- |
| Action > Event > Activate Remote Event | Triggering a Remote Event (asynchronous)           |
| Event > Remote Event                   | Activating a Sequence when that event is triggered |

[udk-docs:named-vars]: https://docs.unrealengine.com/udk/Three/KismetUserGuide.html#Named%20Variables
