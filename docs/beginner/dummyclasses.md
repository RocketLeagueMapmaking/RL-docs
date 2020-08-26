---
title: Dummy classes
tags:
  - dummy classes
  - guide
  - hello
---
# Dummy classes

Thanks to the hard work of dedicated modders, there is a repository of Dummy Classes available to you.

These are UDK-ready classes with the same names and properties as the customized classes that were created by Psyonix for Rocket League. They allow us to drop in objects which have advanced functionality, like goals and boost pads.

The download may be found under [downloads]()
If you feel like using git, you can run git clone within the UDK folder. Downloading the .zip file is totally fine too.

Extract the .zip, and paste the four folders alongside all of the others in
`{UDK Folder}\Development\Src`

The Development folder already has a folder named `Engine`. When you paste these into `{UDK Folder}\Development\Src`, Windows should automatically combine the contents of the folders.

Using Notepad or Notepad++ or Sublime or whatever you like, **open the file `DefaultEngine.ini` within `{UDK Folder}\UDKGame\Config\`**

Insert these lines
```ini
+EditPackages=AKAudio
+EditPackages=ProjectX
+EditPackages=TAGame
```
under these lines
```ini
[UnrealEd.EditorEngine]
+EditPackages={ProjectName}Game
```
So it looks like this:
```ini{3-5}
[UnrealEd.EditorEngine]
+EditPackages={ProjectName}Game
+EditPackages=AKAudio
+EditPackages=ProjectX
+EditPackages=TAGame
```

This tells UDK to recognize that these folders contain assets that you intend to use, and allows you to place them in the editor.

**Inside `{UDK Folder}\Development\Src\Engine\Classes\` open `StaticMeshActor.uc`, `PrimitiveComponent.uc`, and `Actor.uc`.**