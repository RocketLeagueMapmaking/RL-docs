<template>
  <section class='guide-part'>
    <div class='guide-text'>
      <h1 class="section-title"><span> Maptember </span> <br> Madness</h1>
      <div class="guide-part-body">
        <p> In September 2020, Rocket League Mapmaking kicked off a contest featuring $550 in prize money. These prizes went to <a href=https://imgur.com/gallery/TElpGKG>seven very deserving maps</a> as judged by a panel and by the Rocket League Community. Keep an eye out for future contests!
        </p>
      </div>
    </div>

    <div class='guide-intro'>
      <img src='../../public/images/home/image260.png' alt='Maptember madness'></img>
    </div>
  </section>
</template>

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
  max-width: 600px !important;
}
.section-title{
    text-transform: uppercase;
    font-size: 30px;
    margin-left: 10vw;
    margin-bottom: 24px;
}
.section-title span{
    color: #00861D;
    font-size: 26px;
}

@media screen and (max-width: 600px) {
    .guide-intro,.section-title{
        padding-left: 5vw;
    }
  .guide-part{
    flex-direction: column;
  }
  .guide-intro img{
    max-width: 90vw !important
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