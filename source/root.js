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
import routes from './utils/routes'
const router = new VueRouter({ routes })


import VueResource from 'vue-resource'
Vue.use(VueResource)
if( process.env.NODE_ENV === 'development' ) Vue.http.options.root = 'http://localhost:4002'
if( process.env.NODE_ENV === 'production' ) Vue.http.options.root = 'http://35.241.141.40:4001'


import store from './store/store'
import chart from 'chart.js'


import App from './components/App.vue'

import api from './utils/API'
Object.defineProperty(Vue.prototype, '$api', { get() { return this.$root.api } } )

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
   router,
   created() {
       api.get( 'todos' )
   }
})
