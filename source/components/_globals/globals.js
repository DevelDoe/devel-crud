import gForm from './gForm.vue'
import gheading from './gheading.vue'

const Globals = {
    install(Vue, options) {
        Vue.component( gForm.name, gForm)
        Vue.component( gheading.name, gheading)
    }
}

export default Globals
