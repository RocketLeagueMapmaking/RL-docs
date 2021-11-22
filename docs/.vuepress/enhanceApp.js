import Hero from './components/Home/Hero'
import Contest from './components/Home/Contest'
import Socials from './components/Home/Socials'

import CaptionImage from './components/CaptionImage'
import InlineImage from './components/InlineImage'
import Footer from './components/Footer'
import FlowChart from './components/FlowChart'
import KismetNodes from './components/KismetSelect'

export default ({
    Vue, // the version of Vue being used in the VuePress app
}) => {
    const components = [
        ['HeroComponent', Hero],
        ['ContestComponent', Contest],
        ['SocialsComponent', Socials],
        ['FooterComponent', Footer],
        ['FlowChartComponent', FlowChart],
        ['KismetNode', KismetNodes],
        ['CaptionImageComponent', CaptionImage],
        ['InlineImageComponent', InlineImage]
    ]

    for (const component of components) {
        Vue.component(component[0], component[1])
    }
}
