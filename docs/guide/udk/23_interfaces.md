---
title: Scaleform
---
# Scaleform

## Overview
Scaleform is the GUI renderer that UDK uses for the HUD, main menu and can even be used to render directly to in-game textures.

You can find the official docs [here](https://docs.unrealengine.com/udk/Three/Scaleform.html)

## Getting started

To create your first GUI you will need to install [Adobe Animate](https://www.adobe.com/uk/products/animate.html)
(you can get a free trial to start with but will unfortunately need to pay for it).

Once installed start a new file then pick "Advanced" -> "Action Script 3.0". Set your desired width and height then "Create".

![](~@images/UDK/advanced/scaleform/create-swf0.png)

1. Place a box with the toolbar on the left.
2. Select it
3. Right-click and click "Convert to Symbol..."

In the "Convert to Symbol" box

![](~@images/UDK/advanced/scaleform/create-swf1.png)

1. Set the name to "myBoxClass"
2. Check the "Export for ActionScript" box
3. Click ok

You can ignore the "ActionScript class warning".

![](~@images/UDK/advanced/scaleform/create-swf2.png)

Then on the right "Properties" -> "Object" -> "Instance name". Set the name for the box to "myBox".

Next press F9 for the ActionScript editor and paste in the following

```actionscript
import flash.events.*;

var speed:Number = 1; // we will set this later on with Kismet

function onEnterFrame()
{
	myBox.x += speed;
}

addEventListener(Event.ENTER_FRAME, onEnterFrame);
```

You can close the ActionScript editor again by pressing F9.
Then save your animation file as "tutorial.fla".

Now to create the SWF file.
Click "File" -> "Export" -> "Export Movie...".
Save the file as "tutorial.swf"

You can quickly test the output with the UDK media player from the command line with this command
```
C:\UDK\Custom\Binaries\GFx\GFxMediaPlayerD3d9.exe tutorial.swf
```
(tip: save this in a "run.bat" file and then you can quickly double click to check if it works)

You should see your box moving to the right.

![](~@images/UDK/advanced/scaleform/run-swf.png)

## Importing SWF files into UDK

Before you can import the SWF assets they need to be copied to this folder:
```
C:\UDK\Custom\UDKGame\Flash\YOUR_FLASH_PACKAGE\YOUR_FLASH_GROUP
```

`YOUR_FLASH_PACKAGE` and `YOUR_FLASH_GROUP` can be named whatever you want, e.g.
`C:\UDK\Custom\UDKGame\Flash\MyFlash\Tutorial`. If the folders do not already exist then create them.

Click "Import" in the "Content browser" and import the SWF from this folder.

## Playing SWF files 

### In UDK with Kismet

Setup up your Kismet nodes like this:

![](~@images/UDK/advanced/scaleform/kismet-setup.png)

Set the "GFx SetVariable" -> "Variable" to "speed".

![](~@images/UDK/advanced/scaleform/run-in-udk.png)

1. Select your imported SWF movie in the Content browser
2. Click on the "Open GFx Movie"
3. Click the green arrow on the "Movie" variable.
4. Save your game and then click the run button.

You should see the UDK game (not Rocket League) running.
The square you placed should pop up after 1 second and then 3 seconds later change direction!

When working with Kismet it is worth trying to make a simpler version that you can test in the UDK first (if possible).
If you require any specific Rocket League gameplay then you will still need to run everything in game.

### In Rocket League

When copying your map from the maps folder
````
C:\UDK\Custom\UDKGame\Content\Maps
````
to
````
steamapps\common\rocketleague\TAGame\CookedPCConsole\mods
````
You will now also need to copy YOUR_FLASH_PACKAGE.upk

## Updating SWF files

Once you are up and running you will want to make changes to the SWF.
To do this you must first remove all references to it.

1. Goto your "Open GFx Movie" Kismet node
2. Delete all the text in the "Movie" property
3. Delete your SWF file

Sometimes even after this I find SWF files do not update properly.
I generally change something obvious each time I save so I can see if it updated.
If the SWF still doesn't update try restarting the UDK.

## Images

Images must be a power of 2 width and height (e.g. 16, 32, 64, 128, 256, 512, 1024)
Images should be saved in a PNG format.
If you want something that will work just use this: ![](~@images/UDK/advanced/scaleform/example.png)

After adding your image to Adobe Animate (just drag and drop) it needs to be exposed so that UDK can find it.

![](~@images/UDK/advanced/scaleform/export-images.png)

1. Click on the "Properties" icon in the right toolbox
2. Click "ActionScript"
3. Click "Export for ActionScript"
4. Click Ok

You can ignore the "ActionScript class warning".

Images need to be copied into the package group folder you created earlier in a new folder with the same name as your SWF file
```
C:\UDK\Custom\UDKGame\Flash\YOUR_FLASH_PACKAGE\YOUR_FLASH_GROUP\YOUR_SWF_FILE_NAME\YOUR_IMAGE.png

```
e.g. `C:\UDK\Custom\UDKGame\Flash\MyFlash\Tutorial\tutorial\example.png`

If this is all done correctly then next time the SWF file is imported it should also import the image as a "Texture2D" asset.

## Fonts

Add a text field to your animation scene with the font you want. Then

![](~@images/UDK/advanced/scaleform/fonts0.png)

1. Click on the text field and on the right in "Properties"-> "Object" click "Embed".
2. Just use "All" for the character range.
3. Goto the ActionScript tab.

![](~@images/UDK/advanced/scaleform/fonts1.png)

1. Check the box "Export for ActionScript"
2. "Outline format" should be "FTE (DF4)"

If you have dynamic text make sure that the textbox is set to resize in ActionScript
```actionscript
textbox.autoSize = TextFieldAutoSize.LEFT;
```

## Communicating with ActionScript from Kismet

Listening to the GFX Invoke example ActionScript:
```actionscript
import flash.external.ExternalInterface;

function test(myString)
{
    return "Hello from Invoke! " + myString;
}
ExternalInterface.addCallback("test", test);
```

![](~@images/UDK/advanced/scaleform/kismet-invoke.png)

1. Add a new "GFx Invoke ActionScript" Kismet node
2. Set "Method Name" to "test"
3. Add an argument
4. Set it to "AS_String"
5. Set a "S" to your string argument.

Tip if you right click on the Kismet node you can expose the "Arguments..." and attach variables there.

## Haxe SWF generation

You can also use Haxe to generate SWF files. Haxe is a free alternative to Adobe Animate. *However, I have not yet figured out how to include images or fonts...*

Example Haxe file
```actionscript
import scaleform.gfx.*;
import flash.Lib;
import flash.display.Shape;
import flash.display.Sprite;
import flash.external.ExternalInterface;
import flash.events.TimerEvent;
import flash.utils.Timer;

class Main {

    static var speed:Int = 1;

    static function main() {

        function test(myString)
        {
            return "Hello from Invoke! " + myString;
        }
        ExternalInterface.addCallback("test", test);

        var stage = Lib.current.stage;

        // create a center aligned rounded gray square
        var shape = new Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawRoundRect(0, 0, 100, 100, 10);
        shape.x = (stage.stageWidth - 100) / 2;
        shape.y = (stage.stageHeight - 100) / 2;
        stage.addChild(shape);

        var timer:Timer = new Timer(1, 0);

        timer.addEventListener(TimerEvent.TIMER, function (event:TimerEvent)
            {
                shape.x += speed;
            });

        timer.start();
    }
}
```

Which you can build with
```
haxe --swf main-flash.swf --main Main --swf-version 9 --swf-header 960:640:60:f68712 -p C:\UDK\Custom\Development\Flash\AS3\CLIK
```

When accessing the Haxe "speed" variable "GFX Set Variable" will need to set Main.speed

## Resources

- How to set up Adobe Animate textures (and CLIK inputs but I've not figured out how to get the mouse to work yet)
Later on [in the series](https://www.youtube.com/watch?v=oSbr7uc-JyM) this also shows how to render to in-game surfaces
- [Action script 3.0 APIs](https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/)
- [UDK scalefrom documentation](https://docs.unrealengine.com/udk/Three/Scaleform.html)