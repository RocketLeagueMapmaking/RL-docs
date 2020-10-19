<script>
import axios from 'axios';
import bbobHTML from '@bbob/html'
import presetHTML5 from '@bbob/preset-html5'

const {rlappid, steam } = require('../../../data.env');

let maps = [];
let titles = []
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
        let pages = Math.ceil(260/100);
        
        for(let x= 0; x<pages;x++){
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

        for(let w=0;w<maps.length;w++){
          let processed = ''
           processed = bbobHTML(maps[w].short_description, presetHTML5())
           maps[w].short_description = processed
        }
            titles = maps
        
        let results = titles
    
        // let promise = new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(results), 3000);
        // })

        // let result = await promise;
        this.info = results;
        console.log(this.info[0].short_description)
    }
  },
  render (h) {
    return (
      
      <div class='slider'>
      <div class='slidercontrol' style='background-color:#2d2d2d;'>
      
      </div>
      <div class='slide' style='display:flex;flex-direction:row;margin-left:10vw;margin-right:10vw;border-radius:8px;background-color:#ffffff;color:black;'>
      <img src={this.info[0].preview_url} style='width:50%'></img>
      <div class='right-side' style='border:none;width:50%;padding:9px'>
      <div class='top-side' style='height=30%;'>
      <h2 style='font-weight:bold;font-size:40px'>{this.info[0].title}</h2>
      <p id='to-fill'>{this.info[0].short_description}</p>
      <p>read more</p>
      <p>{this.info[0].creator}</p>
      </div>
      <div class='bottom-side' style='bottom:0;position:relative;height=30%;background-color:#2d2d2d;color:white;'>
      <p>More by {this.info[0].creator}</p>
      </div>
      </div></div>
      
      </div>
      
    
    )

      
  }
}

</script>
