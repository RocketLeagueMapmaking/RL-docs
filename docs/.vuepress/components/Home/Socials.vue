<template>
 <section class='socials'> 

    <h1 class="section-title"> <span>Social</span><br>Media</h1>

    <div class='social-part'>
        <div class='card'>
            <iframe title='RLMM Youtube highlight' width="100%" height="315" src="https://www.youtube.com/embed/Umsn9ILID3A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style='margin:20px;'></iframe>
        </div>

        <div class='card'>
            <blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">If anyone can make this happen, it&#39;ll be Lethamyr. Keep fighting the good fight! <a href="https://t.co/zbXdfAGaCa">https://t.co/zbXdfAGaCa</a></p>&mdash; Rocket League MapMaking (@RLMapMaking) <a href="https://twitter.com/RLMapMaking/status/1320128052374822912?ref_src=twsrc%5Etfw">October 24, 2020</a></blockquote> 
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>

        <div class='card card-social'>

            <h2>See More</h2>

                <div class='socials-icons'>
                    <p>
                        <a href="https://www.twitch.tv/mrswaggly"><img src="../../public/images/twitch-brands.svg" alt=""></a>
                        <a href="https://twitter.com/RLMapMaking?s=20"><img src="../../public/images/twitter-square-brands.svg" alt=""></a>
                        <a href="https://discord.gg/PWu3ZWa"><img src="../../public/images/discord-brands.svg" alt=""></a>
                        <a href="https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured"><img src="../../public/images/youtube-square-brands.svg" alt=""></a>
                    </p>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
    data() {
        return {
            name:"Mr Swaggles"
        }
    }
}
</script>

<style lang="stylus">
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
}
.socials-icons p a .icon.outbound{
    display:none;
}

@media screen and (max-width: 600px) {
  .card-social,.section-title{
    padding-left:5vw;
  }

  .social-part{
    flex-direction:column;
  }
  .card{
    width:80%
  }
}
@media screen and (max-width: 1000px) {
.social-part{
    flex-direction:column;
  }
}
</style>