---
title: Texture Resolution
---
# Texture Resolution

Now that you are familiar with the way that UV maps work, it’s important to discuss the textures themselves.

If you have played older 3D games (c. 2000), the concept of a texel will instantly be familiar. Minecraft is another fine example, but that style is done with more intentionality.

![Screenshot of the game Banjo-Kazooie on N64](/images/blender/basics/banjo_kazooie_screenshot.png "Old school cool")

---
![Screenshot of the game Star citizen](/images/blender/basics/star_citizen_screenshot.png "New school cool")

A texel is the screen space covered by one pixel of a texture when that texture is applied to a 3D mesh. Sometimes the definition is slightly looser, referring to regions of the texture and how they map to what is seen by the player.

In older 3D games, due to hardware limitations, textures were very low resolution, resulting in texels which are very large on the screen. Game engines typically apply some kind of filtering to these textures to avoid excessive pixelation (again, the style of Minecraft being a notable exception), and so the result is often a muddy, blurry texture (e.g. Banjo-Kazooie, top). Modern games (e.g. Star Citizen, bottom) have much, much higher resolution textures and require much, much more capable hardware.

**In an ideal world, one pixel of a texture on any object would always map to one pixel on the player’s screen.** This gets problematic when considering 1920x1920 textures on every single object, so there are a few considerations that can be summarized as follows:

* Will this be played on high-end or low-end hardware?
* Is this object going to be large or small in the world?
* Will this object be seen up close by the player?
* Does this object need text or fine details on it?
* Will this object be moving or static?

:::warning NOTE
UDK will only accept perfectly square .TGA textures, and prefers that the resolution is a power of 2 for reasons discussed below.
:::
The following table contains some guidelines, with the previous questions in mind:

| Resolution  | Use Case                                           | File Size    |
| ----------- | -------------------------------------------------- | ------------ |
| 2x2         | Placeholder                                        | 16 B         |
| 4x4         | Placeholder                                        | 64 B         |
| 8x8         | Very minor details, like screwheads                | 250 B        |
| 16x16       | Minor world details, like camera flashes           | ~1 kB        |
| 32x32       | Minor world details, like railings                 | ~3 kB        |
| 64x64       | Tiny background objects, like crowd eggs           | ~10 kB       |
| 128x128     | Small background objects, like tree trunks         | 30-150 kB    |
| 256x256     | Small background objects, like banners             | 100-500 kB   |
| 512x512     | Large background objects, like rocks               | 0.3 - 1.5 MB |
| 1024x1024   | Gameplay surfaces, like walls                      | 1-5 MB       |
| 2048x2048   | Gameplay surfaces, like the ground                 | 3-15 MB      |
| 4096x4096   | Gameplay surfaces but as a sparse image, like trim | 10-50 MB     |
| 8192x8192   | Many/all gameplay surfaces combined into one image | 30-150 MB    |
| 16384x16384 | This and larger should not be used                 | 100-500 MB   |
