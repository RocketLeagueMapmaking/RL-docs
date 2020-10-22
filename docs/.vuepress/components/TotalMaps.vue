<template>
     <span> {{ this.info }} </span>
</template>

<script>
import axios from 'axios';
const {rlappid, steam } = require('../../../data.env');

export default {
  name: 'TotalMaps',
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
      await axios
      .get(`https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?key=${steam}&page=3&numperpage=1000&appid=${rlappid}&requiredtags=Maps&match_all_tags=1&required_flags=5632&child_publishedfileid=0&totalonly=1&return_details=1&strip_description_bbcode=1&return_reactions=1`)
      .then(response => (this.info = response.data.response.total))
    }
  },
}

</script>