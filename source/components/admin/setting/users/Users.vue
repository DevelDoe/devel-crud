<template lang="html">
    <div id="users" class="admin">

        <div class="container-fluid">
            <div class="row heading">
                <div class="col-sm">
                    <i class="fa fa-angle-left" aria-hidden="true" @click="$router.go(-1)"></i>
                    <i class="fa fa-angle-right" aria-hidden="true" @click="$router.go(1)"></i>
                    <h2 class="display-6">Users</h2>
                </div>
            </div>
            <div class="row" v-for="(user, i) in users" :key="'user'+i">
                <div class="col-sm" v-if="user.fname && user.lname">
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.fname}} {{user.lname}}
                    </router-link>
                </div>
                <div class="col-sm" v-else-if="user.fname">
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.fname}}
                    </router-link>
                </div>
                <div class="col-sm" v-else-if="user.lname">
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.lname}}
                    </router-link>
                </div>
                <div class="col-sm" v-else-if="user.username">
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.username}}
                    </router-link>
                </div>
                <div class="col-sm" v-else>
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.email}}
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-primary"  >
                        <router-link :to="{ name: 'user', params: {  }  }">
                            Add User
                        </router-link>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'users',
    computed: {
        ...mapGetters(['users','logged']),
    },
    mounted() {
        this.newAppName = this.appName
        this.$store.dispatch( 'setLocation', 'users' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="css">
</style>
