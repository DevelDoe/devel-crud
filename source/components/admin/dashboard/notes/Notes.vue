<template lang="html">
    <div id="notes" class="admin">
        <div class="container-fluid">
            <div class="container-fluid">
                <gHeading heading="Notes"/>

            </div>
            <div class="row">
                <div class="col-12">
                    <section class="todoapp">
                        <header class="header">
                            <input class="new-todo" autofocus autocomplete="off" placeholder="Add a note?" v-model="newNote" @keyup.enter="addNote">
                        </header>
                        <section class="main" v-show="notes.length" v-cloak>
                            <input class="toggle-all" type="checkbox" v-model="allDone">
                            <ul class="todo-list">
                                <li v-for="(note, i) in filteredNotes" class="todo" :key=" 'note' + i" :class="{ completed: note.completed, editing: note === editedNote }" >
                                    <div class="view">
                                        <input class="toggle" type="checkbox" v-model="note.completed" @click="note.completed = !note.completed, $api.update( 'note', note )">
                                        <label @dblclick="editNote(note)"> {{ note.title }} </label>
                                        <i class="fa fa-times" aria-hidden="true" @click="removeNote(note)"></i>
                                    </div>
                                    <input class="edit" type="text" v-model="note.title" v-todo-focus="note == editedNote" @blur="doneEdit(note)" @keyup.enter="doneEdit(note)" @keyup.esc="cancelEdit(note)">
                                </li>
                            </ul>
                        </section>
                        <footer class="footer" v-show="notes.length" v-cloak>
                            <span class="todo-count"> <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left</span>
                            <ul class="filters">
                                <li :class="{ selected: visibility == 'all' }" @click="visibility = 'all'">All</li>
                                <li :class="{ selected: visibility == 'active' }" @click="visibility = 'active'">Active</li>
                                <li :class="{ selected: visibility == 'completed' }" @click="visibility = 'completed'">Completed</li>
                            </ul>
                            <button class="clear-completed" @click="removeCompleted()" v-show="notes.length > remaining" v-cloak>Clear completed</button>
                        </footer>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

var filters = {
    all: function( notes ) {
        return notes
    },
    active: function( notes ) {
        return notes.filter( note => {
            return !note.completed
        })
    },
    completed: function ( notes ) {
        return notes.filter( note => {
            return note.completed
        })
    }
}

import { mapGetters } from 'vuex'

export default {
    name: 'note',
    data() {
        return {
            newNote: '',
            editedNote: null,
            visibility: 'active'
        }
    },
    computed: {
        loggedNotes: function() {
            return this.notes.filter( note => {
                return note.user_id === this.logged._id
            })
        },
        filteredNotes: function() {
            return filters[this.visibility]( this.loggedNotes )
        },
        remaining: function() {
            return filters.active( this.notes ).length
        },
        allDone: {
            get: function() {
                return this.remaining === 0
            },
            set: function( value ) {
                this.notes.forEach( note => {
                    note.completed = value
                })
            }
        },
        ...mapGetters([ 'notes', 'logged' ])
    },
    filters: {
        pluralize: function( n ) {
            return n === 1 ? 'item' : 'items'
        }
    },
    methods: {
        addNote: function() {
            const value = this.newNote && this.newNote.trim()
            const note = {
                title: value,
                completed: false,
                user_id: this.logged._id
            }
            const valid = this.$api.save( 'note', note )
            if( valid === undefined ) {
                this.newNote = ''
            }
        },
        removeNote: function( note ) {
            this.$api.del( 'note', note )
        },
        editNote: function( note ) {
            this.beforeEditCache = note.title
            this.editedNote = note
        },
        doneEdit: function( note ) {
            if( !this.editedNote ) return
            this.editedNote = null

            note.title = note.title.trim()
            if( !note.title ) this.removeNote( note._id )
            if ( this.beforeEditCache === note.title ) return
            else  {
                const valid = this.$api.update( 'note', note )

                if ( !valid && valid !== undefined ) {
                    note.title = this.beforeEditCache
                }
            }
        },
        cancelEdit: function() {
            this.editedNote = null,
            note.title = this.beforeEditCache
        },
        removeCompleted: function() {
            this.notes = filters.active( this.notes )
        }
    },
    directives: {
        'todo-focus': function( el, binding ) {
            if( binding.value ) el.focus()
        }
    },
    mounted() {
        this.$store.dispatch( 'setLocation', 'notes' )
    },
    destroyed() {
        this.$store.dispatch( 'setLocation', '' )
    }
}
</script>
