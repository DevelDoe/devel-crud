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
        <keep-alive>
            <router-view v-bind:msg="msg"></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
    name: 'app',
    props: [ 'msg' ],
    components: {
        Home
    }
}
</script>
