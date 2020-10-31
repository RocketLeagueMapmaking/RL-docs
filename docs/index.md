---
title: Rocket League Mapmaking
editLink: false
home: false
heroImage: icons/logo_rlmm_round_144.png
meta:
  - name: Rocket League Mapmaking
    content: hello
tags:
  - welcome
  - guide
  - rocket league map making
---
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.rocketleague.com/">Failed to load</a>
</noscript>
<section class='background-section'>
<section class='headpage'>
    <div style="height:100px; margin:0 auto;">
    </div>
    <div style="width:800px; margin:0 auto;">
    <!-- <img src='./.vuepress/public/icons/logo_rlmm_round_512.png' alt='RLMM'></img> -->
    </div>
    <h1 class='title'>Rocket League<br>Mapmaking</h1>
    <p>Guides, Maps, Downloads, and More!</p>
    <h3 style='display: inline-block;'>
      <a href='/essential/index.html' class='first-link'>Get Started with UDK</a>
      <br>
      <a href='/guide/udk/00_start.html'  class='second-link'>Explore the Documentation</a>
      <br>
      <a href='/more/contribute'  class='first-link'>Get Involved</a>
      <br>
      <a href='https://steamcommunity.com/app/252950/workshop/'  class='second-link'>Browse the Maps</a>
    </h3> 
</section> 
<section class='homepage' id='home'>
  <section class='guide-part'>
        <div class='guide-text'>
            <h1 class='section-title'><span>Maptember</span><br>Madness</h1>
            <p class='guide-part-body'>In September 2020, Rocket League Mapmaking kicked off a contest featuring $550 in prize money. These prizes went to <a href=https://imgur.com/gallery/TElpGKG>seven very deserving maps</a> as judged by a panel and by the Rocket League Community. Keep an eye out for future contests!</p>
        </div>
        <div class='guide-intro'>
          <img src='./.vuepress/public/images/image260.png' alt='Maptember madness'></img>
        </div>
</section>

<section class='socials'> 
     <h1 class='section-title'><span>Social</span><br>Media</h1>
     <div class='social-part'>
     <div class='card'>
     <iframe title='RLMM Youtube highlight' width="100%" height="315" src="https://www.youtube.com/embed/Umsn9ILID3A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style='margin:20px;'></iframe>
</div>
<div class='card'>
<Twitter/>
</div>

<div class='card card-social'>
<h2>See More</h2>
<div class='socials-icons'>

[![](./.vuepress/public/images/twitch-brands.svg)](https://www.twitch.tv/mrswaggly)
[![](./.vuepress/public/images/twitter-square-brands.svg)](https://twitter.com/RLMapMaking?s=20)
[![](./.vuepress/public/images/discord-brands.svg)](https://discord.gg/PWu3ZWa)
[![](./.vuepress/public/images/youtube-square-brands.svg)](https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured)

</div>
</div>
</div>
     </section>  
</section>
</section>
<div class='footer'>
<img alt='RLMM logo' src='icons/logo_rlmm_round_144.png'>
<a href='https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured'>YouTube</a>
<a href='https://discord.gg/PWu3ZWa'>Discord</a>
<a href='https://github.com/RocketLeagueMapmaking/RL-docs'>GitHub</a>
<a href='./more/contact'>Contact</a>
<a href='./more/about'>About</a>
</div>
<div class='under-footer'>
<p>Powered by Vuepress | Written by Mr. Swaggles | Designed by ghostrider-05</p>
</div>

<style scoped>
.headpage{
    height:calc(100vh - 3.6rem);
    background-color:#2d2d2d;
    background-image: linear-gradient(180deg, rgba(0, 134, 29, 0.33) 0%, #000000 100%),url('./.vuepress/public/images/rsz_home-stadium.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:10vw;
    max-width:100vw !important;
    margin-top:0px;
    transform: translateY(-55px);
}
.headpage h1{
    text-transform:uppercase;
    color: white;
    font-size:84px;
    font-weight:bold;
    line-height: 5rem;
    transform: translateY(30px);
    margin-block-end:20px;
}
.headpage p{
max-width:600px;
padding-bottom:12px;
padding-right:5vw;
font-size:30px;
}
.headpage a{
    display: inline-block;
    width: fit-content;
    margin-bottom:15px;
}
.first-link{
    color:#00DD30;
}
.second-link{
    color:#ffffff;
    display:inline-block;
}
.background-section{
    background-color:#000000;
    width:100%;
}
.section-title{
    text-transform:uppercase;
    font-size:30px;
    margin-left:10vw;
    margin-bottom:24px;
}
.section-title span{
    color:#00861D;
    font-size:26px;
}
.guide-part{
    padding-top:30px;
    display:flex;
    flex-direction:row;
}
.guide-part-body{
    margin-left:10vw;
    max-width:500px;
    padding-right:5vw;
}
.guide-intro{
    display:flex;
    flex-direction:row;
    width:50%;
    padding-left:15px;
    padding-right:5vw;
}
.guide-intro img{
  max-width:600px;
}
.social-part{
  display:flex;
  align-items:center;
  justify-content:center;
}
.card,.twitter-card{
  width:33%;
  /* display:flex; */
  align-items:center;
  justify-content:center; 
  margin:15px;
}
.socials-icons{
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.card-social{
  background-color:#2d2d2d;
  width:fit-content;
  padding:10px 30px 10px 30px;
  margin:20px;
  display:flex;
  flex-direction:column;
  border-radius:6px;
}
.socials-icons p a img{
  width:40px;
  padding:10px;
  color: var(--accentColor);
}
.socials-icons p a .icon.outbound{
display:none;
}
.footer{
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  margin-top:25px;
}
.footer img{
  max-width:40px
}
.footer a{
  padding:20px;
}
.under-footer{
  display:flex;
  align-items:center;
  justify-content:center;
}
.under-footer p{
  font-size: 15px
}
.theme-default-content:not(.custom) {
max-width:100%;
margin:0px;
padding:0px;
}
@media screen and (max-width: 600px) {
  .headpage,.card-social,.guide-intro,.section-title.under-footer{
    padding-left:5vw;
  }
  .under-footer{
    padding-right:5vw;
  }
  .headpage h1{
    transform: translateY(35px);
    font-size:54px;
    line-height:4rem;
    max-width:90vw;
  }
  .social-part,.guide-part,.footer{
    flex-direction:column;
  }
  .guide-intro img,.card{
    max-width:90vw;
  }
  .footer a{
    padding:10px;
  }
  .card{
    width:80%
  }
}
@media screen and (max-width: 1000px) {
.social-part{
    flex-direction:column;
  }
  .guide-intro {
    width:90vw;
  }
}
@media screen and (max-width: 1215px) {
.guide-part{
    flex-direction:column;
  }
  .guide-part{
    display:flex;
    align-items:center;
    justify-content:center;
  }
}
span.time{
  color:#eeeeee;
}
</style>