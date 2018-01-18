/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-18T21:24:45+01:00
 */

import Vue from 'vue'
import App from './App.vue'
import '../node_modules/devel-style/devel-style.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './utils/routes'
const router = new VueRouter({ routes })


new Vue({
    el: '#app',
    data: {
        msg: 'Upp & Running With Vue'
    },
    components: {
        App
    },
    router
})
