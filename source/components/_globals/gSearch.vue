<template lang="html">
    <div id="gSearch" v-if="showSearch" v-cloak>
        <div class="search">
            <input type="search"  value="" placeholder="Search" class="search-input" ref='search' autofocus v-model="search" @keydown.esc="$store.dispatch('toggleSearch'), search = ''">
        </div>
        <transition name="fade" mode="out-in" >
        <div class="results" v-show="search">
            <div v-for="(obj, i) in filterData" class="result">
                <span v-if="obj._id"><a :href="'#'+obj.path.substr(0, obj.path.length-1)+'?user_id='+obj._id" @click="$store.dispatch('toggleSearch'), search = ''">{{obj.field}}</a></span>
                <span v-else><a :href="'#'+obj.path" @click="$store.dispatch('toggleSearch'), search = ''">{{obj.field}}</a></span>
            </div>
            <div class="noResults" v-show="filterData.length == 0">
                No results...
            </div>
        </div>
        </transition>
        <i class="fa fa-times" aria-hidden="true" @click="$store.dispatch('toggleSearch'), search = ''"></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from '../../util/routes'
export default {
    name: 'gSearch',
    data() {
        return {
            searching: false,
            search: ''
        }
    },
    computed: {
        ...mapGetters( [ 'logged', 'showSearch' ]),
        data() {
            var resources = this.$store.getters.resources
            var list = []
            for (var i = 0, len = resources.length; i < len; i++) {
                var arr = this.$store.getters[`${resources[i].name}s`]
                for(var j = 0, l = arr.length; j < l; j++) {
                    resources[i].fields.forEach(field => {
                        var route = routes.find( route => { return route.name === `${resources[i].name}s` })
                        if(field.search) {
                            var newObj = {}
                            for(var key in arr[j]) {
                                // is the field the searchable field
                                if(key === field.name ) {
                                    // if there an user associated to this field, is so check if its the current user and ad only those
                                    if( (arr[j].user_id && arr[j].user_id === this.logged._id) || !arr[j].user_id) {
                                        newObj['field'] = arr[j][key]
                                    } else {
                                        newObj['field'] = ''
                                    }
                                }
                                // is this the key id and has this resource a details page?
                                if(key === '_id' && resources[i].details) {
                                    newObj[key] = arr[j][key]
                                }
                                newObj['path'] = route.path
                            }

                            if(newObj.field) list.push(newObj)

                        }
                    })
                }
            }
            return list
        },
        filterData() {
            return this.data.filter( key => {
                console.log(key)
                return key.field.toLowerCase().indexOf( this.search.toLowerCase().trim() ) > -1
                // return keys['fileld'].toLowerCase().indexOf( this.search.toLowerCase() ) > -1
            })
        },
    },
    updated() {
        if(this.showSearch)  this.$nextTick(() => this.$refs.search.focus())

   }
}
</script>

<style lang="scss">
#gSearch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, .9) 100%, transparent);
    z-index: 9998;

    .search {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        margin-top: 5%;
        margin-left: 10%;

        .search-input {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 6rem;
            background: none;
            color: #ccc;
            box-shadow: none !important;
            border: 0;
            padding: 0;
            font-weight: 800;
        }
    }
    .results {
        color: #ccc;
        padding: 0 14%;

        .result {
            font-size:24px;
        }
    }

    .fa {
        color: #666;
        cursor: pointer;
        font-size: 30px;
        &:hover {
            color: #ccc;
        }
    }

    .fa-times {
        position: absolute;
        top: 14px;
        right: 17px;
        z-index: 9999;
    }
}
</style>
