<template>
    <img :src="imagesrc" alt=""/>
</template>

<script>
export default {
  props: ['src'],
  computed: {
    imagesrc () {
      return  this.src
    }
  }
}
</script>

<style scoped>
img {
  vertical-align: middle;
  border-color: #062604;
  border-left-width: 0.5rem;
  border-left-style: solid;
  border-right-width: 0.5rem;
  border-right-style: solid;
  border-top-color: #333333;
  border-top-width: 0.15rem;
  border-top-style: solid;
  border-bottom-color: #333333;
  border-bottom-width: 0.15rem;
  border-bottom-style: solid;
}
</style>