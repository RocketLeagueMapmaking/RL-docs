---
title: Boost
---
# UDK Basics

## List of terms

What a sad place the world would be without boost. Luckily, it can be added and thoroughly customized. As is tradition, I will start with a list of terms:

* Boost Pad - A glowing pad on the ground that gives you a little bit of boost
* Boost Pill - A hovering orb that gives you full boost (corner/mid boosts)
* VehiclePickup_Boost_TA - An actor which controls the logic of the boost pickup
* FXActor_Boost_TA - An actor which gives the visual appearance of the boost pickup
* StaticMeshActor - The solid object underneath the orange glow

## Boost Pill

![alt text](../.vuepress/public/images/image143.png)

*I wish it looked like this in game*

The image shown above is a `VehiclePickup_Boost_TA` on top of an `FXActor_Boost_TA` and a StaticMeshActor. This one is a Boost Pill, as you can tell from the long legs on the model.

**First, find `VehiclePickup_Boost_TA` in the Actors tab of the Content Browser. Drag it onto the map. Next, find `FXActor_Boost_TA` and drag it onto the map. Last, add the Static Mesh named `BoostPad_Large` from the Park_P package.**

**Pick the same X and Y location for all of these objects. Set the locations of the `FXActor_Boost_TA` and the Static Mesh to 0 in Z. Set the Z location of the `VehiclePickup_Boost_TA` to 72.**

### Edit properties

Next, there are some properties to set within the boost pill’s VehiclePickup_Boost_TA:

|Search for|Change the line(s)|To this value|
|------|------|------|
|“loca”|Z|72|
|“boo”|Boost Amount|9999|
|“boo”|Boost Type|BoostType_Pill|
|“res”|Respawn Delay|10|

![alt text](../.vuepress/public/images/image21.png)![alt text](../.vuepress/public/images/image48.png)
**Lastly, lock the properties window. Select the `FXActor_Boost_TA`, then hit the arrow.** This tells the VehiclePickup which boost it should animate (and then hide) when a player passes through its hitbox. And speaking of the hitbox, its radius is given by the Boost Type selection.

**The `FXActor` needs one crucial change:**
|Search for|Change the line(s)|To this value|
|------|------|------|
|“del”|No Delete|Checked|

To create a boost pad, follow the same steps. However, you will notice that there is no mesh called “Boostpad_Small.” Psyonix instead chose to use objects which are groupings of several small boost pads. **For now, just add the VehiclePickup_Boost_TA and the FXActor_Boost_TA**. Note that it is also lower than the pill pickup.


**Set these values for the boost pad’s VehiclePickup_Boost_TA:**

|Search for|Change the line(s)|To this value|
|“loca”|Z|63|
|“boo”|Boost Amount|0.119|
|“boo”|Boost Type|BoostType_Pad|
|“res”|Respawn Delay|4|

**Remember to assign the `FXActor_Boost_TA` to the `FXActor` slot as well.**


Luckily, boost pickups behave better when mirroring than spawnpoints do. To create the other boost pills, **select the stack of objects, copy and paste them, then edit their X and Y locations at the same time in the Properties window. Alternatively, copy and paste these objects, right click, and select Transform > Mirror X/Y Axis.**


Boost pickups on a standard Soccar map are at these locations. The ± symbol means that there is a pad at both +X and -X, or +Y and -Y, so placing the pickups listed below and mirroring them will make a complete set:

|Pickup Type|X|Y|
|------|------|------|
|Pill|±3072|±4096|
|Pill|±3584|0|
|Pad|±1792|±4184|
|Pad|±940|±3308|
|Pad|±1788|±2300|
|Pad|±2048|±1036|
|Pad|±3584|±2484|
|Pad|0|±4240|
|Pad|0|±2816|
|Pad|0|±1024|
|Pad|±1024|0|

**Whenever you copy and paste a set of boost objects, the new `VehiclePickup_Boost_TA` will not have the FXActor assigned automatically. You must go in and manually reassociate them.**

![alt text](../.vuepress/public/images/image142.png)

*A heart in a box (see it?)*

You may have noticed that the boost pads still have no static mesh under them. We can solve this in two ways: **Make our own in Blender, rip one out of the game, or use a library of Dummy Assets to borrow things from Rocket League itself.** All are absolutely worth learning about.