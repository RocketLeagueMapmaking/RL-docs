---
title: style
---
# Titles
## Header
Input:
```md
# A title
```
Output:
# A title
## Subtitle(s)
Input
```md
## A subtitle
### Another subtitle
```
Output:
## A subtitle
### Another subtitle

# Markdown

Input:
```md
~~strikethrough~~
*italic*
**bold**
**_bold italic_**
> quote
```
Ouput:

~~strikethrough~~
*italic*
**bold**
**_bold italic_**
> quote

# Extra's

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

# Links

Input:
```md
![alt text](/relative path)

[link](https://rocketleaguemapmaking.com) (or use relative paths)

[![alt text](https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
Output:








# Code

## Specific language

Input:


```javascript
let guide = ['page','page2']
console.log(guide)
```



Output:
```javascript
let guide = ['page','page2']
console.log(guide)
```

no language
```
no syntax highlights
// rest of text
```

line highlights

```javascript{2}
let guide = ['page','page2']
console.log(guide)
```