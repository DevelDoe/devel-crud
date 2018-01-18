<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-18T21:23:04+01:00
@Email:  andreeray@live.com
@Filename: App.vue
@Last modified by:   andreeray
@Last modified time: 2018-01-18T21:25:30+01:00
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
    props: [ 'msg' ],
    components: {
        Home
    }
}
</script>
