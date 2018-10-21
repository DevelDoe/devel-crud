import gForm from './gForm.vue'

const Globals = {
    install(Vue, options) {
        Vue.component( gForm.name, gForm)
    }
}

export default Globals
