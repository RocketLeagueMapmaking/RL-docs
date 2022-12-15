---
title: Adding Kismet
---
# Adding Kismet to the Project <Badge text="important" type="tip"/>

The Kismet editor is accessible from the top toolbar. A small K button will bring up a popup window. Much like the Content Browser, this window will hide in the corner of your screen if minimized.

![alt text](/images/kismet/guide/image238.png "It was fate...")

We will set up a simple Hello World printout when you load the map.

**Open the Kismet Editor. Right click > New Event > Level Loaded.** This will spawn a hexagon with some text inside it under a yellow textbox that says Level Loaded.

**Click the Lightbulb on the toolbar, and search for “draw.” Select the Draw Text ACTION (not the Event) and click Create.**

![alt text](/images/kismet/guide/image126.png "Hello World")

**Connect the Loaded and Visible connector to the Show input of the Draw Text action. Inside the Properties panel, change “Display Time Seconds” to 3. Change “Message Text” to Hello World.**
**Create a new Player variable for all players and connect it to "Target" on the Draw Text action.**

Save the project and check it out! The text should be centered in the screen and go away after 3 seconds.
