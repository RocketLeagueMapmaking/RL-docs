<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faDraftingCompass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faUserSecret,
    faDraftingCompass
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
    
}
</script>