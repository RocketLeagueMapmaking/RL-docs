---
title: Settings
editLink: false
aside: false
---

# Guide settings

## Display

<PreferenceSetting :isAppearance="true" storeKey="">

Use dark theme
</PreferenceSetting>

<PreferenceSetting storeKey="use-custom-image-captions">

Show image titles under images
</PreferenceSetting>

<PreferenceSetting storeKey="rlmm-home-hidesteam">

{{ homePage.frontmatter.hero.steam.enabled
    ? 'Hide Steam maps on home page'
    : 'Show Steam maps on home page'
}}
</PreferenceSetting>

## Installation

<PreferenceSetting
    storeKey="rlmm-platform"
    defaultValue="Steam"
    :options="['Steam', 'Epic Games']"
    type="select"
>

Rocket League launcher
</PreferenceSetting>

<PreferenceSetting
    storeKey="rlmm-urls-steam"
    :defaultValue="false"
    type="switch"
>

Open Steam urls in the Windows app
</PreferenceSetting>

### File paths

Change the file paths in the guide to your own setup configuration.

<PreferenceSetting storeKey="rlmm-path-udk" defaultValue="C:\UDK\RLMM\" type="input">

UDK Installation folder
</PreferenceSetting>

<PreferenceSetting storeKey="rlmm-path-rl" defaultValue="C:\Games\SteamApps\common\rocketleague\" type="input">

Rocket League installation folder
</PreferenceSetting>

<script setup>
import { __pageData as homePage } from './index.md'
</script>
