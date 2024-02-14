<!-- markdownlint-disable-file MD041 -->
<template #types-0="{ goNext }">

What kind of map do you want to make?

# Custom Soccar Map

A standard(ish) map with your own aesthetics

Such as: <Badge type="info" text="Rocket Labs" /> <Badge type="info" text="RFH Stadium" />

Focus on:
<VPButton theme="alt" text="Kismet" @click="goNext(1, { state: 'kismet' });" />
<VPButton theme="alt" text="UDK" @click="goNext(1, { state: 'kismet' });" />

</template>

<template #types-1="{ goNext }">

What kind of map do you want to make?

# Challenge map

A test of mechanical control

Such as: <Badge type="info" text="Rings" /> <Badge type="info" text="Parkour" />

Focus on:
<VPButton theme="alt" text="Kismet" @click="goNext(1, { state: 'kismet' });"/>

</template>

<style scoped>
.VPButton {
    margin: 0 10px 10px 0;
}
</style>
