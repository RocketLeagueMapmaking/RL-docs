---
title: style
---
# Assets guide

On this page you can find some tips and tricks related to styling a page. Vuepress uses [markdown-it](https://markdown-it.github.io/) and has also [documentation](https://vuepress.vuejs.org/guide/markdown.html#header-anchors) on how to use markdown. You can view the raw source of this page [here](https://github.com/RocketLeagueMapmaking/RL-docs/blob/master/docs/assets.md)

## Text
Input:
```md
# Page title

## Subtitle
#### Small title
```

Input:
```md
~~strikethrough~~

*italic*

**bold**

**_bold italic_**

> quote
```

## Vuepress assets

Input:
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
---
````
Output:
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

## Images and links

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

## Code blocks

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