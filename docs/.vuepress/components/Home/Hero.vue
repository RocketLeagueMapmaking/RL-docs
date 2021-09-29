<template>
    <section class='headpage'>
        <h1 class='title'>Rocket League <br> Mapmaking</h1>
        <p>Guides, Maps, Downloads, and More!</p>
        
        <h3 style='display: inline-block;'>
            <a class='first-link' href="/essential/index.html">Get Started with UDK</a>
            <br>
            <a class='second-link' href="/guide/udk/00_start.html">Explore the Documentation</a>
            <br>
            <a class='first-link' href="/more/contribute">Get Involved</a>
            <br>
            <a class='second-link' href="https://steamcommunity.com/app/252950/workshop/">Browse the Maps</a>
        </h3> 
    </section> 
</template>

<style lang="stylus">
.headpage{
    height: calc(100vh - 3.6rem);
    background-color: #2d2d2d;
    background-image: linear-gradient(180deg, rgba(0, 134, 29, 0.33) 0%, #000000 100%), url('../../public/images/home/rsz_home-stadium.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10vw;
    max-width: 100vw !important;
    margin-top: 0px;
    transform: translateY(-55px);
}
.headpage h1{
    text-transform: uppercase;
    color: white;
    font-size: 84px;
    font-weight: bold;
    line-height: 5rem;
    transform: translateY(30px);
    margin-right: 20px;
}
.headpage p{
    max-width: 600px;
    padding-bottom: 12px;
    padding-right: 5vw;
    font-size: 30px;
}
.headpage a{
    display: inline-block;
    margin-bottom: 15px;
    width: fit-content;
}
.first-link{
    color: #00DD30;
}
.second-link{
    color: #ffffff;
    display: inline-block;
}
@media screen and (max-width: 600px) {
  .headpage{
    padding-left: 5vw;
  }
  .headpage h1{
    transform: translateY(35px);
    font-size: 54px;
    line-height: 4rem;
    max-width: 90vw;
  }
}
</style>