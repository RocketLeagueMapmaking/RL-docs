<template>
    
  <vueper-slides class="slider" :arrows="false" bullets-outside>
      
    <vueper-slide v-for="map in this.info.slice(0, 5)">
      <template v-slot:content>
        <div class="slide">
          <img :src="map.preview_url">

          <div class='right-side'>
            <div class='top-side'>
              <h2>{{map.title}}</h2>
              <div v-html="map.short_description" class="slide-description"></div>
              <br>
              <a v-bind:href="'https://steamcommunity.com/sharedfiles/filedetails/?id='+map.publishedfileid">Subscribe</a>
              <p><em> {{ map.creator }} </em></p>
            </div>

            <div class='bottom-side'>
              <p>More by {{map.creator}}</p>
              <!-- <div v-for='maps in this.extra'>
                <img v-bind:src="maps.image" alt="">
              </div> -->
            </div>
          </div>
        </div> 
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
 
import axios from 'axios';
import bbobHTML from '@bbob/html';
import presetHTML5 from '@bbob/preset-html5';
const {rlappid, steam } = require('../../../data.env');

let maps = [];
let players = []
let creators = [];
let extramaps = [];
let LastMapscount = 5;

export default {
  name: 'NewMaps',
  mounted () {
    this.getMsg();
  },
  data () {
    return {
      info: 'Loading',
      extra: null
    }
  },
  components: { VueperSlides, VueperSlide },
  methods: {
    
    getMsg: async function () {
      // this.$forceUpdate();
        // replace with totalmaps
        let pages = Math.ceil(260/100);
        
        for(let x= 0; x < pages;x++){
            let z = x + 1;
            await axios
            .get(`https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key=${steam}&page=${z}&numperpage=1000&appid=${rlappid}&return_vote_data=1&return_tags=1&return_previews=1&return_children=1&return_short_description=1&return_reactions=1`)
            .then(response => {
                let data = response.data.response.publishedfiledetails;
               
                for(let x=0;x<data.length;x++){
                    maps.push(data[x]);
                }
            })
        }
        await maps.sort((a, b) => b.time_created - a.time_created);

        let start = maps.length - LastMapscount;
        await maps.splice(LastMapscount,start);

        for(let w = 0;w < maps.length;w++){
           let processed = '';
           if(maps[w].short_description.split(' ').length >10){
            processed = bbobHTML(maps[w].short_description, presetHTML5()) + '...';
           }else if(maps[w].short_description === ''){
            processed = 'No description'
           }else{
            processed = bbobHTML(maps[w].short_description, presetHTML5())
           }
           maps[w].short_description = processed;

           creators.push(maps[w].creator);
        }

        await console.log('Getting data...')
        await axios
            .get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steam}&steamids=${creators}`)
            .then(response => {
                players = response.data.response.players;
                
            })

        for(let x = 0;x < players.length;x++){
          let index = creators.indexOf(players[x].steamid)
          if(maps[x].creator === players[index].steamid){
          
          await axios
            .get(`https://api.steampowered.com/IPublishedFileService/GetUserFiles/v1/?key=${steam}&steamid=${maps[x].creator}&appid=${rlappid}&page=1&numperpage=1000`)
            .then(response => {
                let maps = response.data.response;
                let images = []
                for(let a=0;a<3;a++){
                  let index = Math.floor(Math.random() *( maps.total-1))
                  let image = maps.publishedfiledetails[index].preview_url
                  
                  
                  if(extramaps.includes(image)){
                    
                    index = Math.floor(Math.random() *( maps.total-1))
                    image = maps.publishedfiledetails[index].preview_url
                  }
                  images.push({image: image,mapfileid:maps.publishedfiledetails[index].publishedfileid})
                  }
                extramaps.push({creator: players[index].steamid,maps: images})
            })
          maps[x].creator = players[index].personaname
          }
          await console.log(`Data transfer: completed ${x+1}/${LastMapscount}`)
        }
        await console.log(extramaps)
        this.extra = extramaps;
        this.info = maps;
    }
  },
}

</script>
<style>
*{
    padding:0;
    margin:0; 
}
.vueperslides__bullet .default {
  background-color: rgba(78, 78, 78, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}
.vueperslides__bullet--active .default {background-color: #42b983;}
.vueperslides__bullet span {
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

.slidercontrol{
  background-color:#2d2d2d;
  width: 60px;
  height: 350px;
  margin-right: 20px;
  margin-left: 50px;
  float: left;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.slider-dot{
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: #c4c4c4;
  margin-bottom: 15px;
  margin-top: 15px;
}
.slide{
  display:flex;
  flex-direction:row;
  margin-left:10vw;
  margin-bottom:10px;
  margin-right:10vw;
  border-radius:8px;
  background-color:#222222;
  color:white;
  max-width: 80vw;
}
.slide img{
  width:50%;
  height:350px;
  object-fit:cover;
  border-top-left-radius:8px;
  border-bottom-left-radius:8px;
}
.right-side{
  border:none;
  width:50%;
  padding:9px;
}
.top-side{
  height:70%;
}
.top-side h2{
  font-weight:bold;
  font-size:40px;
  border-bottom: none;
}
.slide-description{
  padding-bottom:10px;
  font-size: 1rem !important;
  display: inline;
}
.slide-description h1{
  font-size: 1rem !important;
  display: inline;
}
.bottom-side{
  bottom:4px;
  position:relative;
  height:30%;
  background-color:#2d2d2d;
  color: #c4c4c4;
  padding: 4px;
  border-radius: 5px;

}

</style>
