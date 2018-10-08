/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 */

import Vue from 'vue'
import App from './App.vue'

const appName = "DevelStrap VueJS"

import 'bootstrap'
// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import './assets/scss/app.scss'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './utils/routes'
const router = new VueRouter({ routes })

import { store } from './store/store'

new Vue({
    el: '#app',
    store: store,
    data () {
     let data = { msg: appName }
     return data
   },
   render (h) {
     return h(App, { props: this.$data })
   },
    router
})
