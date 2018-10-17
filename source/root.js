/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 */

import Vue from 'vue'


// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap'
import './assets/scss/root.scss'


import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './util/routes'
const router = new VueRouter({ routes })


import store from './store/store'


import chart from 'chart.js'


import api from './util/api'
Object.defineProperty(Vue.prototype, '$api', { get() { return this.$root.api } } )

import Plugins from './plugins/plugins.js'
Vue.use(Plugins)

import App from './components/App.vue'

new Vue({
    el: '#app',
    store: store,
    data () {
     let data = { api }
     return data
   },
   render (h) {
     return h(App, { props: this.$data })
   },
   router
})
