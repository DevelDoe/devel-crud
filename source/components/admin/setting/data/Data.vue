<template lang="html">
    <div id="data" class="admin">

        <!-- Modal -->
        <div class="modal fade" id="resourceModal" tabindex="-1" role="dialog" aria-labelledby="resourcModallLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="resourcModalLabel">Add new resource</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                    </div>
                    <div class="modal-body">

                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <label for="resource">Name</label>
                                    <input type="text" class="form-control" id="resource" placeholder="Resource name" autocomplete="off" v-model="newResource.name" @keyup.enter="updateAppName" @blur="updateAppName">
                                    <small id="nameHelp" class="form-text text-muted">Enter the name of the resource you want to add.</small>
                                </div>
                            </div>
                        </div>

                        <div v-for="(field, i) in newResource.fields" class="fields" >
                            <div class="row">
                                <div class="col">
                                    <div class="form-row align-items-center">
                                        <div class="col-sm-8">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="fieldName" placeholder="Field name" autocomplete="off" v-model="field.name">
                                            </div>
                                        </div>
                                        <div class="col-sm-3 ">
                                            <div class="form-group">
                                                <select v-model="field.type" class="form-control" id="typeSelect">
                                                    <option value="" selected class="selectPlaceholder">Type</option>
                                                    <option v-for="type in types" :value="type" >{{type}}</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-auto ">
                                            <i class="fa fa-trash-o" aria-hidden="true" @click="resource.fields.splice( i , 1)"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="form-row align-items-left checkboxes">
                                <div class="col-auto ">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="requiredCheck" v-model="field.required">
                                        <label class="form-check-label" for="requiredCheck">Required</label>
                                    </div>
                                </div>
                                <div class="col-auto ">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="uniqueCheck" v-model="field.unique">
                                        <label class="form-check-label" for="requiredCheck">Unique</label>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-lg  btn-block" @click="addField" >add field</button>
                        <button class="btn btn-lg btn-primary" @click="saveResource" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2 class="display-6">Data</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md-7">
                    <h4 class="mb-3">General settings</h4>
                    <div class="mb-3">
                        <label for="appName">Application Name</label>
                        <input class="form-control" autocomplete="off" v-model="newAppName" @keyup.enter="updateAppName" @blur="updateAppName">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">

                    <div class="row">
                        <div class="col">
                            <h4 class="mb-3">Data Schema Types</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-7">
                            <div v-for="(resource, i) in resources" :key="'resource'+i">
                                <div class="accordion" :id="'accordionResource'+ i">
                                  <div class="card">
                                    <div class="card-header" :id="'heading'+ i">
                                      <h5 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" :data-target="'#collapse'+i" aria-expanded="true" aria-controls="collapseOne">
                                          {{ resource.name }}
                                        </button>
                                        <i class="fa fa-trash-o" aria-hidden="true" @click="$api.del( 'resource', resource )"></i>
                                      </h5>
                                    </div>
                                    <div :id="'collapse'+i" class="collapse" :aria-labelledby="'heading'+ i" :data-parent="'#accordionResource'+ i">
                                      <div class="card-body text-left">
                                          {{resource}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#resourceModal" >Add Resource</button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'data-com',
    data() {
        return {
            newAppName: '',
            newResource : {
                name : '',
                fields: [],
            },
            types: [ 'String', 'Boolean', 'Number', 'Date', 'Buffer', 'Mixed', 'ObjectId', 'Array', 'Decimal128', 'Map' ]
        }
    },
    computed: {
        ...mapGetters([ 'appName', 'resources' ])
    },
    methods: {
        updateAppName: function() {
            const value = this.newAppName && this.newAppName.trim()
            if( !value ) return
            this.$store.dispatch( 'setAppName', value )
        },
        addField( field ) {
            this.newResource.fields.push({
                name: '',
                type: '',
                unique: false,
                required: false
            })
        },
        saveResource() {
            this.$api.save( 'resource', this.newResource )
            this.newResource.name = '',
            this.newResource.fields = []
        }
    },
    mounted() {
        this.newAppName = this.appName
        this.$store.dispatch( 'setLocation', 'data' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>

<style lang="css">
</style>
