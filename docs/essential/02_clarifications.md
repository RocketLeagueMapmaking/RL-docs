---
title: Clarifications
tags:
  - UDK 2013
  - UDK 2015
  - Unreal engine
---
# Clarifications

## Notes on UDK 2013 vs 2015

One frequently asked question is “why do we have to use UDK?” Rocket League was originally built with Unreal Engine 3 in UDK 2013, so that version had the fewest compatibility issues. In the years since then, improvements have been made and it’s no longer an issue to use UDK 2015.

**Maps made with UDK 2015 cannot be opened in UDK 2013,** but the reverse is not a problem at all. If everyone makes the switch to UDK 2015, then we will have world peace.

## Unreal Engine 4

UDK is for Unreal Engine 3. Unreal Engine 4 was first released in 2014, and it’s almost a completely new engine. **Unreal Engine 4 cannot be used for Rocket League Mapmaking.**

## File Extensions

<CaptionImageComponent src=/images/UDK/essential/clarification_extensions.png caption="Don't not not hide"/>

I highly recommend disabling the option to “Hide extensions for known file types” on Windows so that you actually know what files you are dealing with. **Search for File Explorer Options in the Start Menu. Go to the View tab. Uncheck “Hide extensions for known file types.”**

Or, always keep the “Type” column visible in your file explorer windows. You will have to frequently make changes to file extensions during this process, and it’s just a good thing to have enabled in general.

## Editing Rocket League Maps

When Psyonix publishes a map, they perform an encryption step to protect the assets their artists worked hard to create. **This means that it is not possible to directly open an existing Rocket League map.** Decrypting most of these assets is possible, but location data is not preserved, meaning that you have to rebuild the map from its components.

:::danger EULA
**Rocket League mapmaking techniques cannot be used to give you a competitive advantage in the game, and any attempts at that are directly against the [EULA](../more/psyonix.md).** Please play nice and play by the rules, and you have nothing to fear.
:::
