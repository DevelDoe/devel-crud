import DevelToast from './DevelToast.vue'

const Plugins = {
    install( Vue, options ) {
        Vue.component( DevelToast.name, DevelToast)
    }
}
export default Plugins
