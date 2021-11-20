<template>
  <section class="guide-part">
    <div class="guide-text">
      <h1 class="section-title">
        <span> Mapmaking Contest {{ count }}</span> <br> {{ title }}
      </h1>
      <div class="guide-part-body">
        <p>
          {{ text }}
        </p>
        <h3>
          <a :ref="gallery">Contest Results</a>
        </h3>
      </div>
    </div>

    <div class="guide-intro">
      <img :src="src" alt=""/>
    </div>
  </section>
</template>

<script>
export default {
  props: {count: String,
          title: String,
          src: String,
          gallery: String,
          text: String
          },
  computed: {
    imagesrc () {
      return  this.src
    }
  }
}

</script>

<style lang="stylus">
.guide-part{
    padding-top: 30px;
    display: flex;
    flex-direction: row;
}
.guide-part-body{
    margin-left: 10vw;
    max-width: 500px;
    padding-right: 5vw;
}
.guide-intro{
    display: flex;
    flex-direction: row;
    width: 50%;
    padding-left: 15px;
    padding-right: 5vw;
}
.guide-intro img{
    display: block;
    max-width:600px;
    max-height:300px;
    width: auto;
    height: auto;
}
.section-title{
    text-transform: uppercase;
    font-size: 30px;
    margin-left: 10vw;
    margin-bottom: 24px;
}
.section-title span{
    color: #1CA010;
    font-size: 26px;
}
.guide-part h3{
    font-size: 20px;
    text-transform: uppercase;
    color: #1CA010;
}

@media screen and (max-width: 600px) {
    .guide-intro,.section-title{
        padding-left: 5vw;
    }
  .guide-part{
    flex-direction: column;
  }
}

@media screen and (max-width: 1000px) {
  .guide-intro {
    width: 90vw;
  }
}
@media screen and (max-width: 1215px) {
  .guide-part{
    flex-direction: column;
  }
  .guide-part{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
