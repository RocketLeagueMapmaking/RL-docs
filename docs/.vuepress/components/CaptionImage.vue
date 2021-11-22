<template>
  <figure align='center'>
    <img :src="imagesrc" alt=""/>
    <figcaption><i><small>{{ caption }}</small></i></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['src', 'caption'],
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
  object-fit: cover;
}
 
 hr.divider { 
  margin: 0em;
  border-width: 2px;
} 

figcaption {
  color: white;
  vertical-align: 'center';
  margin: 0;
  padding: 0; 
}

figure {
  background: #333333;
  border-left-width: 0.5rem;
  border-left-style: solid;
  border-color: #062604;
  border-right-width: 0.5rem;
  border-right-style: solid;
}
</style>