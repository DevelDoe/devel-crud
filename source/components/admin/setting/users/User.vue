<template lang="html">
    <div class="admin" id="user">

        <!-- deleteModal -->
        <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModallLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModallLabel">Delete</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </div>
                    <div class="modal-body text-center">
                        <form class="form-signin" id="loginForm" onsubmit="return false;">
                            <h1>Warnign</h1>
                            <p>Are you shure you want to delete <span v-if="user.fname && user.lname">{{user.fname}} {{user.lname}}</span><span v-else-if="user.username">{{user.username}}</span><span v-else>{{user.email}}</span>! This action can not be undone!

                            </p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-lg btn-danger btn-block" type="submit" form="loginForm" @click="removeUser(user)" >DELETE</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row heading">
                <i class="fa fa-angle-left" aria-hidden="true" @click="$router.go(-1)"></i>
                <i class="fa fa-angle-right" aria-hidden="true" @click="$router.go(1)"></i>
                <div class="col-sm" v-if="user.fname && user.lname">
                    <h2 class="display-6">{{user.fname}} {{user.lname}}</h2>
                </div>
                <div class="col-sm" v-else-if="user.username">
                    <h2 class="display-6">{{user.username}}</h2>
                </div>
                <div class="col-sm" v-else>
                    <h2 class="display-6">{{user.email}}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <h3>Data</h3>
                    <form id="userForm" class="needs-validation" :class="{ 'needs-validation': !valid }"novalidate onsubmit="return false;">
                        <div class="form-group">
                            <label for="inputFname">First Name</label>
                            <input type="text" class="form-control" id="inputFname"  placeholder="Enter name" v-model="user.fname"  >
                        </div>
                        <div class="form-group">
                            <label for="inputLname">Surename</label>
                            <input type="text" class="form-control" id="inputLname"  placeholder="Enter name" v-model="user.lname"  >
                        </div>
                        <div class="form-group">
                            <label for="inputUsername">Username</label>
                            <input type="text" class="form-control" id="inputUsername"  placeholder="Enter name" v-model="user.username"  >
                        </div>
                        <div class="form-group">
                            <label for="inputEmail">Email Address</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required v-model="user.email"  >
                            <div class="invalid-feedback"> You must enter a email address, this will be used on login.</div>
                        </div>
                            <div class="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Password" required v-model="user.password"  >
                        </div>
                        <div class="form-group">
                            <label for="inputImg">Image Source</label>
                            <input type="text" class="form-control" id="inputImg"  placeholder="Enter link to image" v-model="user.img_src"  >
                        </div>
                        <div class="form-group" v-if="logged.sec_lv < user.sec_lv || logged.sec_lv === '0'">
                            <label for="exampleFormControlSelect1">Security Level</label>
                            <select class="form-control"  v-model="user.sec_lv">
                                <option v-for="(level, i) in accelSecLv" :value="i" >{{level}}</option>
                            </select>
                        </div>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                        <button type="button" class="btn btn-primary" @click="update(user)">Save</button>
                    </form>
                </div>
                <div class="col-4">
                    <div class="row padding">
                        <div class="col">
                            <h3>Applications</h3>
                            <button type="button" class="btn btn-dark" :class="{ 'active': user.applications.indexOf('tasks') !== -1 }" @click="toggleApplication('tasks')">Tasks</button>
                        </div>
                    </div>
                    <div class="row administration">
                        <div class="col">
                            <h3>Administration</h3>
                            <button type="button" class="btn btn-dark" :class="{ 'active': user.administrations.indexOf('data') !== -1 }" @click="toggleAdministrations('data')">Data</button>
                            <button type="button" class="btn btn-dark" :class="{ 'active': user.administrations.indexOf('users') !== -1 }" @click="toggleAdministrations('users')">Users</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'user',
    data() {
        return {
            newPassword:'',
            sec_lvs: [ 'root', 'admin', 'owner', 'operator', 'user', 'unknown','unknown','unknown','unknown', 'guest' ]
        }
    },
    computed: {
        ...mapGetters([ 'users', 'logged' ]),
        user() { return this.users.find(user => user._id === this.$route.query.user_id ) || null },
        valid() {
            return this.user.email !== '' && this.user.password !== ''
        },
        accelSecLv() {
            const lv = this.logged.sec_lv
            if(lv === '0') return this.sec_lvs
            let acces = []
            this.sec_lvs.forEach( (lev, i) => {
                 if(i > lv)acces.push(lev)
            })
            return acces
        }
    },
    methods: {
        update( user ) {
            this.$api.update( 'user', user )
            if( this.logged._id === user._id ) {
                this.$store.dispatch('delLogged')
                this.$store.dispatch('setLogged', this.user)
            }
        },
        removeUser: function( user ) {
            this.$api.del( 'user', user )
            $('#deleteModal').modal('hide')
            this.$router.push('users')
        },
        toggleApplication( app ) {
            const index = this.user.applications.indexOf( app )
            if(index !== -1) this.user.applications.splice(index, 1)
            else this.user.applications.push( app )
        },
        toggleAdministrations( app ) {
            const index = this.user.administrations.indexOf( app )
            if(index !== -1) this.user.administrations.splice(index, 1)
            else this.user.administrations.push( app )
        }
    }
}
</script>

<style lang="css">
</style>
