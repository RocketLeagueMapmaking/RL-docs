---
editLink: false
sidebar: false
---
<div class='custom'>
    <section class='headpage'>
        <h1 class='titel'>Rocket league <br>map making</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus dolor lacus neque, semper nullam massa lectus scelerisque amet. Interdum venenatis est gravida eros, porttitor platea egestas arcu. Amet faucibus duis et consequat luctus ac, elementum sed. Venenatis sit ligula volutpat scelerisque luctus venenatis, hendrerit.
        </p> 
        <a href='#readme' class='first-link'>read more</a>
        <a href='/guide'  class='second-link'>documentation</a>
    </section> 
    <section class='body-part' id='readme'>
        <h1 class='section-title'><span>New</span><br> maps</h1>
        <NewMaps />
    </section>
    <FooterText />
</div>
   
<style>
*{
    padding:0;
    margin:0; 
}
.headpage{
    height:calc(100vh - 3.6rem);
    background-image: linear-gradient(180deg, rgba(0, 134, 29, 0.33) 0%, #000000 100%),url('https://steamuserimages-a.akamaihd.net/ugc/806620296079743607/6DB81EC94FACC387C7840B2CAD21F4151F5F6996/');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:10vw;
    max-width:100%;
}
.headpage h1{
    text-transform:uppercase;
    color: white;
    font-size:84px;
    font-weight:bold;
    line-height: 5rem;
    transform: translateY(-45px);
}
.headpage p{
max-width:600px;
padding-bottom:12px;
}
.headpage a{
    display: inline-block;
    width: fit-content;
}
.first-link{
    color:#00DD30;
}
.second-link{
    color:#ffffff;
    display:inline-block;
}
.body-part{
    background-color:#000000;
    width:100%;
}
.section-title{
    text-transform:uppercase;
    font-size:30px;
    margin-left:10vw;
    margin-bottom:24px;
}
.section-title span{
    color:#00861D;
    font-size:26px;
}
/* Used for full width*/
.theme-default-content:not(.custom) {
max-width:100%;
margin:0px;
padding:0px;
}
.page-edit{
    display:none;
}
</style>