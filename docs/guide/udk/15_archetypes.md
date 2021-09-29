---
title: Archetypes
---
# UDK Archetypes

An archetype is defined as **a recurrent symbol or motif in literature, art, or mythology.** For example, UDK is an archetypal evil computer program, with its frequent crashes, unintuitive user interface, and inconsistent outputs.

Jokes aside, Archetypes in UDK are snapshots of configured objects. The [UDK documentation for Archetypes will provide a more thorough explanation if you need it](https://docs.unrealengine.com/udk/Three/UsingArchetypes.html). However, looking through the Dummy Assets, that explanation will quickly lose meaning because *everything is an Archetype.* This is mostly a quirk of how the Dummy Assets are generated, but occasionally is spot-on and very helpful to our efforts.

## Creating Archetypes

To put it bluntly, few mapmakers use Archetypes at all because we do not share assets between custom maps in the same ways the game shares assets between its maps. However, you may find it useful to create a light with a certain color and brightness, or to create StaticMeshActors with certain properties already set. **Right click an object in the 3D Viewer, or right click a class in the Actor Classes tab of the Content Browser and select Create Archetype.** Beware that you may get yourself into hot water when it comes to their default properties, however.

## Default Properties

In general, dummy assets labeled Archetype only appear that way because the process of generating Dummy Assets does not extract mesh data, texture data, material nodes, or much of anything aside from a name. As you will come to learn the more you work with UDK, one key concept is that **settings in a Properties window which are not in bold will be overridden by the default settings from Rocket League.**

Let me repeat that:

**Settings in a Properties window which are not in bold will be overridden by the default settings from that object's Archetype from Rocket League.**

For example, every StaticMeshActor will start with "Accepts Dynamic Decals" unchecked and not in bold. Checking the box will make the text appear in bold. "Accepts Static Decals" is checked but not in bold.

![alt text](/images/UDK/advanced/archetypes_defaultproperties.png "I accept")

When this StaticMeshActor is loaded into the level, **any properties in bold will be applied.** In this case, the ball indicator circle will now appear on this object when the ball is above it. All other properties are inherited from the base **Object Archetype for all StaticMeshActors** which is packaged deep inside Rocket League.

As a hypothetical, imagine that we want to Accept Static Decals. The box is checked, so it should work, right? Because the **text** is not in bold, this property will not be applied to this object and will instead be inherited from the Archetype. If the Archetype is set to reject Static Decals, this object will too. Unchecking the box will make the text go bold, but now we are specifically rejecting Static Decals. **If a line is not in bold and has a checked box, you simply might not be able to change it.** Recall the un-collide-with-able floor prank, which featured a static mesh with properties beyond our control. Alternatively, you may have found a bug in the Dummy Classes.

## Configurable Archetypes

Technically what we are doing when we add a dummy asset mesh to the level is placing an instance of the archetype for that mesh, which then allows us to **change** properties such as the material on it. Since Psyonix is lazy, they did not set up any of these archetypes with materials already assigned, so it is left up to us to "change" them from the default of no materials.

There are, however, a number of very useful archetypes which offer properties that can be configured by us. Namely, `VehiclePickup_Boost_TA'Park_P.Archetypes.VehiclePickup.VehiclePickup_BoostPad'`. This is a preconfigured version of a `VehiclePickup_Boost_TA` class which is stored inside Park_P (Beckwith Park). **Place one into the map and open its Properties window.**

![alt text](/images/UDK/advanced/archetypes_vehiclepickup.png "Sensible Nonsense")

This "Unknown Type" boost pickup should give you 0 boost and respawn instantly, right? Notice that those lines are not in bold. **These properties will be inherited from the preconfigured Boost Pad Archetype within Rocket League.** In other words, you don't need to change anything to have a perfectly configured boost pad. But, you are **able** to change the amount of boost given and the respawn time because Archetypes are **Configurable.** The section on [Boost](19_boost.md) will explain in much greater detail.

Go forth and explore the offerings of the Dummy Assets with newfound confidence in what you are looking at! Don't forget to share any neat findings.