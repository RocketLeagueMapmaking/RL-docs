<template>
  <div class='slider'>
      <div class='slidercontrol'>
      
      </div>

      <div v-for="map in this.info" class='slide'>
        <img :src="map.preview_url">

        <div class='right-side'>
          <div class='top-side'>
            <h2 style=''>{{map.title}}</h2>
            <div v-html="map.short_description"></div>
            <p>read more</p>
            <p> {{ map.creator }} </p>
          </div>

          <div class='bottom-side' style=''>
            <p>More by {{map.creator}}</p>
          </div>
        </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios';
import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'
const {rlappid, steam } = require('../../../data.env');

let maps = [];
let players = []
let creators = [];
let LastMapscount = 5;

export default {
  name: 'NewMaps',
  mounted () {
    this.getMsg();
  },
  data () {
    return {
      info: 'Loading'
    }
  },
  methods: {
    getMsg: async function () {
        // replace with totalmaps
        let pages = Math.ceil(260/100);
        
        for(let x= 0; x < pages;x++){
            let z = x + 1;
            await axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key=${steam}&page=${z}&numperpage=1000&appid=${rlappid}&return_vote_data=1&return_tags=1&return_previews=1&return_children=1&return_short_description=1&return_reactions=1`)
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
           processed = bbobHTML(maps[w].short_description, presetHTML5()) + '...';
           maps[w].short_description = processed;

           creators.push(maps[w].creator);
        }
      
        await axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steam}&steamids=${creators}`)
            .then(response => {
                players = response.data.response.players;
                
            })

        for(let x = 0;x < players.length;x++){
          let index = creators.indexOf(players[x].steamid)
          maps[x].creator = players[index].personaname
        }

        this.info = maps;
    }
  },
}

</script>
<style>
.slidercontrol{
  background-color:#2d2d2d;
}
.slide{
  display:flex;
  flex-direction:row;
  margin-left:10vw;
  margin-bottom:10px;
  margin-right:10vw;
  border-radius:8px;
  background-color:#ffffff;
  color:black;
}
.slide img{
  width:50%;
  max-height:350px;
  object-fit:contain;
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
}
.bottom-side{
  bottom:0;
  position:relative;
  height:30%;
  background-color:#2d2d2d;
  color:white;
}

</style>
