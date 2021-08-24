---
title: Assets
---
# Decryption

With uModel you can view meshes and materials and export them so you can use them in your maps. To view all the hotkeys press `H`.

!['uModel viewport of the scarab car'](/images/decryption/image222.png)

## Start-up options

To view assets from Rocket League you need to change some values in the start-up options. You can also use a `.bat` script or shortcut to open it faster. Change `-path` to the `{CookedPCConsole}` folder.

!['uModel start-up options'](/images/decryption/umodel_start.png)

```sh
umodel.exe -game=rocketleague -path="{CookedPCConsole}"
```

:::tip uModel
There are 2 versions of uModel. Depending on your version you need to use `-game=rocketleague` or `-game=rocket`
:::

## Exporting

To export a single object you can press `Ctrl+X` or `Tools > Export current` in the top menu when viewing it. This will show a export settings window. Here you can choose the export location for the assets, but most of it can be left on the default values.

!['uModel recommended export settings'](/images/decryption/umodel_export.png)

To export a whole package, `right click > Export` or press the `Export` button in the bottom menu with the package selected.

Meshes will be exported as `.pskx` meshes. To convert this to `.fbx` (to open it in UDK) [this blender addon](https://github.com/Befzz/blender3d_import_psk_psa) will help you. Depending on your blender version you need to use the `270` or `280` version of the script.
