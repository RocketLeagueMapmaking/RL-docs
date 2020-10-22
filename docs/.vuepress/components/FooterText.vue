<template>
  <div>
    <div class="footer-class">
      <div class="footer-info">
        <img v-bind:src="this.Commondata[0]" alt="">
        <p> {{this.Commondata[1]}} </p>
        <p>Total maps: <TotalMaps /> </p>
      </div>
      <div v-for="rows in this.Text" class="footer-row">
        <p class="footer-section-title">{{rows.title}}</p>
          <ul v-for="links in rows.links" class="footer-list">
            <li>
              <a v-bind:href="links.link" class="section-item">{{links.name}}</a>
            </li>
        </ul>
      </div>
      
    </div>

    <div class="bottom-footer">
      <p class="legaltext">{{this.Commondata[2]}}</p>
    </div>
    
  </div>
</template>

<script>
import TotalMaps from './TotalMaps.vue';
export default {
  name: 'FooterText',
  mounted () {
    this.getMsg();
  },
  data () {
    return {
      Text: 'Loading',
      Commondata: 'Loading'
    }
  },
  methods: {
    getMsg: function () {
 
      const data = [
        {
          title:'Map makers',
          links:[
            {name:'Downloads',link:'/'},
            {name:'Publish',link:'/'},
            {name:'FAQ',link:'/'},
            // {name:'link4',link:'/'},
            // {name:'link5',link:'/'},
            // {name:'link6',link:'/'}
          ]
        },
        {
          title:'Updates',
          links:[
            {name:'Changelog',link:'/'},
            {name:'Contests',link:'/'},
            {name:'News',link:'/'},
            // {name:'',link:'/'},
            // {name:'link5',link:'/'},
            // {name:'link6',link:'/'}
          ]
        },
        {
          title:'Contact',
          links:[
            {name:'Forum',link:'/'},
            {name:'Email',link:'/'},
            {name:'Socials',link:'/'},
            // {name:'link4',link:'/'},
            // {name:'link5',link:'/'},
            // {name:'link6',link:'/'}
          ]
        },
        {
          title:'Support',
          links:[
            {name:'Contribute',link:'/'},
            {name:'Donate',link:'/'},
            {name:'Prize pools',link:'/'},
            // {name:'link4',link:'/'},
            // {name:'link5',link:'/'},
            // {name:'link6',link:'/'}
          ]
        },
        {
          title:'',
          links:[
            {name:'Privacy',link:'/'},
            {name:'Cookies',link:'/'},
            {name:'another thing',link:'/'},
          ]
        }
      ]
      const commondata = [
      'https://cdn.discordapp.com/attachments/713071168331972699/746425684091600936/logo_rlmm_fulltext_2000.png',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus dolor lacus neque, semper nullam massa lectus scelerisque amet.',
      'Copyright 2020 rocketleaguemapmaking.com | more stuff here | more text'
      ];
        
        this.Text = data;
        this.Commondata = commondata;
    },
  }
}
</script>

<style>
.footer-class{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:flex-start;
  padding-top: 30px;
}
.footer-info{
  max-width: 300px !important;
}
.footer-section-title{
  color: white;
  padding-bottom: 14px;
}
.section-item{
  color: #c4c4c4;
}
.footer-list{
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 0px;
}
.legaltext{
  text-align: center;
  font-size: 12px;
}
</style>