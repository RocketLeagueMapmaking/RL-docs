<template>
    <div>
    <div id="tweetLoaded">
      <Tweet :id="'1320128052374822912'" :options="{ theme: 'dark',cards: 'hidden' } " widget-class="twitter-widget"></Tweet>
    </div>
    <div id="loadingError">
      <Tweet :id="'y-u-no-load'" error-message="This tweet could not be loaded"></Tweet>
    </div>
    <div id="htmlError">
      <Tweet :id="'y-u-no-html-error'" error-message="Sorry the tweet is not available. Search on <a href='https://twitter.com'>twitter</a>"></Tweet>
    </div>
    </div>
</template>


<script>
const Tweet  = require('vue-tweet-embed/dist/tweet').default

export default {
    components: {Tweet}
}
</script>
