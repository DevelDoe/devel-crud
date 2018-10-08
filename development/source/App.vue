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

    <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> DevelStrap VueJS </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li v-on:click="setActiveNavItem('home')" :class="{ 'nav-item': true, active: isActiveNavItem('home') }">
                        <a class="nav-link" href="#">Home </a>
                    </li>
                    <li v-on:click="setActiveNavItem('about')" :class="{ 'nav-item': true, active: isActiveNavItem('about') }">
                        <a class="nav-link" href="#">About </a>
                    </li>
                    <li v-on:click="setActiveNavItem('services')" :class="{ 'nav-item': true, active: isActiveNavItem('services'), }">
                        <a class="nav-link" href="#">Services </a>
                    </li>
                    <li v-on:click="setActiveNavItem('team')" :class="{ 'nav-item': true, active: isActiveNavItem('team') }">
                        <a class="nav-link" href="#">Team </a>
                    </li>
                    <li v-on:click="setActiveNavItem('connect')" :class="{ 'nav-item': true, active: isActiveNavItem('connect') }">
                        <a class="nav-link" href="#">Connect </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div id="slides" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./assets/img/background.png" >
                <div class="carousel-caption">
                    <h1 class="display-2">DevelStrap VueJS</h1>
                    <h3>starting point for your VueJS projects.</h3>
                    <button type="button" class="btn btn-outline-light btn-lg">VIEW DEMO</button>
                    <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="./assets/img/background2.png" >
            </div>
            <div class="carousel-item">
                <img src="./assets/img/background3.png" >
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row jumbotron">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p class="lead">This project can be used as a starting point for Vue web app development. It quickly straps all the needs for a complete Vue web app solution. Feel free to clone the repo over at GitHub</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-9 col-xl-2">
                <a href="https://github.com/DevelDoe/devel-vue"><button type="button" class="btn btn-outline-secondary btn-lg">GitHub</button> </a>
            </div>
        </div>
    </div>

    <div class="container-fluid padded">
        <div class="row welcome text-center">
            <div class="col-12">
                <h1 class="display-4">Built with ease.</h1>
            </div>
            <div class="col-12">
                <p class="lead">Welcome to my VueJS strap application!
                DevelStrap VueJS is a free and open-source front-end Vue application that you can use as a starting point for your VueJS applications.</p>
            </div>
        </div>
    </div>

    <div class="container-fluid padding">
        <div class="row text-center padding">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img src="https://vuejs.org/images/logo.png" alt="" height="42" width="42">
                <h3>VueJS</h3>
                <p>The Progressive JavaScript Framework.</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img src="https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png" alt="" height="42" width="42">
                <h3>VueX</h3>
                <p>Centralized store for all the components in an application</p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img src="https://avatars1.githubusercontent.com/u/2105791?v=3&s=400" alt="" height="42" width="42">
                <h3>Webpack</h3>
                <p>The most popular module bundler. </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" alt="" height="42" width="42">
                <h3>Babel</h3>
                <p>The next generation JavaScript compiler. </p>
            </div>
            <div class="col-xs-12 col-md-4">
                <img src="https://cdn-images-1.medium.com/max/2000/1*9HanDsRU11ZMsgDGJwN96w.png" alt="" height="42" width="42">
                <h3>Bootstrap</h3>
                <p>The most popular HTML, CSS, and JS library in the world.</p>
            </div>
        </div>
        <hr class="my-4">
    </div>

    <hr class="my-4">
    <h3>Install</h3>
    <code>npm install</code>
    <hr class="my-4">

    <h3>Build</h3>
    <code>npm run dev</code><br/>
    <code>npm run dist</code>
    <hr class="my-4">

    <h3>Release Log</h3>
    <ul>
        <li>1.0 skeleton</li>
        <li>1.1 Vue Router</li>
        <li>1.2 VueX</li>
        <li>1.3 Bootstrap</li>
    </ul>
    <hr class="my-4">

    <h3>Backlog</h3>
    <ul>
        <li>Authentication & Authorization</li>
        <li>File Uploader</li>
    </ul> -->

    <keep-alive>
        <!-- <router-view v-bind:msg="msg"></router-view> -->
    </keep-alive>

</div>
</template>

<script>
import Home from './components/Home.vue'

export default {
    name: 'app',
    props: ['msg'],
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
