<template>
   
     <span> {{ info }} </span>

</template>

<script>
  import axios from 'axios';
  const  rlappid = '252950';
  const steamAPItoken = '2EE31C799AEBCC2CE04085352B7E9A2B';

export default{
  data () {
    return {
      info: null
    }
  },
  beforeMount () {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key=${steamAPItoken}&page=3&numperpage=1000&appid=${rlappid}&requiredtags=Maps&match_all_tags=1&required_flags=5632&child_publishedfileid=0&totalonly=1&return_details=1&strip_description_bbcode=1&return_reactions=1`)
      .then(response => (this.info = response.data.response.total))
  }
}

</script>

<style scoped>

</style>
