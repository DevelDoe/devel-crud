<template lang="html">
    <div id="gform" class="container-fluid">

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
                            <p>Are you shure you want to delete {{schema}}!
                            This action can not be undone!</p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-lg btn-danger btn-block" type="submit" form="loginForm" @click="remove(data)" >DELETE</button>
                    </div>
                </div>
            </div>
        </div>


        <div class="row ">
            <div class="col">
                <h3>Data</h3>
                <form id="userForm" class="needs-validation" :class="{ 'needs-validation': !valid }" novalidate onsubmit="return false;">
                    <span  v-for="(item, i) in fields" :key="i">
                        <div class="form-group" v-if="item.inputType === 'text'">
                            <label >{{item.label}}</label>
                            <input type="text" class="form-control" :id="item.name"  :placeholder="item.label" v-model="data[item.name]">
                        </div>
                        <div class="form-group" v-if="item.inputType === 'password'">
                            <label >{{item.label}}</label>
                            <input type="password" class="form-control" :id="item.name"  :placeholder="item.label" v-model="data[item.name]">
                        </div>
                        <div class="form-group" v-if="item.inputType === 'email'">
                            <label >{{item.label}}</label>
                            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" :placeholder="item.label" required v-model="data[item.name]"  >
                            <div class="invalid-feedback"> You must enter a email address, this will be used on login.</div>
                        </div>
                        <div class="form-group" v-if="item.inputType === 'sec_lv' && data._id !== logged._id && logged.sec_lv < data.sec_lv ">
                            <label>{{item.label}}</label>
                            <select class="form-control"  v-model="data.sec_lv">
                                <option v-for="(key, i) in Object.keys(accelSecLv)" :value="accelSecLv[key]" >{{key}}</option>
                            </select>
                        </div>
                        <!-- fileupload -->
                        <span v-if=" item.inputType === 'image'">
                            <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
                                <div class="dropbox">
                                    <input type="file" :name="item.name" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
                                    <p v-if="isInitial"> Drag your avatar here to begin<br> or click to browse </p>
                                    <p v-if="isSaving" class="uploading"> Uploading your avatar,<br> please stand by... </p>
                                </div>
                            </form>
                            <!--SUCCESS-->
                            <transition name="fade">
                            <div v-if="isSuccess" class="dropbox-success">
                                <h2>Uploaded {{ uploadedFile.originalName }} successfully.</h2>
                                <img :src="uploadedFile.img_src"  :alt="uploadedFile.originalName">
                                <p> <a href="javascript:void(0)" @click="reset()">Upload again</a> </p>
                            </div>
                            <!--FAILED-->
                            <div v-if="isFailed" class="dropbox-fail">
                                    <h2>Uploaded failed.</h2>
                                    <p>{{uploadError}} <br> <a href="javascript:void(0)" @click="reset()">Try again</a> </p>
                            </div>
                            </transition>
                        </span>

                        <!-- <form enctype="multipart/form-data" novalidate v-if="item.inputType === 'image' && (isInitial || isSaving || isSuccess)">
                            <div class="dropbox">
                                <input type="file" multiple :name="item.name" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length" accept="image/*" class="input-file">
                                <p v-if="isInitial"> Drag your file(s) here to begin<br> or click to browse </p>
                                <p v-if="isSaving"> Uploading {{ fileCount }} files... </p>
                            </div>
                        </form> -->
                    </span>
                </form>

            </div>
            <div class="col-4 toggleFeatures" v-if="data.applications" >
                <div class="row padding">
                    <div class="col">
                        <h3>Applications</h3>
                        <span v-for="(app, i) in apps">
                            <button type="button" class="btn btn-dark" :class="{ 'active': data.applications.indexOf(app) !== -1 } " @click="toggleApplication(app)">{{app}}</button>
                        </span>
                    </div>
                </div>
                <div class="row ">
                    <div class="col">
                        <h3>Administration</h3>
                        <span v-for="(admin, i) in admins">
                            <button type="button" class="btn btn-dark" :class="{ 'active': data.administrations.indexOf(admin) !== -1 } " @click="toggleAdministrations(admin)">{{admin}}</button>
                        </span>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col" v-if="data._id">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">Delete</button>
                <button type="button" class="btn btn-primary" @click="update()">Save</button>
            </div>
            <div class="col" v-else>
                <button type="button" class="btn btn-primary" @click="save()">Save</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
export default {
    name: 'gForm',
    props: [ 'schema', 'data' ],
    data() {
        return {
            valid: true,
            newPassword:'',
            sec_lvs:  { root: 0, admin: 1, owner: 2, operator: 3, super: 4, user: 5, pleab: 6, anonymous: 7, special: 8, guest: 9 },
            apps: [ 'tasks', 'notes' ],
            admins: [ 'users', 'data' ],
            uploadedFile: {},
            currentStatus: null,
            uploadError: ''
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
            let acces = {}
            for(var prop in this.sec_lvs) {
                if(this.sec_lvs[prop] >= loggedLevel){
                    acces[prop] = this.sec_lvs[prop]
                }
            }
            return acces
        },
        isInitial() {
            return this.currentStatus === STATUS_INITIAL;
        },
        isSaving() {
            return this.currentStatus === STATUS_SAVING;
        },
        isSuccess() {
            return this.currentStatus === STATUS_SUCCESS;
        },
        isFailed() {
            return this.currentStatus === STATUS_FAILED;
        }
    },
    methods: {
        toggleApplication( app ) {
            if(this.data.applications.indexOf( app ) !== -1) this.data.applications.splice(this.data.applications.indexOf( app ), 1)
            else this.data.applications.push( app )
            this.$forceUpdate()
        },
        toggleAdministrations( admin ) {
            if(this.data.administrations.indexOf( admin ) !== -1) this.data.administrations.splice(this.data.administrations.indexOf( admin ), 1)
            else this.data.administrations.push( admin )
            this.$forceUpdate()
        },
        update() {
            if( this.logged._id === this.data._id ) {
                this.$store.dispatch('delLogged')
                this.$store.dispatch('setLogged', this.data)
            }
            const valid = this.$api.update( this.schema, this.data )
            if( valid === undefined ) {
                this.$router.push(`${this.schema}s`)
            } else {
                this.valid = false
            }

        },
        remove: function() {
            this.$api.del( this.schema, this.data )
            $('#deleteModal').modal('hide')
            this.$router.push(`${this.schema}s`)
        },
        save: function () {
            const valid = this.$api.save( this.schema, this.data )
            if( valid === undefined ) {
                this.$router.push(`${this.schema}s`)
            } else {
                this.valid = false
            }
        },
        reset() {
            // reset form to initial state
            this.currentStatus = STATUS_INITIAL
            this.uploadedFiles = []
        },
        upload(formData) {
            this.currentStatus = STATUS_SAVING
            this.$api.upload(formData)
            .then( data => {
                if(data.err) {
                    this.currentStatus = STATUS_FAILED
                    this.uploadError = data.err
                    return
                }
                this.data.img_src = data.img_src
                this.uploadedFile = data
                this.currentStatus = STATUS_SUCCESS
            }).catch(err => {
                this.currentStatus = STATUS_FAILED
            })
        },
        filesChange(fieldName, fileList) {
            const formData = new FormData()
            if (!fileList.length) return
            Array.from(Array(fileList.length).keys()).map(x => {
                formData.append(fieldName, fileList[x], fileList[x].name)
            })
            this.upload(formData)
        }
    },
    mounted() {
      this.reset();
    }
}
</script>

<style lang="scss">
#gform {
    .toggleFeatures {
        button {
            margin-left: 10px;
        }
    }
    .dropbox {
        outline: 2px dashed grey; /* the dash box */
        outline-offset: -10px;
        color: #ccc;
        min-height: 150px;
        position: relative;
        cursor: pointer;

        &:hover {
            background: #5c6577; /* when mouse over to the drop zone, change color */
        }

        p {
            font-size: 1.2em;
            text-align: center;
            padding: 54px 0;
        }
    }
    .dropbox-success {
        color: #96d696;
        a {
            z-index: 9999;
        }
        img {
            max-width: 50px;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
    .dropbox-fail {
        color: #965252;
    }
    .input-file {
        opacity: 0; /* invisible but it's there! */
        width: 100%;
        height: 150px;
        position: absolute;
        cursor: pointer;
    }
    .uploading {
        font-size: 1.2em;
        text-align: center;
        padding: 54px 100px;
        color: #777;
        -moz-animation-duration: 400ms;
        -moz-animation-name: blink;
        -moz-animation-iteration-count: infinite;
        -moz-animation-direction: alternate;

        -webkit-animation-duration: 400ms;
        -webkit-animation-name: blink;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;

        animation-duration: 400ms;
        animation-name: blink;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @-moz-keyframes blink {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @-webkit-keyframes blink {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    @keyframes blink {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }
}
</style>
