---
title: Publishing
---
# Publishing

This process works perfectly on the Steam version of Rocket League. If you do not own Rocket League on Steam but wish to publish a map on Steam, please reach out to Mr. Swaggles in the Discord. Alternatively, you can place your map in Google Drive or Dropbox and share it that way, but you will have difficulties reaching a wide audience.

JetFox has been working to make a standalone hosting site that vastly simplifies and streamlines the process of hosting and downloading maps. As of September 28, 2021, the site is still in development but is very promising: [RLMaps](http://usa2.rocketleaguemaps.tk/view.php?mapid=133).

## Psyonix Uploader Tool

When Psyonix announced Steam Workshop support in 2016, they proudly touted their Workshop Uploader program which can instantly create a Steam Workshop page for your new map. **However, it, uh… sucks.**

WorkshopUploader.exe may be found two layers up from {CookedPCConsole}, inside the folder Binaries. If you can get it to work, then I’m happy for you.

### Community update

If you still want to continue with the workshop uploader tool, use [the patched uploader](https://drive.google.com/file/d/1vxYllvf0F9bZ0bUc97crFXD3QijCAZkm/view). Replace it with the broken uploader and follow the guide from Psyonix for uploading.

## Creating a Preview Image

Before uploading the map, you will need to get a beautiful screenshot to entice victims and or innocent passers-by. This will appear both on Steam and in Rocket League as the image that people see when looking at your map.

On the Steam Workshop page for a published map, the preview images are locked into a 16:9 aspect ratio (1920x1080 pixels is 16:9, for example). Specifically, on a 1920x1080 monitor, the preview resolution is 640x360.

## SteamCMD

The real way to get things done is with an official Valve program called SteamCMD. The support page may be found [here](https://developer.valvesoftware.com/wiki/SteamCMD). **Install it as the guide describes.** I recommend putting it within the Steam Program Files folder just to consolidate things.

First, you should prepare a separate folder for Workshop uploads. This way you can track the versions you upload and have better compartmentalization.

:::warning
It’s best to keep this outside of the UDK project folder so that you don’t get duplicate package warnings when you start UDK.
:::

![alt text](/images/multiplayer/image214.png "Nobody ever complains that their computer is too well organized")

**Copy and paste the .udk file into this new folder. Two files will need to accompany the .udk upload:**

* [a preview image](02_publishing.md#creating-a-preview-image)
* [a .vdf file](02_publishing.md#vdf-file)

For the thumbnail image, you may either use a scaled down image at a 16:9 ratio (i.e. a 1920x1080 screenshot scaled to ~⅓ size) or a square image (512x512 or smaller). Make it eye-catching so that you rake in those juicy downloads.

:::warning
Sometimes Steam will reject your upload with minimal information. The only 100% effective solution I have found is to reduce the file size of the thumbnail to less than 50 kB. To do this you will need a program with a compression slider for .jpgs.
:::

## .vdf file

Next, create a new text file and change the file extension to .vdf. This is a Valve Description File (probably) which contains the info Steam needs to properly offer your map to people on the workshop. Open it in your favorite text editor. Insert this:

```txt
"workshopitem"
{
    "appid"  "252950"
    "publishedfileid"  "0"
    "contentfolder"  "C:\UDK\RLMM\UDKGame\Content\Maps\SteamWorkshop\YourMap"
    "previewfile"  "C:\UDK\RLMM\UDKGame\Content\Maps\SteamWorkshop\YourMap\preview.jpg"
    "visibility"  "0"
    "title"  "YourMap v2"
    "description"  "A description of your map. You can change this easily in Steam"
    "changenote"  "v2 - a description of what you did, for posterity's sake"
}
```

| Field name | Explanation |
| ---------- | ----------- |
| appid | **needs to be 252950** like I've shown here. That is the code that corresponds to Rocket League, as you can see at the end of its [Steam URL](http://store.steampowered.com/app/252950/) |
| publishedfileid  | the unique ID tied to your item and profile. Only the contributors to an item have access to modify that Workshop item. You can see the number at the end of the workshop page's URL: [http://steamcommunity.com/sharedfiles/filedetails/?id=814858208](http://steamcommunity.com/sharedfiles/filedetails/?id=814858208) (shameless plug). For the initial upload, this needs to be '0'. SteamCMD will automatically change it to the correct value after your first upload.|  
| visibility | when set to 0 means Public. If you just want to use this as way to iteratively test maps and not be judged, you can change that to 1 (Friends only) or 2 (only me)|

Hopefully the rest of the fields are self-explanatory.

## SteamCMD Upload

Now, run SteamCMD. You will have to close Rocket League, and it’s probably simpler to log out of Steam as well. I also recommend disconnecting your controller, because it tends to show up only as player 2 after running SteamCMD.

:::danger
Make sure you aren’t streaming or capturing video, because you’re about to type your password in plain sight.
:::

To log in, type:
login YourUserName YourPassword SteamGuardCode

:::warning Epic Games
If you don't have Rocket League installed on Steam, you will not be able to continue. A workaround is to publish your map on [the shared RLMM Steam account](https://steamcommunity.com/id/rocketleaguemapmaking). Contact Mr. Swaggles if you're at this step
:::

If you don’t have SteamGuard enabled, ignore the third argument. You should see it successfully log in, and that’s half the battle.

Copy the full path of your .vdf file from the file explorer window. In this example, that is `C:\UDK\RLMM\UDKGame\Content\Maps\SteamWorkshop\YourMap\`

In SteamCMD, type:

```sh
workshop_build_item
```

And then right click to paste what you copied, and add `\YourMap.vdf`.
The full command should look like:

```sh
workshop_build_item C:\UDK\RLMM\UDKGame\Content\Maps\SteamWorkshop\YourMap\YourMap.vdf
```

Now, check your Workshop page to see if it uploaded. If SteamCMD thinks it did, then it did.

Type `quit` to close SteamCMD. You almost certainly have to restart Steam before you can properly launch a game. It typically tells me that "Steam will be unable to sync resources with the Steam Cloud" or something, which is probably due to the fact I was just logged in twice on the same computer which makes Steam hurt itself in confusion.

Be sure to Subscribe to your own map, and look for it under the Extras section in Rocket League!

:::tip
You can follow this same process to update your maps. The “changenote” field is great to keep track of what has changed, in case people are curious.
:::
