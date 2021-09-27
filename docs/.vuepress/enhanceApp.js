import Hero from './components/Home/Hero'
import Contest from './components/Home/Contest'
import Contest2 from './components/Home/Contest2'
import Socials from './components/Home/Socials'
import Footer from './components/Footer'
import FlowChart from './components/FlowChart'
import KismetNodes from './components/KismetSelect'

export default ({
    Vue, // the version of Vue being used in the VuePress app
}) => {
    const components = [
        ['HeroComponent', Hero],
        ['Contest3Component', Contest3],
        ['Contest2Component', Contest2],
        ['ContestComponent', Contest],
        ['SocialsComponent', Socials],
        ['FooterComponent', Footer],
        ['FlowChartComponent', FlowChart],
        ['KismetNode', KismetNodes]
    ]

    for (const component of components) {
        Vue.component(component[0], component[1])
    }
}
