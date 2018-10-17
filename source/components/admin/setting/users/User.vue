<template lang="html">
    <div class="admin" id="user">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm" v-if="user.fname && user.lname">
                    <h2 class="display-6">{{user.fname}} {{user.lname}}</h2>
                </div>
                <div class="col-sm" v-else-if="user.fname">
                    <h2 class="display-6">{{user.fname}}</h2>
                </div>
                <div class="col-sm" v-else-if="user.lname">
                    <h2 class="display-6">{{user.lname}}</h2>
                </div>
                <div class="col-sm" v-else>
                    <h2 class="display-6">{{user.username}}</h2>
                </div>
            </div>
            <form id="userForm" class="needs-validation" :class="{ 'needs-validation': !valid }"novalidate>
                <div class="form-group">
                    <label for="inputFname">First Name</label>
                    <input type="text" class="form-control" id="inputFname"  placeholder="Enter name" v-model="user.fname" @blur="update(user)" @keyup.enter="update(user)">
                </div>
                <div class="form-group">
                    <label for="inputLname">Surename</label>
                    <input type="text" class="form-control" id="inputLname"  placeholder="Enter name" v-model="user.lname" @blur="update(user)" @keyup.enter="update(user)">
                </div>
                <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input type="text" class="form-control" id="inputUsername"  placeholder="Enter name" v-model="user.username" @blur="update(user)" @keyup.enter="update(user)">
                </div>
                <div class="form-group">
                    <label for="inputEmail">Email Address</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required v-model="user.email" @blur="update(user)" @keyup.enter="update(user)">
                    <div class="invalid-feedback"> You must enter a email address, this will be used on login.</div>
                </div>
                    <div class="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" required v-model="newPassword" @blur="update(user)" @keyup.enter="update(user)">
                </div>
                <div class="form-group">
                    <label for="inputImg">Image Source</label>
                    <input type="text" class="form-control" id="inputImg"  placeholder="Enter link to image" v-model="user.img_src" @blur="update(user)" @keyup.enter="update(user)">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Security Level</label>
                    <select class="form-control" id="exampleFormControlSelect1" v-model="user.sec_lv">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <button type="button" class="btn btn-danger" @click="removeUser(user)">Delete</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'user',
    data() {
        return {
            newPassword:''
        }
    },
    computed: {
        ...mapGetters([ 'users' ]),
        user() { return this.users.find(user => user._id === this.$route.query.user_id ) || null },
        valid() {
            return this.user.email !== '' && this.user.password !== ''
        }
    },
    methods: {
        update( user ) {
            this.$api.update( 'user', user )
        },
        removeUser: function( user ) {
            this.$api.del( 'user', user )
            this.$router.push('users')
        },
    },
    mounted() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="css">
</style>
