<template lang="html">
    <div id="users" class="admin">

        <!-- Modal -->
        <div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModallLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="userModalLabel">Add new user</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col-12">
                                <form id="userForm" class="needs-validation" :class="{ 'needs-validation': !valid }"novalidate>
                                    <div class="form-group">
                                        <label for="inputFname">First Name</label>
                                        <input type="text" class="form-control" id="inputFname"  placeholder="Enter name" v-model="newUser.fname">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputLname">Surename</label>
                                        <input type="text" class="form-control" id="inputLname"  placeholder="Enter name" v-model="newUser.lname">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputUsername">Username</label>
                                        <input type="text" class="form-control" id="inputUsername"  placeholder="Enter name" v-model="newUser.username">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail">Email Address</label>
                                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required v-model="newUser.email">
                                        <small id="emailHelp" class="form-text text-muted">Enter your email, will also be used to login.</small>
                                        <div class="invalid-feedback"> You must enter a email address, this will be used on login.</div>
                                    </div>
                                        <div class="form-group">
                                        <label for="inputPassword">Password</label>
                                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" required v-model="newUser.password">
                                    </div>
                                    <div class="form-group">
                                        <label for="inputImg">Image Source</label>
                                        <input type="text" class="form-control" id="inputImg"  placeholder="Enter link to image" v-model="newUser.img_src">
                                        <small id="emailHelp" class="form-text text-muted">Copy a url to an image and paste it here.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1">Security Level</label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="newUser.sec_lv">
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
                                </form>
                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-lg btn-primary" :class="{ 'btn-disabled' : !valid }" type="submit" @click="addUser" form="userForm" :disabled="!valid">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
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
                <div class="col-sm" v-else>
                    <router-link :to="{ name: 'user', query: { user_id: user._id } }">
                        {{user.username}}
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#userModal" >Add User</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'users',
    data() {
        return {
            newUser: {
                fname: '',
                lname: '',
                username: '',
                email: '',
                password: '',
                img_src: '',
                sec_lv: null
            }
        }
    },
    computed: {
        ...mapGetters(['users']),
        valid() {
            return this.newUser.email !== '' && this.newUser.password !== ''
        }
    },
    methods: {
        addUser: function () {
            const valid = this.$api.save( 'user', this.newUser )
            if( valid === undefined ) {
                Object.keys(this.newUser).forEach( key => {
                    this.newUser[key] = ''
                })
                $('#userModal').modal('hide')
            } else {
                this.valid = false
            }
        }
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
