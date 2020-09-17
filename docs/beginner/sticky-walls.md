---
title: Sticky Walls
next: ../guide/
---
# Sticky Walls ™ <Badge text="important" type="tip"/>

**There is one more bit of very important setup.** Now that UDK is open and we’re in the Content Browser, we need to create a package to store some objects that will be useful across all projects. In the bottom left of the Content Browser tab, **click New to make a new package.** We’re going to keep a few assets in here that we copy into any future project. Call it something generic like Generic, General, RLMods, MyPackage, or whatever you think is best.

![alt text](../.vuepress/public/images/image34.png)

*Time to get sticky… together*

In the popup window, **change Package to whatever name you want.** Grouping is an optional field, but it is essentially a subfolder. You can make further subfolders by adding periods within the grouping line, like “Materials.Physical” if you wish.

For name, write `StickyWalls` or `Sticky` or anything that makes sense to you. This is a material property that we are going to assign to all driveable surfaces in the game so that the car behaves as expected while on them.


**Lastly, under Factory, select `PhysicalMaterial`.** This is the type of object we are creating.
After you click OK, you will see a new PhysicalMaterial within the Content Browser

![alt text](../.vuepress/public/images/image34.png)

*Just like real life sticky walls*

**If the Properties window doesn’t open by default, double click StickyWalls. Scroll to the bottom and click the small blue arrow on the right. Inside there, assuming the UDK setup went correctly, there is an option for `PhysicalMaterialProperty_TA`. Select this, and more options appear below. Check “Sticky Wheels” and close the properties window.**

:::tip
Whenever you start a new map, you will need to copy the StickyWalls® material into the new package. More on that later.
:::

## Completed

Congratulations, you have completed the starters guide! You are now ready to make maps. You can always come back here if you forgot something.