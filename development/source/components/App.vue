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

    <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top" id="home">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> {{ appName }} </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li v-on:click="setActiveNavItem('home')" :class="{ 'nav-item': true, active: isActiveNavItem('home') }">
                        <a class="nav-link" href="#">home </a>
                    </li>
                    <li v-on:click="setActiveNavItem('stack')" :class="{ 'nav-item': true, active: isActiveNavItem('stack') }">
                        <a class="nav-link" href="#stack">stack </a>
                    </li>
                    <li v-on:click="setActiveNavItem('about')" :class="{ 'nav-item': true, active: isActiveNavItem('about'), }">
                        <a class="nav-link" href="#about">about </a>
                    </li>
                    <li v-on:click="setActiveNavItem('code')" :class="{ 'nav-item': true, active: isActiveNavItem('code') }">
                        <a class="nav-link" href="#code">code </a>
                    </li>
                    <li v-on:click="setActiveNavItem('connect')" :class="{ 'nav-item': true, active: isActiveNavItem('connect') }">
                        <a class="nav-link" href="#connect">connect </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>




    <keep-alive>
        <router-view></router-view>
    </keep-alive>

</div>
</template>

<script>
import Home from './Home.vue'

export default {
    name: 'app',
    props: [ 'appName' ],
    data() {
        return {
            activeNavItem: 'home',
            activeSlideItem: '0'
        }
    },
    methods: {
        isActiveNavItem: function(item) {
            return this.activeNavItem === item
        },
        setActiveNavItem: function(item) {
            this.activeNavItem = item
        }
    },
    components: {
        Home
    }
}
</script>
