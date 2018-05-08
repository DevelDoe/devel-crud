<!--
@Author: Andree Ray <andreeray>
@Date:   2018-01-13T21:50:46+01:00
@Email:  andreeray@live.com
@Filename: Home.vue
@Last modified by:   Morgan Andree Ray
@Last modified time: 08-05-2018
-->
<template>
    <div>
        {{ msg }}
        {{ message }}
        <button @click="changeMessage('dispatch')">Change Message</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name: 'home',
    props: [ 'msg' ],
    computed: {
        ...mapGetters([
            'message'
        ])
    },
    methods: {
        changeMessage( payload ) {
            return this.$store.dispatch('changeMessage', payload)
        }
    }
}
</script>
