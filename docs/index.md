---
title: Rocket League Mapmaking
home: true
pageClass: home-page
editLink: false
features:
    - title: From installation to published
      details: Do you want to make custom maps? This is a guide for installing UDK, using the UDK editor, publishing your custom map and more!
    - title: Community support
      details: Making custom maps is not easy. There's a Discord server with more map makers to help you along your journey, share ideas and view projects
    - title: Resources
      details: Downloads (templates, installers, meshes), references (PRI, kismet) and cheatsheets to assist with map making
    - title: 3D Modeling
      details: For making custom assets you will need to model, texture and export meshes to UDK. You can learn some related topics for map making in Blender
    - title: Events
      details: Every year we hold multiple contests to make a custom map in unique way. Check out the events page for the events we have run in the past and join the Discord server for upcoming events
    - title: Open source
      details: This map making guide is open sourced. You can contribute on GitHub or suggest topics by writing content in Discord
---

<!-- Hide this component as it is also mounted to the Home layout hero -->
<!-- Remove this when switching to a custom theme -->
<HeroComponent v-show="false" />

::: slot footer
<footer-links />

Powered by Vuepress | Written by Mr. Swaggles | Designed by ghostrider-05
:::

<style>
.home-page .page-edit {
    display: none;
}

.home-page .home .hero {
    text-align: left !important;
}

.home-page .home {
    background-color: var(--bgColor);
    max-width: 100%;
    margin: 0px;
    padding: 0px;
}

.home-page .footer {
    display: block;
}

.home-page .features {
    border-top: none !important;
}

.home-page .features, .home-page .footer {
    max-width: 960px;
    margin: 0px auto;
    padding: 3.6rem 2rem;
}

.home .hero h1, .home .hero .description, .home .hero .action {
    margin: inherit !important;
}
</style>
