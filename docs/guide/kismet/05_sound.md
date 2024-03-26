---
title: Sound
---
# Kismet Sound

:::tip Decrypting sounds
Check out the [sound decryption](../decryption/sound.md) page for more information on playing sounds outside of the game
:::

## In-Game Sounds <Badge text="not finished" type="warning"/>

Rocket League uses Wwise audio tracks to play sounds in the game.
To play an in-game sound in your map, you will need to use the `AkAudio` Dummy classes.

First, find a sound cue you want play in the Dummy assets (in the content browser).
Then go into kismet and add an `AkLoadBank` node to load the bank of the cue.
Finally you can add an `AkPlaySound` node with the sound cue to play the music from the cue.

For examples of implementations you can look in the workshop for the following maps:

- Beat saber

## Custom sound

At the moment of writing, it is not possible to play custom sound cues / SFX in Rocket League via UDK.
Be sure to follow the announcement channel in Discord for any updates.
