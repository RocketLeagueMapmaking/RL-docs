---
title: Exploring  
---
# UDK Advanced

## How Kismet Works
Kismet offers a hodge-podge of nodes which are essentially split into five groups. They will be explained in this order since you will need to understand all previous types going down the list:

|Type|Used for...|
|------|------|
|Variable|Storing information|
|Event|Triggering code to run|
|Action|Making things happen in the map|
|Condition|Making decisions based on information|
|Sequence|Packaging nodes into reusable groups|


These categories are visible (in a different order) in the right click menu in the Kismet Editor. Alongside these options is Matinee, which will be discussed in the next section. Each Kismet node represents a block of code, with inputs and outputs. Gameplay objects and logic can be controlled by connecting different nodes in different arrangements.


While there are severe limitations, there are already countless examples in the community of [very impressive things made with Kismet](https://github.com/RocketLeagueMapmaking/Kismet). 
:::tip
If you wish to completely abuse the game for things like Chaos Rumble or (the original version of) Curveball, you should probably use Bakkesmod. Kismet allows for a lot of control, but certain things are simply not accessible or would be prohibitively complex to do with nodes and connector lines.
:::

### Variables

|Type|Used for...|
|------|------|
|Bool|True/False data, like a door being open or shut|
|External Variable|Named variables of any type from an external sequence ([see Sequences](kismet.html#sequences))|
|Float|Numbers with decimal precision, like speed or Z location|
|Int|Numbers with integer precision, like number of players|
|Matinee Data|Animation data (see [Matinee](../guide/matinee))|
|Named Variable|Named variables of any type|
|Object|Objects in the map, like the ball|
|Player|Players themselves|
|String|Text data, like player names|
|Vector|Sets of (typically) 3 numbers, like 3D location|

### Events
I encourage you to test out any Events which sound interesting. Here are some of the most frequently and generally useful:

|Event|Used for...|
|------|------|
|Level Loaded|Running code as soon as the map is loaded|
|Player > Player Spawned|Running code when a player spawns or respawns|
|TAGame > Round Start|Running code when gameplay starts or resumes|
|TriggerVolume Touch|Running code when the player or ball enters a region (more on this [here](trigger))|

### Actions
Some Actions are basically Events or Conditions, but in general these will make up the majority of the Kismet code. Again, some of the most useful and frequently used nodes are:

|Action|Used for...|
|------|------|
|Actor > Set Actor Location|Moving the ball or player|
|Actor > Get Location and Rotation|Getting the location and rotation of an actor|
|Actor > Teleport|Moving the ball or player, preserving velocity|
|Math >|Manipulating numeric variables|
|TAGame >|Manipulating RL-specific things|

Many of the nodes within `TAGame` may not work as advertised. Don’t be afraid to think outside the box and come up with a weird workaround. Modding itself is a weird workaround.

### Conditions
In general, the only conditions you will need are the variable Comparison nodes. These allow you to trigger logic only when a variable has a certain value.

### Sequences
There are a few key nodes to keep in mind when working with Sequences, as they effectively serve as the inputs and ouputs:

|Node|Used for...|
|------|------|
|Action > Event > Activate Remote Event|Triggering a Remote Event|
|Event > Remote Event|Activating a Sequence when that event is triggered|


