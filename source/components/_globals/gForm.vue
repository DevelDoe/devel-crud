<template lang="html">
    <div class="container-fluid">

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
                            <p>Are you shure you want to delete {{schema}}! This action can not be undone!

                            </p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-lg btn-danger btn-block" type="submit" form="loginForm" @click="remove(data)" >DELETE</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="row heading">
            <div class="col">
                <h3>Data</h3>
                <form id="userForm" class="needs-validation" :class="{ 'needs-validation': !valid }" novalidate onsubmit="return false;">
                    <span  v-for="(item, i) in fields" :key="i">
                        <div class="form-group" v-if="item.inputType === 'text'">
                            <label >{{item.name}}</label>
                            <input type="text" class="form-control" :id="item.name"  :placeholder="item.name" v-model="data[item.name]">
                        </div>
                        <div class="form-group" v-if="item.inputType === 'password'">
                            <label >{{item.name}}</label>
                            <input type="password" class="form-control" :id="item.name"  :placeholder="item.name" v-model="data[item.name]">
                        </div>
                        <div class="form-group" v-if="item.inputType === 'email'">
                            <label >{{item.name}}</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" required v-model="data[item.name]"  >
                            <div class="invalid-feedback"> You must enter a email address, this will be used on login.</div>
                        </div>
                        <div class="form-group" v-if="item.inputType === 'sec_lv' && ( logged.sec_lv < data.sec_lv || logged.sec_lv === '0' ) ">
                            <label for="exampleFormControlSelect1">Security Level</label>
                            <select class="form-control"  v-model="data.sec_lv">
                                <option v-for="(level, i) in accelSecLv" :value="i" >{{level}}</option>
                            </select>
                        </div>
                    </span>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                    <button type="button" class="btn btn-primary" @click="update(data)">Save</button>
                </form>
            </div>
            <div class="col-4 toggleFeatures" v-if="data.applications" >
                <div class="row padding">
                    <div class="col">
                        <h3>Applications</h3>
                        <span v-for="(app, i) in apps">
                            <button type="button" class="btn btn-dark" :class="{ 'active': data.applications.indexOf(app) !== -1 }" @click="toggleApplication(app)">{{app}}</button>
                        </span>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <h3>Administration</h3>
                        <span v-for="(admin, i) in admins">
                            <button type="button" class="btn btn-dark" :class="{ 'active': data.administrations.indexOf(admin) !== -1 }" @click="toggleAdministrations(admin)">{{admin}}</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'gForm',
    props: [ 'schema', 'data' ],
    data() {
        return {
            valid: true,
            newPassword:'',
            sec_lvs: [ 'root', 'admin', 'owner', 'operator', 'user', 'unknown','unknown','unknown','unknown', 'guest' ],
            apps: [ 'tasks', 'notes' ],
            admins: [ 'users', 'data' ]
        }
    },
    computed: {
        ...mapGetters([ 'logged' ]),
        fields() {
            let res = this.$store.getters.resources.find( resource => resource.name === this.schema )
            return res.fields
        },
        accelSecLv() {
            const loggedLevel = this.logged.sec_lv
            if(loggedLevel === '0') return this.sec_lvs
            let acces = []
            this.sec_lvs.forEach( (lev, i) => {
                 if(i > loggedLevel)acces.push(lev)
            })
            return acces
        }
    },
    methods: {
        toggleApplication( app ) {
            const index = this.data.applications.indexOf( app )
            if(index !== -1) this.data.applications.splice(index, 1)
            else this.data.applications.push( app )
        },
        toggleAdministrations( app ) {
            const index = this.data.administrations.indexOf( app )
            if(index !== -1) this.data.administrations.splice(index, 1)
            else this.data.administrations.push( app )
        },
        update( data ) {
            this.$api.update( this.schema, data )
            if( this.logged._id === data._id ) {
                this.$store.dispatch('delLogged')
                this.$store.dispatch('setLogged', this.data)
            }
            this.$router.push(`${this.schema}s`)
        },
        remove: function( data ) {
            this.$api.del( this.schema, data )
            $('#deleteModal').modal('hide')
            this.$router.push(`${this.schema}s`)
        }
    }
}
</script>

<style lang="scss">
    .toggleFeatures {
        button {
            margin-left: 10px;
        }
    }
</style>
