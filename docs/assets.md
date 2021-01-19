---
title: style
sidebar: auto
---
# Assets guide

On this page you can find some tips and tricks related to styling a page. Other usefull pages are:
- [Markdown-it examples](https://markdown-it.github.io/) (some examples are in [#markdown](assets.html#markdown))
- [Vuepress markdown documentation](https://vuepress.vuejs.org/guide/markdown.html) 
- [Source code of this page](https://github.com/RocketLeagueMapmaking/RL-docs/blob/master/docs/assets.md)

## RLMM Assets

### Kismet nodes
```md
<KismetNode title="Kismet Node" type="Not documented" Folder='TAGame' Image="add_game_ball"
description="Add a Kismet node to the documentation" 
:InputLinks="['Add','Remove']"
:OutputLinks="['Added','Removed']"
:VariableLinks="['ball','Targets']"
:Notes="['This node is synchronous','This nodes requires x or y']"
/>
```
<KismetNode title="Kismet Node" type="Not documented" Folder='TAGame' Image="add_game_ball"
description="Add a Kismet node to the documentation" 
:InputLinks="['Add','Remove']"
:OutputLinks="['Added','Removed']"
:VariableLinks="['ball','Targets']"
:Notes="['This node is synchronous','This nodes requires x or y']"
/>

*General properties:*
* `title`: Name of the kismet node used in UDK 
    * Type: `String`
    * Required: `true`
* `description`: Summary of what can be done with the kismet node 
    * Type: `String`
    * Required: `false`
* `type`: State of the kismet node
    * Options: `Not documented`, `Not working`, `New`, `ACv3`, `ACv2`, `ACv1`
    * Type: `String`
    * Required: `true`
* `Image`: An image of the kismet node. **The image (.png) must be placed in `docs/.vuepress/public/images/kismet/`**
    * Type: `String` - image name
    * Required: `false`
* `Folder`: The folder of the kismet node in UDK
    * Options: `TAGame`, `TAGame_decrypted`
    * Type: `String`
    * Required: `false`
* `:Notes`: Tips and remarks about the kismet node
    * Type: `Array`
    * Required: `false`

:::warning Semicolon
To register an array as a property of a kismet node (or any other component) `:` or `v-bind:` must be placed before the name of the array. 
:::

*Values:*
* `:InputLinks`: All items on the left side of a kismet node (except for `in`)
    * Type: `Array`
    * Required: `false`
* `:OutputLinks`: All items on the right side of a kismet node (except for `out`)
    * Type: `Array`
    * Required: `false`
* `:InputLinks`: All variables of a kismet node
    * Type: `Array`
    * Required: `false`

## Vuepress assets

```md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
````

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::
---
## Markdown

### Text

```md
# Page title

## Subtitle
#### Small title
```

```md
~~strikethrough~~

*italic*

**bold**

**_bold italic_**

> quote

Line:
---

```

### Images and links

```md
Images:
![alt text](/relative path)

Images with text:
![alt text](/image.png "Hover over the image to see me")

Links:
[link](https://rocketleague.com)
[Another link](/essential)

Youtube videos:
[![alt text](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

### Code blocks

With a specific language:

```javascript
let guide = ['page','page2']
console.log(guide)
```

With no language specified:
```
no syntax highlights
// rest of text
```
With lines highlighted:

```javascript{1}
let guide = ['page','page2','page3']
console.log(guide)
```