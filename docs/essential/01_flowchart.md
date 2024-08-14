---
title: Introduction
---

# The Big Picture

It can be hard to know where to start, so here is a flowchart to help you pick the right path. **Most of this guide will build on itself, so if you are new to this you should not skip too much.**

:::tip
**Look for the <Badge text="important" type="tip"/> badge throughout the guide for hot tips you won’t want to miss!**
:::

<Actions
    :states="['setup', 'types', 'advanced', 'finish']"
    style="height: 450px;"
>

<!-- Begin screen -->
<template #intro="{ goNext }">

# How do I start?

Don't know where to start? This flowchart should help.\
Each answer contains useful links and relevant information.

<VPButton text="I want to make a custom map" @click="goNext();" />
</template>

<!-- Setup questions -->
<template #state-setup="{ next, reset, index }">
<VPButton text="Yes" @click="next(2);" v-if="index % 2 === 0" />
<VPButton text="Done" @click="next(1);" v-else />

<VPButton text="No" theme="alt" @click="next(1);" v-if="index % 2 === 0" />
<VPButton text="Back" theme="alt" style="visibility: hidden;"/>
<VPButton text="Reset" theme="alt" @click="reset();" />
</template>

<!-- What type of map? questions -->
<template #state-types="{ next, back, reset }">
<VPButton text="back" @click="back(-1, true);" />
<VPButton text="next" @click="next(1, true);" />
<VPButton text="reset" theme="alt" @click="reset();" />
</template>

<!-- Advanced questions -->
<template #state-advanced="{ next, reset, index }">
<VPButton text="Yes" @click="next(1);" v-if="index % 2 === 0" />
<VPButton text="Done" @click="next(1);" v-else />

<VPButton text="No" theme="alt" @click="next(2);" v-if="index % 2 === 0" />
<VPButton text="Back" theme="alt" style="visibility: hidden;"/>
<VPButton text="Reset" theme="alt" @click="reset();" />
</template>

<!-- End of the flowchart screen -->
<template #state-finish="{ reset, goBack }">
<div style="display: block;">

### You are at the end

<VPButton text="Go back" @click="goBack(-2)" />
<VPButton text="Begin again" theme="alt" @click="reset();" />
</div>
</template>

<!-- Include all the question templates -->
<!--@include: ./flowchart_questions/setup.md -->
<!--@include: ./flowchart_questions/types.md -->
<!--@include: ./flowchart_questions/advanced.md -->

</Actions>

:::details Static Flowchart

### Getting Ready <Badge text="important" type="tip"/>

![alt text](/images/udk/essential/image66.png "This will have clickable links someday")

### Getting Down to Business <Badge text="important" type="tip"/>

![alt text](/images/udk/essential/image73.png "This will also have clickable links someday")
:::

## Getting Set Up <Badge text="important" type="tip"/>

Soon we will go over the tools and assets you need to get things done. But first, a few brief notes on common points of confusion.

<!-- markdownlint-disable-file MD001 -->