<template lang="html">
    <div class="admin" id="user">

        <div class="container-fluid">
            <div class="row heading">
                <div class="col-sm">
                    <i class="fa fa-angle-left" aria-hidden="true" @click="$router.go(-1)"></i>
                    <i class="fa fa-angle-right" aria-hidden="true" @click="$router.go(1)"></i>
                    <h2 class="display-6">User</h2>
                </div>

            </div>

            <gForm :schema="'user'" :data="user" />

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'user',
    computed: {
        ...mapGetters([ 'users', 'logged' ]),
        user() {
            if(this.$route.query.user_id)
                return this.users.find(user => user._id === this.$route.query.user_id ) || null
            else {
                return {
                    fname: '',
                    lname: '',
                    username: '',
                    email: '',
                    password: '',
                    img_src: '',
                    sec_lv: '',
                    applications: [],
                    administrations: []
                }
            }
        },
    }
}
</script>
