import MyComponent from './components/MyComponent.vue'
import MyDirecitve from './direcitves/MyDirectives.js'

const ComAndDirPlugin {
    install(Vue, options) {
        Vue.component(MyComponent.name, MyComponent)
        Vue.directive(MyDirective.name, MyDirective)
    }
}
export default ComAndDirPlugin
