---
title: Playing Maps

---
# How to Play Multiplayer Maps

Thanks to the most recent update, it is now possible to run Bakkesmod on the Epic Launcher version of Rocket League, meaning it is now possible to play custom maps in multiplayer.

## Bakkesmod 

This part of the guide is for people using Steam **and** Epic games. 

### Multiplayer

The easiest way to host and play custom maps with others is to use the Rocket Plugin. This is a Bakkesmod plugin, which is a wonderful program that everyone should use. It opens a whole universe of possibilities for Rocket League.

1. Everyone involved will need to download the following programs and files:

* [Bakkesmod](https://www.bakkesmod.com/)
* [Rocket Plugin](https://bakkesplugins.com/plugins/view/26)
* [Logmein Hamachi](https://vpn.net) or [Radmin](http://www.radmin-vpn.com/)
* Subscribe to the [Workshop maps](https://steamcommunity.com/workshop/browse/?appid=252950) you're going to play (if you use the Epic Games client, you may use this [Steam Workshop Downloader tool](https://steamworkshopdownloader.io/), then place the maps into a `mods` folder within the CookedPCconsole folder)

2. Create a new network in the VPN or join an existing one.

3. Start Rocket League and open Rocket Plugin with `home`. If it doesn't open, bring up Bakkesmod by pressing `F2`, go to Plugins, and click on Rocket Plugin.

4. Create and join a match
:::details For the host 
The host will use the left side of Rocket Plugin:

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

- IP adress: IPv4 adress in the VPN or given by the host
- Port: 7777 or given by the host
- `Password` (optional): given by the host
- `Joining a custom map`: checked

Click join
:::

:::warning FAQ and Troubleshooting

- Check if you can ping each other in the VPN
- If you get an `password doesn't match` error, create a new Local Match and delete the password. Rocket Plugin uses the password from your latest private match
- Using the VPN avoids showing your real IP address
- If you wish to play Lethamyr's maps from his website, you have to use a map swapping tool
- If you are missing textures, please download the [Workshop Textures](https://drive.google.com/drive/folders/1fvMMw0jGkkGr0fZpme9tWlwD3hC5LX0W) (required by Rocket Plugin). Extract this and place its contents in the `{CookedPCConsole}` folder
- Check the [Bakkesmod Subreddit](https://www.reddit.com/r/bakkesmod) or the plugin's support page (or Discord server) 
:::

:::tip RLLobby
You can also use [RLLobby](https://bakkesplugins.com/plugins/view/82) as this is easier for people to join, but there are some extra steps required for the host
:::

## In-game

The easiest way to play Workshop maps in single player **on Steam**:

1. Subscribe to the [Workshop maps](https://steamcommunity.com/workshop/browse/?appid=252950&browsesort=trend&section=readytouseitems) you want to play

2. Open Rocket League, go to `Play > Custom Games > Workshop`, and select the map you want to play

:::warning Missing maps
Rocket League only shows 50 workshop maps in this list, in the order you subscribed to them. If you have more than 50 subscribed workshop maps and dont see the map you want to play, you have to unsubscribe from other maps.
:::

:::tip
If the map is missing some functionality or behaves different than expected in free play (this will probably be stated in the description on Steam), it may behave better in a Local Match (using a map swapper tool).
:::

## Map Swappers

To play Workshop maps in single player or multiplayer, you can replace an existing map with a Workshop map. **Make sure you replace the correct map and the Workshop map is in the correct folder, otherwise you will likely get a content mismatch error**  

Some map swappers are:

- [Lethamyr's Custom Map Loader](https://lethamyr.com/set-up-custom-maps)
- [Mr. Swaggles' BSFQTM](../../essential/05_project_setup.html#batch-script-for-quickly-testing-maps-bsfqtm) 

To download maps for Epic, paste the URL of the workshop map into [steamworkshopdownloader.io](https://steamworkshopdownloader.io/) and download the file.

## Community Workshop Games Discord

There is an entire community based around testing, playing, and even hosting tournaments on custom maps. The [Community Workshop Games](https://discord.gg/WNfN5ky) server is run by BalancedWaffles and is a wonderful place. If you're stuck on a part of this setup process, a number of people there will gladly help out.
