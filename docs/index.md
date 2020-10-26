---
title: Rocket League Mapmaking
editLink: false
home: false
heroImage: /logo_rlmm_round_1440.png
# actionText: Documentation →
# actionLink: /basic/
# sidebar: auto
meta:
  - name: Rocket League Mapmaking
    content: hello
tags:
  - welcome
  - guide
  - rocket league map making
---
<section class='background-section'>
<section class='headpage'>
    <h1 class='titel'>Rocket league <br>map making</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus dolor lacus neque, semper nullam massa lectus scelerisque amet. Interdum venenatis est gravida eros, porttitor platea egestas arcu. Amet faucibus duis et consequat luctus ac, elementum sed. Venenatis sit ligula volutpat scelerisque luctus venenatis, hendrerit.
    </p> 
    <a href='#home' class='first-link'>read more</a>
    <a href='/guide/udk/01_csg'  class='second-link'>documentation</a>
</section> 
<section class='homepage' id='home'>
  <section class='guide-part'>
        <div class='guide-text'>
            <h1 class='section-title'><span>Map making</span><br>contests</h1>
            <p class='guide-part-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus nibh turpis id at mauris. Metus, rhoncus luctus quam viverra lacus nibh. Sit consequat, tincidunt magnis ultricies nunc. Purus nibh turpis id at mauris. Metus, rhoncus luctus quam viverra lacus nibh. </p>
        </div>
        <div class='guide-intro'>
          <img src='./.vuepress/public/images/image260.png'></img>
        </div>
</section>

<section class='socials'> 
     <h1 class='section-title'><span>Highlight</span><br>Socials</h1>
     <div class='social-part'>
     <div class='card'>
     <iframe width="100%" height="315" src="https://www.youtube.com/embed/Umsn9ILID3A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style='margin:20px;'></iframe>
</div>
<div class='card'>
<Twitter/>
</div>

<div class='card card-social'>
<h2>See more</h2>
<div class='socials-icons'>
<a href='https://www.twitch.tv/mrswaggly'><font-awesome-icon :icon="['fab', 'twitch']"  class='icon'/></a>
<a href='https://twitter.com/RLMapMaking?s=20'><font-awesome-icon :icon="['fab', 'twitter-square']"  class='icon'/></a>
<a href='https://discord.gg/PWu3ZWa'><font-awesome-icon :icon="['fab', 'discord']" class='icon' /></a>
<a href='https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured'><font-awesome-icon :icon="['fab', 'youtube']"  class='icon'/></a>
</div>
</div>
</div>
     </section>  
</section>
</section>
<div class='footer'>
<img src='./.vuepress/public/logo_rlmm_round_1440.png'>
<a href='https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured'>YouTube</a>
<a href='https://discord.gg/PWu3ZWa'>Discord</a>
<a href='https://github.com/RocketLeagueMapmaking/RL-docs'>Github</a>
<a href='./more/contact'>Contact</a>
<a href='./more/about'>About</a>
</div>
<div class='under-footer'>
<p>Powered by Vuepress | Written by Mr Swaggles | Designed by ghostrider-05</p>
</div>

<style scoped>
.headpage{
    height:calc(100vh - 3.6rem);
    background-image: linear-gradient(180deg, rgba(0, 134, 29, 0.33) 0%, #000000 100%),url('https://steamuserimages-a.akamaihd.net/ugc/806620296079743607/6DB81EC94FACC387C7840B2CAD21F4151F5F6996/');
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
}
.headpage p{
max-width:600px;
padding-bottom:12px;
}
.headpage a{
    display: inline-block;
    width: fit-content;
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
}
.guide-intro{
    display:flex;
    flex-direction:row;
    width:50%;
    padding-left:15px;
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
.socials-icons .icon{
  font-size:30px;
  padding:10px;
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
  .headpage,.card-social,.guide-intro,.section-title,.under-footer{
    padding-left:5vw;
  }
  .under-footer{
    padding-right:5vw;
  }
  .headpage h1{
    transform: translateY(0px);
    font-size:64px;
    line-height:4rem;
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
</style>