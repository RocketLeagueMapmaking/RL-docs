<template>
    <div>
        <div class='footer'>
            <img alt='RLMM logo' src='icons/logo_rlmm_round_144.png'></img>
            <a href='https://www.youtube.com/channel/UCp6gkqadtgsaZmPnex9MNiA/featured'>YouTube</a>
            <a href='https://discord.gg/PWu3ZWa'>Discord</a>
            <a href='https://github.com/RocketLeagueMapmaking/RL-docs'>GitHub</a>
            <a href='./more/contact'>Contact</a>
            <a href='./more/about'>About</a>
        </div>

        <div class='under-footer'>
            <p>Powered by Vuepress   |   Written by Mr. Swaggles   |   Designed by <a href="#">ghostrider-05</a></p>
        </div>
    </div>
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
.footer{
  background-color:#25272a;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  margin-top:25px;
}
.footer img{
  max-width: 40px !important
}
.footer a{
  padding:20px;
}
.under-footer{
  background-color:#25272a;
  display:flex;
  align-items:center;
  justify-content:center;
}
.under-footer p{
  font-size: 15px
}
@media screen and (max-width: 600px) {
  .under-footer{
    padding-left:5vw;
  }
  .under-footer{
    padding-right:5vw;
  }
  .footer{
    flex-direction:column;
  }
  .footer a{
    padding:10px;
  }
}

</style>