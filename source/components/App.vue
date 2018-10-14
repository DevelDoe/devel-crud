<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 08-05-2018
-->

<template>
<div id="app">
        <transition name="drawer">
        <div :class="{ 'drawer': isLogged }" v-if="isLogged">
            <nav class="navbar  navbar-dark bg-light sticky-top" id="home">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> Admin</a>
                    <i class="fa fa-sign-out" aria-hidden="true" @click="$store.dispatch('setIsLogged'), $store.dispatch( 'setLocation', 'home' ), $router.push('/')" title="logout"></i>
                </div>
            </nav>
            <div class="container-fluid">
                <ul class="nav nav-stacked">

                    <li class="nav-caption">Site</li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('home') || isActiveNavItem('stack') || isActiveNavItem('about') || isActiveNavItem('code') || isActiveNavItem('connect') }">
                        <a href="/#/" @click="$store.dispatch( 'setLocation', 'home' )"> Landing </a>
                    </li>

                    <li class="nav-caption">Dashboards</li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('dashboard') }">
                        <a href="/#/admin/dashboard" @click="$store.dispatch( 'setLocation', 'dashboard' )"> Overview </a>
                    </li>

                    <li class="nav-caption">Resources</li>
                    <li class="nav-item"> <a href="https://github.com/develdoe">GitHub</a> </li>
                </ul>
            </div>
        </div>
        </transition >
        <div :class="{ 'content': true, 'admin-open': isLogged }">
            <keep-alive>
                <transition name="fade" mode="out-in" >
                    <router-view />
                </transition>
            </keep-alive>
        </div>
    </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    name: 'app',
    computed: {
        ...mapGetters([ 'isLogged', 'location' ])
    },
    methods: {
        isActiveNavItem: function( location ) {
            return this.location === location
        }
    }
}
</script>
