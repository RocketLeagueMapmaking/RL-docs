---
title: style
sidebar: auto
---
# Assets guide

On this page you will find some tips and tricks related to styling a page. Other useful pages are:

- [Markdown-it examples](https://markdown-it.github.io/) (some examples are in [#markdown](#markdown))
- [Vuepress markdown documentation](https://vuepress.vuejs.org/guide/markdown.html)
- [Source code of this page](https://github.com/RocketLeagueMapmaking/RL-docs/blob/master/docs/assets.md)

## RLMM Assets

### Tree

A recursive tree structure can be used to display a nested object with the `<TreeComponent />`.

The following properties are exposed:

- treeData: the json object to use for the tree. Can be loaded with `require('../path/.vuepress/public/data/file.json')`.
- url: the url that can be fetched to get the same data as `treeData`
- openAllItems: open all levels at loading the page

#### Simple tree

By default only the name is being used for displaying the tree item.

```md
<TreeComponent
    :treeData="{
        name: 'test',
        children: [{ name: 'child', children: [{ name: 'more' }] }, { name: 'child 2'}]
    }"
/>
```

<TreeComponent
    :treeData="{
        name: 'test',
        children: [{ name: 'child', children: [{ name: 'more' }] }, { name: 'child 2'}]
    }"
/>

#### Advanced options

For more options add a configuration in `configs/components/tree.js` for load options, render component, etc. to load with the `configKey` property. See the current configuration as example.

A default slot can be used to access the version of the tree:

<TreeComponent
    :treeData="{
        name: 'test 2',
        version: '0',
        children: [{ name: 'child', children: []}]
    }"
    v-slot="slotProps"
>

#### version <Badge :text="slotProps.version" />

</TreeComponent>

## Vuepress assets

```md
::: info
This is an info block
:::

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

::: warning Title
This is a warning with a custom title
:::
````

::: info
This is an info block
:::

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

::: warning Title
This is a warning with a custom title
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
Images :
![alt text](https://rocketleague.com/image.png) // absolute path
![alt text](/images/) // relative path, points towards the /docs/.vuepress/public/images/ folder

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

```txt
no syntax highlights
// rest of text
```

With lines highlighted:

```javascript{1}
let guide = ['page','page2','page3']
console.log(guide)
```
