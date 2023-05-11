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
- firstColor: the base color of an item
- secondColor: the child color of an item

By default only the name is being used for displaying the tree item.
You can return a string containing html with a function on each item with two options:

1. Define the callback function directly

   ```js
   /**
    * @param {{ name: string, other: any }} item The current item
    * @param {boolean} isFolder Whether the item is a folder with children
    */
   function createItem (item, isFolder) {
       return `<p>${item.other.displayName}</p>`
   }
   ```

   You can then pass this function as property the `createItem` prop.

2. You define the callback on `formatters` with a new key and the callback function on the map. Use cases are for when the component is in markdown files. You then pass the key with the `createItemKey` property to the component.

An example object:

```json
{
  "name": "string",
  "c": [
    {
      "name": "string",
      "other": "any"
    },
    {
      "name": "string",
      "other": "any",
      "c": [
        {
          // ...
        }
      ]
    }
  ]
}
```

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

::: warning Title
This is a warning with a custom title
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
