/**
 * @Author: Morgan Andree Ray
 * @Date:   08-05-2018
 * @Email:  info@andreeray.se
 * @Filename: store.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 * @License: MIT
 */

import Vue from 'vue'
import Vux from 'vuex'
Vue.use(Vux)
export const store = new Vux.Store({
    state: {
        msg: 'and running a VueX'
    },
    getters: {
        message( state ) {
            return state.msg + ' store'
        }
    },
    mutations: {
        changeMessage( state, payload ) {
            state.msg = payload
        }
    },
    actions: {
        changeMessage( context, payload ) {
            setTimeout( () => {
                context.commit('changeMessage', payload)
            }, 2000)
        }
    }
})
