---
title: Quick Testing
---
# Quick Testing

Tips for quick testing:

<steps>
<template #step-1>

Overwrite `Labs_Utopia_P.upk` (donut map) and test in Training

</template>
<template #step-2>

You never need to close Rocket League... just reload Training

</template>
<template #step-3>

Set Rocket League to Borderless mode to switch focus easier

</template>
<template #step-4>

Use this .bat script to instantly overwrite `Labs_Utopia_P.upk`:

```sh
@echo off
echo "%~1"
echo F|xcopy /y "%~1" "{CookedPCConsole}\Labs_Utopia_P.upk"
```

{CookedPCConsole} is the folder containing all of Rocket League’s assets, within a folder such as:
C:\Program Files (x86)\Steam\steamapps\common\rocketleague\TAGame\CookedPCConsole

The easiest way to find the Rocket League install location is to right click it in Steam, click Properties > LOCAL FILES (tab on the top) > BROWSE LOCAL FILES…

Put a copy of this .bat file next to each map project:

![](/images/cheatsheets/quicktesting/image1.png)

To use, simply drag the .udk file onto it, then start Training in Rocket League.

</template>
<template #step-5>

Keep the project file and .bat script in view to the side of UDK

![](/images/cheatsheets/quicktesting/image2.png)

</template>
</steps>

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/18T5xuaq1w0Hd8fHmCPSFjJoG-QUG5pukLdjaB7Tvl6k/edit?usp=sharing)
</ActionBlock>
