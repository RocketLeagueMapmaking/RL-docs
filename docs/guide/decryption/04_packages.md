---
title: Packages
---

# Decryption

## Decrypt packages

When you want to [extract assets](01_assets) or other content from a `.upk` package, the package will probably be decrypted. You can decrypt Rocket League `.upk` files with the [RLUPKTool](https://github.com/Martinii89/RLUPKT/tree/master). It is not recommended to use the `{CookedPCConsole}` folder as the folder with decrypted ``.upk` files, instead you should copy the files you want to decrypt to a separate folder which will be referenced as `{EncyptedMaps}`.

:::warning Keys
In order to decrypt the `.upk` file you need to have the AES key of the package listed in `keys.txt`
:::

To quickly decrypt multiple `.upk` packages you can create a new bat script:

```sh
set InFolder="{EncryptedMaps}"
set OutFolder="{DecryptedMaps}"

RLUPKTool -f %InFolder% -o %OutFolder%
```

This will add the `.upk` files to another to a folder which will be referenced as `{DecryptedMaps}`

## Dummy assets

To use a decrypted map in UDK you will probably need a dummy package, which can be easily created with the AssetExtraction tool. To quickly create dummy assets you can create another bat script (or even combine them):

```sh
set DecryptedMapsPath="{DecryptedMaps}"
set DummyOutputPath="{UDK Folder}\\UDKGame\\Content\\DummyAssets\\"

AssetExtraction --nopreload --dummy -f %DecryptedMapsPath% --dummyFolder %DummyOutputPath% -g *.upk
```

If you want to update all of your dummy assets you can use the [`DummyExtract.bat`](https://github.com/Martinii89/RL_DummyAssets/blob/master/DummyExtract.bat) script
