<template lang="html">
    <div class="admin" id="user">

        <div class="container-fluid">
            <div class="row heading">
                <div class="col-sm">
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
                const user = {
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
                return user
            }
        },
    }
}
</script>
