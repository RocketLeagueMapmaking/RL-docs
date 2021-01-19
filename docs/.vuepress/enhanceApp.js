import Hero from './components/Home/Hero'
import Contest from './components/Home/Contest'
import Socials from './components/Home/Socials'
import Footer from './components/Footer'
import FlowChart from './components/FlowChart'
import KismetNodes from './components/KismetSelect'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.component('HeroComponent', Hero)
  Vue.component('ContestComponent', Contest)
  Vue.component('SocialsComponent', Socials)

  Vue.component('FooterComponent', Footer)

  Vue.component('FlowChartComponent', FlowChart)
  Vue.component('KismetNode', KismetNodes)


}