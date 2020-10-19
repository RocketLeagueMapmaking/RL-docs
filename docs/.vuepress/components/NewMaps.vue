<script>
import axios from 'axios';

export default {
  name: 'NewMaps',
  mounted () {
    this.getMsg()
  },
  data () {
    return {
      info: 'Initial Content'
    }
  },
  methods: {
    getMsg: async function () {
      
    let results = getMaps(260)

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(results), 5000)
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

async function getMaps(total){
    let maps = []
    let pages = Math.ceil(total/100)
    console.log(`pages:${pages}`)
    const forLoop = async _ => {
        console.log('start')
        for(let x= 0; x<pages;x++){
            let z = x + 1;
            axios
            .get(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key=2EE31C799AEBCC2CE04085352B7E9A2B&page=${z}&numperpage=1000&appid=252950&return_vote_data=1&return_tags=1&return_previews=1&return_children=1&return_short_description=1&return_reactions=1`)
            .then(response => {
                let data = response.data.response.publishedfiledetails
               
                for(let x=0;x<data.length;x++){
                    maps.push(data[x])
                    console.log(z)
                }
            })
        }
        console.log('end')
    }
    await console.log(maps)
    await maps.splice(maps.length-5,maps.length)
    await maps.sort((a, b) => b.time_created - a.time_created);
    await console.log(maps.length)
    await maps.join('\n')
   
}

</script>

<style scoped>

</style>