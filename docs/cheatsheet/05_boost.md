---
title: Boost
pageClass: page-inline-images
---
# Boost

<steps>
<template #step-1>

Add `FXActor_Boost_TA` from the Actor Classes window:

![](/images/cheatsheets/boost/image1.png)

Add `VehiclePickup_Boost_TA` next to the FXActor:

![](/images/cheatsheets/boost/image2.png)

</template>
<template #step-2>

<tabs :tabs="['Boost pill', 'Boost pad']" :alignLeft="true">

<template #tab-boost_pill>

For adding a full boost, add the dummy asset `StaticMesh'HoopsStadium_P.Pickup_Boost.BoostPad_Large'`.

Set the same X and Y coordinates for  VehiclePickup, FXActor, and StaticMesh.
Change the following properties in the VehiclePickup:

| Name          | Value          |
| ------------- | -------------- |
| Z coordinate  | 72             |
| Boost amount  | 9999           |
| Boost type    | BoostType_Pill |
| Respawn delay | 10             |

</template>

<template #tab-boost_pad>

For adding a small boost, add the dummy asset `StaticMesh'HoopsStadium_P.Pickup_Boost.BoostPad_Small'`.

Set the same X and Y coordinates for  VehiclePickup, FXActor, and StaticMesh.
Change the following properties in the VehiclePickup:

| Name          | Value         |
| ------------- | ------------- |
| Z coordinate  | 63            |
| Boost amount  | 0.12          |
| Boost type    | BoostType_Pad |
| Respawn delay | 4             |

</template>

</tabs>
</template>
<template #step-3>

> [!WARNING]
> You must repeat this step whenever you Copy+Paste boost pickups.

Assign the FXActor to the VehiclePickup:

![](/images/cheatsheets/boost/image3.png)

And lastly, in FXActor:

![](/images/cheatsheets/boost/image4.png)

</template>
</steps>

<ActionBlock>

[Original Google Doc Version](https://docs.google.com/document/d/1IECsPWvTNXCRvKc5phaHpO_HNYftzPtXs2hUI2mShPk/edit?usp=sharing)
</ActionBlock>
