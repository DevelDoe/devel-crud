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

        <DevelToast :toast="toast"/>

        <transition name="drawer">
        <div :class="{ 'drawer': token }" v-if="token">
            <nav class="navbar  navbar-dark bg-light sticky-top" id="home">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> Admin</a>
                    <i class="fa fa-sign-out" aria-hidden="true" @click="$store.dispatch('delToken'), $router.push('/')" title="logout"></i>
                </div>
            </nav>
            <div class="container-fluid">
                <ul class="nav nav-stacked">

                    <li class="nav-caption">Site</li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('home') || isActiveNavItem('stack') || isActiveNavItem('about') || isActiveNavItem('code') || isActiveNavItem('connect') }">
                        <a href="/#/"> Landing </a>
                    </li>

                    <li class="nav-caption">Dashboards</li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('overview') }">
                        <a href="/#/admin/overview"> Overview </a>
                    </li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('todo') }">
                        <a href="/#/admin/todo"> Todo </a>
                    </li>

                    <li class="nav-caption">Settings</li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('data') }">
                        <a href="/#/admin/data">Data</a>
                    </li>
                    <li :class="{ 'nav-item': true, active: isActiveNavItem('users') }">
                        <a href="/#/admin/users">Users</a>
                    </li>
                </ul>
            </div>
        </div>
        </transition >
        <div :class="{ 'content': true, 'admin-open': token }">
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
        ...mapGetters([ 'token', 'location', 'toast' ])
    },
    methods: {
        isActiveNavItem: function( location ) {
            return this.location === location
        }
    }
}
</script>
