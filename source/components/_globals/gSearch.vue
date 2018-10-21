<template lang="html">
    <div id="gSearch" v-if="showSearch" v-cloak>
        <div class="search">
            <input type="search"  value="" placeholder="Search" class="search-input" ref='search' autofocus v-model="search" @keydown.esc="$store.dispatch('toggleSearch'), seach = ''">
        </div>
        <transition name="fade" mode="out-in" >
        <div class="results" v-show="search">
            <div v-for="(title, i) in filterData" class="result">
                {{title[searchField]}}
            </div>
            <div class="noResults" v-show="filterData.length == 0">
                No results...
            </div>
        </div>
        </transition>
        <i class="fa fa-times" aria-hidden="true" @click="$store.dispatch('toggleSearch'), seach = ''"></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'gSearch',
    data() {
        return {
            searching: false,
            search: ''
        }
    },
    computed: {
        ...mapGetters( [ 'logged', 'location', 'searchField', 'showSearch' ]),
        data() {
            return this.$store.getters[this.location]
        },
        filterData() {
            return this.data.filter( field => {
                if(field.user_id) return  field.user_id === this.logged._id && field[this.searchField].toLowerCase().indexOf( this.search.toLowerCase() ) > -1
                else return field[this.searchField].toLowerCase().indexOf( this.search.toLowerCase() ) > -1
            })
        }
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
