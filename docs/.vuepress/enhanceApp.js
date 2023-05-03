import Hero from './components/Home/Hero'
import Contest from './components/Home/Contest'
import Contest2 from './components/Home/Contest2'
import Contest3 from './components/Home/Contest3.vue'
import Socials from './components/Home/Socials'

import Footer from './components/Footer'
import FlowChart from './components/FlowChart'

import KismetNodeSearch from './components/Kismet/NodeSearch.vue'
import KismetNodeList from './components/Kismet/NodeList.vue'
import KismetNodeProperty from './components/Kismet/NodeProperty.vue'
import KismetNode from './components/Kismet/NodeItem.vue'
import KismetUpdatedList from './components/Kismet/UpdatedList.vue'

import Tree from './components/Tree/Tree.vue'
import TreeItem from './components/Tree/TreeItem.vue'
import PRITreeItem from './components/Tree/PRITreeItem.vue'

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
        ['KismetNode', KismetNode],
        ['KismetNodeProperty', KismetNodeProperty],
        ['KismetNodeSearch', KismetNodeSearch],
        ['KismetNodeList', KismetNodeList],
        ['TreeComponent', Tree],
        ['TreeItem', TreeItem],
        ['PRITreeItem', PRITreeItem],
        ['KismetUpdatedList', KismetUpdatedList],
    ]

    for (const component of components) {
        Vue.component(component[0], component[1])
    }
}
