---
title: Texture resolution
---
# Blender Basics

:::warning NOTE
UDK will only accept perfectly square .TGA textures, and prefers that the resolution is a power of 2. 
:::
The following table contains some guidelines, with [the previous questions](texels) in mind:

|Resolution|Use Case |File Size|
|------|------|------|
|2x2|Placeholder|16 B|
|4x4|Placeholder|64 B|
|8x8|Very minor details, like screwheads|250 B|
|16x16|Minor world details, like camera flashes|~1 kB|
|32x32|Minor world details, like railings|~3 kB|
|64x64|Tiny background objects, like crowd eggs|~10 kB|
|128x128|Small background objects, like tree trunks|30-150 kB|
|256x256|Small background objects, like banners|100-500 kB|
|512x512|Large background objects, like rocks|0.3 - 1.5 MB|
|1024x1024|Gameplay surfaces, like walls|1-5 MB|
|2048x2048|Gameplay surfaces, like the ground|3-15 MB|
|4096x4096|Gameplay surfaces but as a sparse image, like trim|10-50 MB|
|8192x8192|Many/all gameplay surfaces combined into one image|30-150 MB|
|16384x16384|This and larger should not be used|100-500 MB|
