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
        token: '',
        location: 'home',
        todos: [],
        toast: '',
        resources: null,
        users: [],
        user: {}
    },
    getters: {
        appName        : state => { return state.appName },
        token          : state => { return state.token },
        location       : state => { return state.location },
        todos          : state => { return state.todos },
        toast          : state => { return state.toast },
        resources      : state => { return state.resources },
        users          : state => { return state.users },
        user           : state => { return state.user },
    },
    mutations: {
        setAppName     : ( state, payload ) => { state.appName = payload },
        setToken       : ( state, payload ) => { state.token = payload },
        delToken       : ( state, payload ) => { state.token = '' },
        setLocation    : ( state, payload ) => { state.location = payload },

        setTodos       : ( state, payload ) => { state.todos = payload },
        addTodo        : ( state, payload ) => { state.todos.push( payload ) },
        delTodo        : ( state, payload ) => { state.todos = state.todos.filter( todo => { return todo._id != payload } ) },

        toast       : ( state, payload ) => { state.toast = payload },

        setResources   : ( state, payload ) => { state.resources = payload },
        addResource    : ( state, payload ) => { state.resources.push( payload ) },
        delResource    : ( state, payload ) => { state.resources = state.resources.filter( todo => { return todo._id != payload } ) },

        setUsers       : ( state, payload ) => { state.users = payload },
        addUser        : ( state, payload ) => { state.users.push( payload ) },
        delUser        : ( state, payload ) => { state.users = state.users.filter( user => { return user._id != payload } ) },

        setUser        : ( state, payload ) => { state.user = payload },
        removeUser     : ( state, payload ) => { state.user = {} },
    },
    actions: {
        setAppName     : ( ctx, payload )   => { ctx.commit( 'setAppName', payload ) },
        setToken       : ( ctx, payload )   => { ctx.commit( 'setToken', payload ) },
        delToken       : ( ctx, payload )   => { ctx.commit( 'delToken', payload ) },
        setLocation    : ( ctx, payload )   => { ctx.commit( 'setLocation', payload ) },

        setTodos       : ( ctx, payload )   => { ctx.commit( 'setTodos', payload ) },
        addTodo        : ( ctx, payload )   => { ctx.commit( 'addTodo', payload ) },
        delTodo        : ( ctx, payload )   => { ctx.commit( 'delTodo', payload ) },

        toast          : ( ctx, payload )   => { ctx.commit( 'toast', payload ) },

        setResources   : ( ctx, payload )   => { ctx.commit( 'setResources', payload ) },
        addResource    : ( ctx, payload )   => { ctx.commit( 'addResource', payload ) },
        delResource    : ( ctx, payload )   => { ctx.commit( 'delResource', payload ) },

        setUsers       : ( ctx, payload )   => { ctx.commit( 'setUsers', payload ) },
        addUser        : ( ctx, payload )   => { ctx.commit( 'addUser', payload ) },
        delUser        : ( ctx, payload )   => { ctx.commit( 'delUser', payload ) },

        setUser        : ( ctx, payload )   => { ctx.commit( 'setUser', payload ) },
        removeUser     : ( ctx, payload )   => { ctx.commit( 'removeUser', payload ) },
    }
})

export default store
