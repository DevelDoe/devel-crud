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
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vux)

const store = new Vux.Store({
    plugins: [createPersistedState()],
    state: {
        appName: 'DevelStrap VueJS',
        isLogged: false,
        location: 'home'
    },
    getters: {
        appName : state => { return state.appName },
        isLogged: state => { return state.isLogged },
        location: state => { return state.location },
    },
    mutations: {
        setIsLogged: ( state ) => { state.isLogged = !state.isLogged },
        setLocation: ( state, payload ) => { state.location = payload },
    },
    actions: {
        setIsLogged: ( ctx )            => { ctx.commit( 'setIsLogged' ) },
        setLocation: ( ctx, payload )   => { ctx.commit( 'setLocation', payload ) },
    }
})

export default store
