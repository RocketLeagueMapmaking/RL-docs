<template>
  <figure align='center' style="border: 2px solid #3E3B3B; background: #3E3B3B">
    <img :src="imagesrc" :width="width" alt=""/>
    <hr>
    <figcaption color: white; margin-top: -0.1rem><i><small>{{ caption }}</small></i></figcaption>
  </figure>
</template>

<script>
export default {
  props: ['src', 'caption', 'width'],
  computed: {
    imagesrc () {
      return  this.src
    }
  }
}
</script>