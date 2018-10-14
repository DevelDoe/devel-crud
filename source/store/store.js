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
        location: 'home',
        todos: []
    },
    getters: {
        appName : state => { return state.appName },
        isLogged: state => { return state.isLogged },
        location: state => { return state.location },
        todos   : state => { return state.todos},
    },
    mutations: {
        setIsLogged: ( state ) => { state.isLogged = !state.isLogged },
        setLocation: ( state, payload ) => { state.location = payload },
        setTodos   : ( state, payload ) => { state.todos = payload },
        addTodo    : ( state, payload ) => { state.todos.push( payload ) },
        delTodo    : ( state, payload ) => { state.todos = state.todos.filter( todo => { return todo._id != payload } ) }
    },
    actions: {
        setIsLogged: ( ctx )          => { ctx.commit( 'setIsLogged' ) },
        setLocation: ( ctx, payload ) => { ctx.commit( 'setLocation', payload ) },
        setTodos   : ( ctx, payload ) => { ctx.commit( 'setTodos', payload ) },
        addTodo    : ( ctx, payload ) => { ctx.commit( 'addTodo', payload ) },
        delTodo    : ( ctx, payload ) => { ctx.commit( 'delTodo', payload ) },
    }
})

export default store
