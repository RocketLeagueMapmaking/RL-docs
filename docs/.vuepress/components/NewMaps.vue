<script>
import axios from 'axios';
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
            titles.push(maps[w].title);
        }
        let results = titles.join('\n');
    
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(results), 5000);
        })

        let result = await promise;
        this.info = result;
    }
  },
  render (h) {
    return (
      <div>{this.info}</div>
    )
  }
}

</script>

<style scoped>

</style>