---
title: Assets
---
# Decryption

With uModel you can view meshes and materials and export them so you can use them in your maps. To view all the hotkeys press `H`.

![](~@images/decryption/image222.png)

## Startup options

To view assets from Rocket League you need to change some values in the startup options. You can also use a `.bat` script or shortcut to open it faster. Change `-path` to the `{CookedPCConsole}` folder.

![](~@images/decryption/umodel_start.png)

```
umodel.exe -game=rocketleague -path="C:\Program Files (x86)\Steam\steamapps\common\rocketleague\TAGame\CookedPCConsole"
```

## Exporting

To export a single object you can press `Ctrl+X` or `Tools > Export current` in the top menu when viewing it. This will show a export settings window. Here you can choose the export location for the assets, but most of it can be left on the default values.

![](~@images/decryption/umodel_export.png)

To export a whole package, `right click > Export` or press the `Export` in the bottom menu with the package selected.

Meshes will be exported as `.pskx` meshes. To convert this to `.fbx` (to open it in UDK) [this blender addon](https://github.com/Befzz/blender3d_import_psk_psa) will help you. This addon will probably not work in the newest versions of Blender.