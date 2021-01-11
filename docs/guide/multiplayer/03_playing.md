---
title: Playing Maps

---
# How to Play Multiplayer Maps

With the update of Bakkesmod for Epic games, it's now possible to play workshop maps together. 

## Bakkesmod 

This part of the guide is for people using Steam **and** Epic games. 

### Multiplayer

The easiest way to host and play custom maps with others is to use the Rocket Plugin. This is a Bakkesmod plugin, which is a wonderful program that everyone should use. It opens a whole universe of possibilities for Rocket League.

1. Everyone needs to download the following programs and files:

* [Bakkesmod](https://www.bakkesmod.com/)
* [Rocket Plugin](https://bakkesplugins.com/plugins/view/26)
* [Logmein Hamachi](https://vpn.net) or [radmin](http://www.radmin-vpn.com/)
* Subscribe to the [workshop maps](https://steamcommunity.com/workshop/browse/?appid=252950) you're going to play (if you use the Epic Games client place the maps you downloaded in a `mods` folder in the CookedPCconsole folder)

2. Create a new network in the vpn or join using the name and password of the network

3. Start Rocket League and open rocket plugin with `home` or open bakkesmod by pressing `F2`, go to plugins and click on Rocket Plugin

4. Create and join a match
:::details For the host 
The host uses the left side of Rocket Plugin:
- Arena: 
    - `Workshop maps`: checked
    - Dropdown list: select the workshop map
- Change mutators and team settings (optional)
- Advanced settings:
    - `Password` (optional): set a password 

Click host
:::
:::details For the players 
Players use the right side of Rocket Plugin:
- IP adress: IPv4 adress in the vpn or given by the host
- Port: 7777 or given by the host
- `Password` (optional): given by the host
- `Joining a custom map`: checked

Click join
:::

:::warning FAQ and Troubleshooting
- Check if you can ping each other in the vpn 
- If you get an `password doesn't match` error create a new local match and delete the password. Rocket plugin uses the password from your latest private match
- Using the vpn doesn't show your real IP address
- If you want to play some of Lethamyr's maps from his website, you have to use a map swapper
- If you are missing textures you have to download the [Worskhop textures](https://drive.google.com/drive/folders/1fvMMw0jGkkGr0fZpme9tWlwD3hC5LX0W) to be able to see those. Extract this to the `{CookedPCConsole}` folder
- Check the [bakkesmod subreddit](https://www.reddit.com/r/bakkesmod) or the plugin's support page (or discord server) 
:::

:::tip RLLobby
You can also use [RLLobby](https://bakkesplugins.com/plugins/view/82) as this is easier for people to join, but there are some tricks to do for the host
:::

## In-game 

The easiests way to play workshop maps in singleplayer **on Steam**:

1. Subsribe to the [workshop maps](https://steamcommunity.com/workshop/browse/?appid=252950&browsesort=trend&section=readytouseitems) you want to play

2. Open Rocket League and in the play menu go to `Custom games` / `Workshop` and select the map you want to play

:::warning Missing maps
Rocket League only shows 50 workshop maps in the list. If you have more than 50 subscribed workshop maps and dont see the map you want to play, you have to unsubscribe to other maps until you see the map
:::

:::tip
If the map misses some functionalities or behaves different than expected in free play (this will probably be stated in the description on Steam), you can use a map swapper for example and load a local match.
:::

## Map swappers

To play workshop maps in single player or multiplayer you can replace an existing map by a workshop map. **Make sure you replace the same map and the workshop map is in the same folder, otherwise you will likely get a content mismatch error**  

Some map swappers are:
- [Lethamyr's custom maps loader](https://lethamyr.com/set-up-custom-maps)
- [Mr Swaggles batch script](../../essential/05_project_setup.html#batch-script-for-quickly-testing-maps-bsfqtm) 

To download maps you can enter the url of the workshop map on [steamworkshopdownloader.io](https://steamworkshopdownloader.io/) and download the file.

## Workshop community discord

There's an whole discord server around playing workshop maps organized by BalancedWaffles and even tournaments are being played on workshop maps. If you're stuck on setting up workshop maps, this server is also a great place to be.

[https://discord.gg/WNfN5ky](https://discord.gg/WNfN5ky)
