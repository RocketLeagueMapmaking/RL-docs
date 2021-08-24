---
title: Multiplayer
---
# Multiplayer 

## Testing Multiplayer

Almost every mapmaker has run facefirst into major issues when testing a map meant for multiple players. For better testing, if possible, you should **not** be the host, as many bugs only occur for other players.

To test it in multiplayer you can either:

- Publish your map to the steam workshop with `"visibility"` set to 1 (only friends) or 2 (only you)
- Share your map file directly with the people you want to test it and use a map swapper to play the map

## Multiplayer Limitations <Badge text="not finished" type="warning"/>

- There's a limit on your map size.
- Kismet data is not shared across clients without some tricks. More information about how to make sure your Kismet works in multiplayer can be found in [the Advanced Kismet section.](../kismet/06_advanced)
