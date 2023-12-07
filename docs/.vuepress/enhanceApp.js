import Hero from './components/Home/Hero'
import FooterLinks from './components/Home/FooterLinks.vue'

import FlowChart from './components/FlowChart'

import KismetNodeSearch from './components/Kismet/NodeSearch.vue'
import KismetNodeList from './components/Kismet/NodeList.vue'
import KismetNodeProperty from './components/Kismet/NodeProperty.vue'
import KismetNode from './components/Kismet/NodeItem.vue'
import KismetUpdatedList from './components/Kismet/UpdatedList.vue'

import Tree from './components/Tree/TreeComponent.vue'
import TreeItem from './components/Tree/TreeItem.vue'
import PRITreeItem from './components/Tree/PRITreeItem.vue'
import PRITreeSearch from './components/Tree/PRITreeSearch.vue'

export default ({
    Vue, // the version of Vue being used in the VuePress app
}) => {
    const components = [
        ['HeroComponent', Hero],
        ['FooterLinks', FooterLinks],
        ['FlowChartComponent', FlowChart],
        ['KismetNode', KismetNode],
        ['KismetNodeProperty', KismetNodeProperty],
        ['KismetNodeSearch', KismetNodeSearch],
        ['KismetNodeList', KismetNodeList],
        ['TreeComponent', Tree],
        ['TreeItem', TreeItem],
        ['PRITreeItem', PRITreeItem],
        ['PRITreeSearch', PRITreeSearch],
        ['KismetUpdatedList', KismetUpdatedList],
    ]

    for (const component of components) {
        Vue.component(component[0], component[1])
    }
}
