import gForm from './gForm.vue'
import gSearch from './gSearch.vue'

const Globals = {
    install(Vue, options) {
        Vue.component( gForm.name, gForm)
        Vue.component( gSearch.name, gSearch)
    }
}

export default Globals
